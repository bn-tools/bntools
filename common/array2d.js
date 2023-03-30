function array2d(nrows, ncols) {
    const arr2d = new Array(nrows * ncols);
    arr2d.nrows = nrows;
    arr2d.ncols = ncols;
    return arr2d;
}

array2d.from = function (data, nrows, ncols) {
    const arr2d = [...data];
    arr2d.nrows = nrows;
    arr2d.ncols = ncols;
    return arr2d;
};

array2d.full = function (v, nrows, ncols) {
    const arr2d = array2d(nrows, ncols);
    arr2d.fill(v, 0, nrows * ncols);
    return arr2d;
};

array2d.copy = function (arr2d) {
    return array2d.from(arr2d, arr2d.nrows, arr2d.ncols);
};

array2d.subarray = function (arr2d, top, left, nrows, ncols) {
    const subarr2d = array2d(nrows, ncols);
    for (let i = 0; i < nrows; ++i) {
        for (let j = 0; j < ncols; ++j) {
            subarr2d[i * ncols + j] =
                arr2d[(top + i) * arr2d.ncols + (left + j)];
        }
    }
    return subarr2d;
};

array2d.transpose = function (arr2d) {
    const transposed = array2d(arr2d.ncols, arr2d.nrows);
    for (let i = 0; i < arr2d.nrows; ++i) {
        for (let j = 0; j < arr2d.ncols; ++j) {
            transposed[j * transposed.ncols + i] = arr2d[i * arr2d.ncols + j];
        }
    }
    return transposed;
};

array2d.flipRowsInplace = function (arr2d) {
    for (let i = 0; i < arr2d.nrows; ++i) {
        const limit = Math.floor(arr2d.ncols / 2);
        for (let j = 0; j < limit; ++j) {
            let tmp = arr2d[i * arr2d.ncols + j];
            arr2d[i * arr2d.ncols + j] =
                arr2d[i * arr2d.ncols + (arr2d.ncols - j) - 1];
            arr2d[i * arr2d.ncols + (arr2d.ncols - j) - 1] = tmp;
        }
    }
};

array2d.rot90 = function (arr2d) {
    const transposed = array2d.transpose(arr2d);
    array2d.flipRowsInplace(transposed);
    return transposed;
};

array2d.equal = function (l, r) {
    return (
        l.nrows == r.nrows && l.ncols == r.ncols && l.every((v, i) => v == r[i])
    );
};

array2d.pretty = function (arr2d) {
    const buf = [];
    for (let i = 0; i < arr2d.nrows; ++i) {
        for (let j = 0; j < arr2d.ncols; ++j) {
            buf.push(arr2d[i * arr2d.ncols + j]);
            buf.push("\t");
        }
        buf.push("\n");
    }
    return buf.join("");
};

array2d.row = function (arr2d, i) {
    return arr2d.slice(i * arr2d.ncols, (i + 1) * arr2d.ncols);
};

array2d.col = function (arr2d, j) {
    const col = new Array(arr2d.nrows);
    for (let i = 0; i < arr2d.nrows; ++i) {
        col[i] = arr2d[i * arr2d.ncols + j];
    }
    return col;
};
