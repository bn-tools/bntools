// expandBlockmask expands the blockmask to the size of a cust, with some top and left offset.
//
// If placement of the blockmask exceeds the cust size, null will be returned.
function expandBlockmask(blockmask, custNrows, custNcols, top, left) {
    const bottom = top + blockmask.nrows;
    const right = left + blockmask.ncols;

    if (bottom > custNrows || right > custNcols) {
        return null;
    }

    const expanded = array2d.full(false, custNrows, custNcols);

    for (let i = 0; i < expanded.nrows; ++i) {
        for (let j = 0; j < expanded.ncols; ++j) {
            if (i < top || i >= bottom || j < left || j >= right) {
                continue;
            }
            expanded[i * expanded.ncols + j] =
                blockmask[(i - top) * blockmask.ncols + (j - left)];
        }
    }
    return expanded;
}

// canFit checks if an expanded mask can overlay a cust mask without overlapping or being completely out of regular bounds (i.e. no squares are within the center 5x5 area).
function canFit(
    expanded,
    cust,
    { safeAreaTop, safeAreaLeft, safeAreaNrows, safeAreaNcols, deadCorners }
) {
    // Mandatory admissibility: no corners!
    if (
        deadCorners &&
        (expanded[0 * expanded.ncols + 0] ||
            expanded[0 * expanded.ncols + expanded.ncols - 1] ||
            expanded[(expanded.ncols - 1) * expanded.ncols + 0] ||
            expanded[
                (expanded.ncols - 1) * expanded.ncols + expanded.ncols - 1
            ])
    ) {
        return false;
    }

    // Mandatory admissibility: at least one square of the block must not be out of bounds.
    {
        let hasSquareInBounds = false;
        done: for (let i = 0; i < expanded.nrows; ++i) {
            for (let j = 0; j < expanded.ncols; ++j) {
                if (
                    i >= safeAreaTop &&
                    i <= safeAreaTop + safeAreaNcols - 1 &&
                    j >= safeAreaLeft &&
                    j <= safeAreaLeft + safeAreaNrows - 1 &&
                    expanded[i * expanded.ncols + j]
                ) {
                    hasSquareInBounds = true;
                    break done;
                }
            }
        }
        if (!hasSquareInBounds) {
            return false;
        }
    }

    // Mandatory admissibility: block must not overlap another block.
    for (let i = 0; i < expanded.nrows; ++i) {
        for (let j = 0; j < expanded.ncols; ++j) {
            if (
                expanded[i * expanded.ncols + j] &&
                cust[i * cust.ncols + j] != -1
            ) {
                return false;
            }
        }
    }

    return true;
}

function arraySome(arr) {
    for (const x of arr) {
        if (x) {
            return true;
        }
    }
    return false;
}

// blockIsAdmissible performs a local admissibility check, such as being on/off the command line, being in/out of bounds, and basic fit.
function blockIsAdmissible(
    expanded,
    cust,
    placement,
    reqs,
    {
        commandLine,
        safeAreaTop,
        safeAreaLeft,
        safeAreaNrows,
        safeAreaNcols,
        deadCorners,
    }
) {
    const req = placement.req;

    if (
        !canFit(expanded, cust, {
            safeAreaTop,
            safeAreaLeft,
            safeAreaNrows,
            safeAreaNcols,
            deadCorners,
        })
    ) {
        return false;
    }

    // Optional admissibility: check if the block is appropriately in/out of bounds.
    if (req.causeBug === false) {
        for (let i = 0; i < expanded.nrows; ++i) {
            for (let j = 0; j < expanded.ncols; ++j) {
                if (
                    (i < safeAreaTop ||
                        i >= safeAreaTop + safeAreaNrows ||
                        j < safeAreaLeft ||
                        j >= safeAreaLeft + safeAreaNcols) &&
                    expanded[i * expanded.nrows + j]
                ) {
                    return false;
                }
            }
        }
    }

    // Optional admissibility: check if the block is appropriately on/off the command line.
    if (req.onCommandLine !== null || req.causeBug !== null) {
        const onCommandLine = arraySome(array2d.row(expanded, commandLine));
        if (
            (req.onCommandLine !== null &&
                req.onCommandLine != onCommandLine) ||
            (req.causeBug !== null &&
                !req.causeBug &&
                req.isSolid != onCommandLine)
        ) {
            return false;
        }
    }

    // Optional admissibility: if we aren't allowed to touch the same color, make sure we aren't placing things here that are.
    if (req.causeBug === false) {
        for (let i = 0; i < expanded.nrows; ++i) {
            for (let j = 0; j < expanded.ncols; ++j) {
                const v = expanded[i * expanded.ncols + j];
                if (!v) {
                    continue;
                }

                if (
                    i > 0 &&
                    cust[(i - 1) * cust.ncols + j] != -1 &&
                    reqs[cust[(i - 1) * cust.ncols + j]].color == req.color
                ) {
                    return false;
                }
                if (
                    i < cust.ncols - 1 &&
                    cust[(i + 1) * cust.ncols + j] != -1 &&
                    reqs[cust[(i + 1) * cust.ncols + j]].color == req.color
                ) {
                    return false;
                }
                if (
                    j > 0 &&
                    cust[i * cust.ncols + (j - 1)] != -1 &&
                    reqs[cust[i * cust.ncols + (j - 1)]].color == req.color
                ) {
                    return false;
                }
                if (
                    j < cust.nrows - 1 &&
                    cust[i * cust.ncols + (j + 1)] != -1 &&
                    reqs[cust[i * cust.ncols + (j + 1)]].color == req.color
                ) {
                    return false;
                }
            }
        }
    }

    return true;
}

// custToBlocklocs takes a cust and constructs an array of arrays of indices for each square of each block.
function custToBlocklocs(cust, n) {
    const locs = new Array(n);
    for (let i = 0; i < n; ++i) {
        locs[i] = [];
    }

    for (let i = 0; i < cust.nrows; ++i) {
        for (let j = 0; j < cust.ncols; ++j) {
            const idx = cust[i * cust.ncols + j];
            if (idx == -1) {
                continue;
            }
            locs[idx].push(i * cust.ncols + j);
        }
    }

    return locs;
}

// custIsAdmissible performs a global admissibility check: the coloring check is done here, as it requires global information (see comment below).
function custIsAdmissible(
    cust,
    reqs,
    { commandLine, safeAreaTop, safeAreaLeft, safeAreaNrows, safeAreaNcols }
) {
    const locs = custToBlocklocs(cust, reqs.length);

    for (let reqIdx = 0; reqIdx < locs.length; ++reqIdx) {
        const req = reqs[reqIdx];
        const reqLocs = locs[reqIdx];

        let causeBug = false;

        // Optional admissibility: check if a block has/doesn't have any out of bounds parts.
        let outOfBounds = false;
        for (const idx of reqLocs) {
            const i = Math.floor(idx / cust.ncols);
            const j = idx % cust.ncols;
            if (
                i < safeAreaTop ||
                i >= safeAreaTop + safeAreaNrows ||
                j < safeAreaLeft ||
                j >= safeAreaLeft + safeAreaNcols
            ) {
                outOfBounds = true;
                break;
            }
        }
        causeBug = causeBug || outOfBounds;

        // Optional admissibility: check if a block is/isn't on the command line.
        let onCommandLine = false;
        for (const idx of reqLocs) {
            if (Math.floor(idx / cust.ncols) == commandLine) {
                onCommandLine = true;
                break;
            }
        }
        causeBug = causeBug || (req.isSolid ? !onCommandLine : onCommandLine);

        // Optional admissibility: check if same-colored blocks are appropriately touching/not touching.
        //
        // I don't think this can be done incrementally because it depends on the placement of all blocks. Consider:
        //
        // 1. Optionally touchSameColor block with color X is placed.
        // 2. touchSameColor block with color Y is placed, greedily next to X.
        // 3. touchSameColor block with color Z is placed, greedily next to X or Y.
        //
        // However, valid solutions also include those where X is not placed next to Y, e.g. only Y and Z are touching and X is not.
        let touchSameColor = false;
        for (const idx of reqLocs) {
            const i = Math.floor(idx / cust.ncols);
            const j = idx % cust.ncols;
            if (
                i > 0 &&
                cust[(i - 1) * cust.ncols + j] != -1 &&
                cust[(i - 1) * cust.ncols + j] != reqIdx &&
                reqs[cust[(i - 1) * cust.ncols + j]].color == req.color
            ) {
                touchSameColor = true;
                break;
            }
            if (
                i < cust.ncols - 1 &&
                cust[(i + 1) * cust.ncols + j] != -1 &&
                cust[(i + 1) * cust.ncols + j] != reqIdx &&
                reqs[cust[(i + 1) * cust.ncols + j]].color == req.color
            ) {
                touchSameColor = true;
                break;
            }
            if (
                j > 0 &&
                cust[i * cust.ncols + (j - 1)] != -1 &&
                cust[i * cust.ncols + (j - 1)] != reqIdx &&
                reqs[cust[i * cust.ncols + (j - 1)]].color == req.color
            ) {
                touchSameColor = true;
                break;
            }
            if (
                j < cust.nrows - 1 &&
                cust[i * cust.ncols + (j + 1)] != -1 &&
                cust[i * cust.ncols + (j + 1)] != reqIdx &&
                reqs[cust[i * cust.ncols + (j + 1)]].color == req.color
            ) {
                touchSameColor = true;
                break;
            }
        }
        causeBug = causeBug || touchSameColor;

        if (req.causeBug != null && req.causeBug !== causeBug) {
            return false;
        }
    }

    return true;
}

// reqsAreAdmissible performs a pre-check of requirements to ensure they are admissible at all for solving.
//
// Thanks to HonorNite#3819 for these suggestions!
function reqsAreAdmissible(reqs, options) {
    // Mandatory check: blocks required to be on the command line must be less than or equal to the number of columns.
    let commandLineBlocks = 0;
    for (const req of reqs) {
        if (req.onCommandLine) {
            ++commandLineBlocks;
        }
    }
    if (commandLineBlocks > options.ncols) {
        return false;
    }

    // Mandatory check: total number of squares must be less than the total allowed space.
    const maxSquares =
        options.nrows * options.ncols - (options.deadCorners ? 4 : 0);
    let numSquares = 0;
    for (const req of reqs) {
        for (const square of req.squares) {
            numSquares += req.compressed !== false ? square == 1 : square >= 1;
        }
    }
    if (numSquares > maxSquares) {
        return false;
    }

    return true;
}

// computePositions precomputes all the valid positions.
function computePositions(placement, reqs, emptyCust, options) {
    const poses = [];
    for (let i = 0; i < emptyCust.nrows; ++i) {
        for (let j = 0; j < emptyCust.ncols; ++j) {
            for (let maskIdx = 0; maskIdx < placement.masks.length; ++maskIdx) {
                const expanded = expandBlockmask(
                    placement.masks[maskIdx].mask,
                    emptyCust.nrows,
                    emptyCust.ncols,
                    i,
                    j
                );
                if (expanded == null) {
                    continue;
                }
                if (
                    !blockIsAdmissible(
                        expanded,
                        emptyCust,
                        placement,
                        reqs,
                        options
                    )
                ) {
                    continue;
                }
                poses.push({ top: i, left: j, maskIdx: maskIdx });
            }
        }
    }
    return poses;
}

function custToBlockIdxMap(cust, reqs) {
    const blockIdxMap = array2d.full(-1, cust.nrows, cust.ncols);
    for (let i = 0; i < cust.nrows; ++i) {
        for (let j = 0; j < cust.ncols; ++j) {
            const v = cust[i * blockIdxMap.ncols + j];
            if (v == -1) {
                continue;
            }
            // We don't need to encode if the block is compressed in here or not: compression will monotonically decrease the total squares occupied, so it is not possible to have a different number of compressed and uncompressed blocks.
            blockIdxMap[i * blockIdxMap.ncols + j] =
                (reqs[v].id << 2) | reqs[v].variant;
        }
    }
    return blockIdxMap;
}

function to8BitString(arr2d) {
    return String.fromCharCode(...arr2d.map((x) => x & 0xff));
}

function trimMask(mask) {
    let firstRow = 0;
    for (; firstRow < mask.nrows; ++firstRow) {
        if (arraySome(array2d.row(mask, firstRow))) {
            break;
        }
    }

    let lastRow = mask.nrows;
    for (; lastRow >= 0; --lastRow) {
        if (arraySome(array2d.row(mask, lastRow - 1))) {
            break;
        }
    }

    let firstCol = 0;
    for (; firstCol < mask.ncols; ++firstCol) {
        if (arraySome(array2d.col(mask, firstCol))) {
            break;
        }
    }

    let lastCol = mask.ncols;
    for (; lastCol >= 0; --lastCol) {
        if (arraySome(array2d.col(mask, lastCol - 1))) {
            break;
        }
    }

    return {
        trimmed: array2d.subarray(
            mask,
            firstRow,
            firstCol,
            lastRow - firstRow,
            lastCol - firstCol
        ),
        top: firstRow,
        left: firstCol,
    };
}

class Solver {
    constructor(reqs, options) {
        this.reqs = reqs;
        this.options = options;
        this.visited = new Set();
        this.placements = [];

        if (!reqsAreAdmissible(this.reqs, this.options)) {
            this.stack = [];
            return;
        }

        const cust = array2d.full(-1, options.nrows, options.ncols);

        for (let reqIdx = 0; reqIdx < this.reqs.length; ++reqIdx) {
            const req = this.reqs[reqIdx];

            const baseMasks = [];
            if (req.compressed === null || req.compressed === false) {
                let hasCompressed = false;
                findCompressed: for (let i = 0; i < req.nrows; ++i) {
                    for (let j = 0; j < req.ncols; ++j) {
                        if (req.squares[i * req.ncols + j] == 2) {
                            hasCompressed = true;
                            break findCompressed;
                        }
                    }
                }

                if (hasCompressed) {
                    const mask = array2d(req.nrows, req.ncols);
                    for (let i = 0; i < req.nrows; ++i) {
                        for (let j = 0; j < req.ncols; ++j) {
                            mask[i * req.ncols + j] =
                                req.squares[i * req.ncols + j] != 0;
                        }
                    }
                    baseMasks.push({
                        compressed: false,
                        centerRow: Math.floor(mask.nrows / 2),
                        centerCol: Math.floor(mask.ncols / 2),
                        mask,
                    });
                }
            }
            if (req.compressed === null || req.compressed === true) {
                const mask = array2d(req.nrows, req.ncols);
                for (let i = 0; i < req.nrows; ++i) {
                    for (let j = 0; j < req.ncols; ++j) {
                        mask[i * req.ncols + j] =
                            req.squares[i * req.ncols + j] == 1;
                    }
                }

                baseMasks.push({
                    compressed: true,
                    centerRow: Math.floor(mask.nrows / 2),
                    centerCol: Math.floor(mask.ncols / 2),
                    mask,
                });
            }

            const masks = [];

            for (const {
                mask,
                centerRow,
                centerCol,
                compressed,
            } of baseMasks) {
                const {
                    top: top0,
                    left: left0,
                    trimmed: trimmed0,
                } = trimMask(mask);
                masks.push({
                    mask: trimmed0,
                    top: top0 - centerRow,
                    left: left0 - centerCol,
                    compressed,
                    rot: 0,
                });
                const maskRot90 = array2d.rot90(mask);
                if (!array2d.equal(mask, maskRot90)) {
                    const {
                        top: top90,
                        left: left90,
                        trimmed: trimmed90,
                    } = trimMask(maskRot90);
                    masks.push({
                        mask: trimmed90,
                        top: top90 - centerRow,
                        left: left90 - centerCol,
                        compressed,
                        rot: 1,
                    });
                    const maskRot180 = array2d.rot90(maskRot90);
                    if (!array2d.equal(mask, maskRot180)) {
                        const {
                            top: top180,
                            left: left180,
                            trimmed: trimmed180,
                        } = trimMask(maskRot180);
                        masks.push({
                            mask: trimmed180,
                            top: top180 - centerRow,
                            left: left180 - centerCol,
                            compressed,
                            rot: 2,
                        });

                        const maskRot270 = array2d.rot90(maskRot180);
                        const {
                            top: top270,
                            left: left270,
                            trimmed: trimmed270,
                        } = trimMask(maskRot270);
                        masks.push({
                            mask: trimmed270,
                            top: top270 - centerRow,
                            left: left270 - centerCol,
                            compressed,
                            rot: 3,
                        });
                    }
                }
            }

            const placement = {
                reqIdx,
                req,
                masks,
            };
            placement.positions = computePositions(
                placement,
                reqs,
                cust,
                options
            );

            this.placements.push(placement);
        }

        this.placements.sort((l, r) => {
            // Heuristic: fit hard to fit blocks first, then easier ones.
            const sizeDiff = l.positions.length - r.positions.length;
            if (sizeDiff != 0) {
                return sizeDiff;
            }

            // If two blocks are just as hard to fit, make sure group ones of the same type together.
            //
            // This is required for computing the blockidxmap efficiently: we should guarantee that all of a given type have been placed already before we move onto the next type, so we don't end up putting things in the same positions over and over again.
            return l.req.blockIdx - r.req.blockIdx;
        });

        this.stack =
            (this.placements.length > 0) &
            !this.placements.some(
                (placement) => placement.positions.length == 0
            )
                ? [
                      {
                          cust: cust,
                          placementIdx: 0,
                          posIdx: 0,
                          reqStatus: new Array(reqs.length),
                      },
                  ]
                : [];
    }

    next() {
        while (this.stack.length > 0) {
            const { cust, reqStatus, placementIdx, posIdx } = this.stack.pop();

            const placement = this.placements[placementIdx];

            if (posIdx < placement.positions.length - 1) {
                // If there are more positions in this placement, push an entry to look one to the right.
                this.stack.push({
                    cust,
                    placementIdx,
                    posIdx: posIdx + 1,
                    reqStatus,
                });
            }

            const pos = placement.positions[posIdx];

            const {
                mask,
                compressed,
                top: maskTop,
                left: maskLeft,
                rot,
            } = placement.masks[pos.maskIdx];
            const expanded = expandBlockmask(
                mask,
                cust.nrows,
                cust.ncols,
                pos.top,
                pos.left
            );
            if (
                expanded == null ||
                !blockIsAdmissible(
                    expanded,
                    cust,
                    placement,
                    this.reqs,
                    this.options
                )
            ) {
                continue;
            }

            const cust2 = array2d.copy(cust);
            for (let i = 0; i < cust.nrows; ++i) {
                for (let j = 0; j < cust.ncols; ++j) {
                    if (!expanded[i * expanded.ncols + j]) {
                        continue;
                    }
                    cust2[i * cust.ncols + j] = placement.reqIdx;
                }
            }

            const blockIdxBitstring = to8BitString(
                custToBlockIdxMap(cust2, this.reqs)
            );
            // If we've already seen this configuration but this is just a different configuration of placements (e.g. placement at index 2 and 3 swapped around), don't bother searching further.
            if (this.visited.has(blockIdxBitstring)) {
                continue;
            }
            this.visited.add(blockIdxBitstring);

            const reqStatus2 = [...reqStatus];
            reqStatus2[placement.reqIdx] = {
                compressed,
                row: pos.top - maskTop,
                col: pos.left - maskLeft,
                rot,
            };

            if (placementIdx >= this.placements.length - 1) {
                if (!custIsAdmissible(cust2, this.reqs, this.options)) {
                    continue;
                }
                return { cust: cust2, reqStatus: reqStatus2 };
            }

            // If this isn't the last placement, push an entry to look deeper by one.
            this.stack.push({
                cust: cust2,
                placementIdx: placementIdx + 1,
                posIdx: 0,
                reqStatus: reqStatus2,
            });
        }
        return null;
    }
}
