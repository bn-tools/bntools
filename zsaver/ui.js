function makeLangSpans(catalog) {
    const fragment = document.createDocumentFragment();
    for (const code in catalog) {
        const span = document.createElement("span");
        fragment.appendChild(span);
        span.dataset.localize = true;
        span.lang = code;
        span.textContent = catalog[code];
    }
    return fragment;
}

function makeCopyButton(callback, label = { en: "copy", ja: "コピー" }) {
    const copyButton = document.createElement("button");
    copyButton.className = "btn btn-sm btn-secondary";
    copyButton.type = "button";
    copyButton.appendChild(makeLangSpans(label));
    let hintTimeout;
    copyButton.onclick = () => {
        callback().then(() => {
            clearTimeout(hintTimeout);
            copyButton.style.width = copyButton.offsetWidth + "px";
            copyButton.textContent = "";
            copyButton.appendChild(
                makeLangSpans({ en: "copied!", ja: "コピーされた！" })
            );
            hintTimeout = setTimeout(() => {
                copyButton.textContent = "";
                copyButton.appendChild(makeLangSpans(label));
                copyButton.style.width = null;
            }, 1000);
        });
    };
    return copyButton;
}

function makeTextCopyButton(f, label = { en: "copy", ja: "コピー" }) {
    return makeCopyButton(() => {
        return navigator.clipboard.writeText(f());
    }, label);
}

function renderNavicustSection(
    navicust,
    navicustData,
    backgroundColor = "none"
) {
    const container = document.createElement("div");

    const heading = document.createElement("h3");
    container.appendChild(heading);
    heading.className = "h4";

    heading.appendChild(
        makeLangSpans({ en: "navicust", ja: "ナビカスタマイザー" })
    );
    heading.appendChild(document.createElement("br"));

    heading.appendChild(
        makeTextCopyButton(() =>
            navicust.map(({ id }) => navicustData[id].name[LANG]).join(", ")
        )
    );

    const sorted = navicust.slice().sort((l, r) => l.id - r.id);

    const solidBlocks = sorted.filter(({ id }) => navicustData[id].isSolid);
    const plusBlocks = sorted.filter(({ id }) => !navicustData[id].isSolid);

    heading.appendChild(document.createTextNode(" "));
    heading.appendChild(
        makeTextCopyButton(
            () => {
                let lines = [];
                for (
                    let i = 0;
                    i < Math.max(solidBlocks.length, plusBlocks.length);
                    ++i
                ) {
                    const left =
                        i < solidBlocks.length
                            ? navicustData[solidBlocks[i].id].name[LANG]
                            : "";
                    const right =
                        i < plusBlocks.length
                            ? navicustData[plusBlocks[i].id].name[LANG]
                            : "";
                    lines.push(left + "\t" + right);
                }
                return lines.join("\n");
            },
            {
                en: "copy for tournament registration",
                ja: "トーナメント登録用としてコピー",
            }
        )
    );

    const view = document.createElement("div");
    container.appendChild(view);
    view.className = "d-flex flex-wrap";

    const ncArr = navicustToArray2d(navicust);
    const rendered = renderNavicust(
        ncArr,
        navicust.map((onGrid) => {
            const block = navicustData[onGrid.id];
            return {
                color: block.colors[onGrid.variant],
                isSolid: block.isSolid,
            };
        }),
        {
            commandLine: 3,
            safeAreaTop: 1,
            safeAreaLeft: 1,
            safeAreaNrows: 5,
            safeAreaNcols: 5,
            deadCorners: true,
        },
        backgroundColor
    );
    view.appendChild(rendered);

    requestAnimationFrame(() => {
        nodeToPngBlob(
            clearNavicustNumbers(rendered),
            rendered.offsetWidth,
            rendered.offsetHeight
        ).then((blob) => {
            heading.appendChild(document.createTextNode(" "));
            if (typeof ClipboardItem !== "undefined") {
                heading.appendChild(
                    makeCopyButton(
                        () => {
                            return navigator.clipboard.write([
                                new ClipboardItem({
                                    "image/png": blob,
                                }),
                            ]);
                        },
                        { en: "copy image", ja: "画像をコピー" }
                    )
                );
                heading.appendChild(document.createTextNode(" "));
            }

            const downloadButton = document.createElement("button");
            heading.appendChild(downloadButton);

            downloadButton.className = "btn btn-sm btn-secondary";
            downloadButton.type = "button";
            downloadButton.appendChild(
                makeLangSpans({
                    en: "download image",
                    ja: "画像をダウンロード",
                })
            );
            downloadButton.onclick = () => {
                downloadBlob(blob, "navicust.png");
            };
        });
    });

    const commandLineBlocks = new Set(array2d.row(ncArr, 3));
    commandLineBlocks.delete(-1);

    const listContainer = document.createElement("div");
    view.appendChild(listContainer);
    listContainer.className = "p-1";

    const list = document.createElement("ol");
    listContainer.appendChild(list);
    for (let i = 0; i < navicust.length; ++i) {
        const li = document.createElement("li");
        list.appendChild(li);

        const block = navicustData[navicust[i].id];
        const isFunctional = !block.isSolid || commandLineBlocks.has(i);

        let textEn =
            block.name.en +
            " (" +
            NAVICUST_COLORS[block.colors[navicust[i].variant]].name.en +
            ")";
        let textJa =
            block.name.ja +
            "（" +
            NAVICUST_COLORS[block.colors[navicust[i].variant]].name.ja +
            "）";

        if (!navicust[i].compressed && block.squares.some((x) => x == 2)) {
            textEn += " (uncompressed)";
            textJa += "（非圧縮）";
        }

        const spans = makeLangSpans({ en: textEn, ja: textJa });

        if (isFunctional) {
            li.appendChild(spans);
        } else {
            const del = document.createElement("del");
            li.appendChild(del);
            li.appendChild(spans);
        }
    }

    return container;
}

function renderFolderSection(folder, chipData) {
    const counts = new Map();

    let regChip = null;
    let tagChips = [];

    for (const chip of folder.chips) {
        const k = (chip.id << 8) | CHIP_CODES.indexOf(chip.code);
        counts.set(k, (counts.get(k) || 0) + 1);
        if (chip.isRegular) {
            regChip = chip;
        }
        if (chip.isTag) {
            tagChips.push(chip);
        }
    }

    const sorted = Array.from(counts, ([key, count]) => {
        return {
            key,
            id: key >> 8,
            code: CHIP_CODES[key & 0xff],
            count,
        };
    });

    sorted.sort((l, r) => {
        return l.key - r.key;
    });

    const container = document.createElement("div");

    const folderHeading = document.createElement("h3");
    container.appendChild(folderHeading);
    folderHeading.className = "h4";
    folderHeading.appendChild(
        makeLangSpans({
            en: folder.name + (folder.isEquipped ? " (equipped)" : ""),
            ja: folder.name + (folder.isEquipped ? "（装備）" : ""),
        })
    );

    folderHeading.appendChild(document.createElement("br"));

    folderHeading.appendChild(
        makeTextCopyButton(() =>
            sorted
                .map(({ id, code, count }) => {
                    const chip = chipData[id];
                    let text = count + "x " + chip.name[LANG] + " " + code;
                    if (
                        regChip != null &&
                        id == regChip.id &&
                        code == regChip.code
                    ) {
                        text += " [REG]";
                    }

                    if (tagChips.length == 2) {
                        if (id == tagChips[0].id && code == tagChips[0].code) {
                            text += " [TAG]";
                        }
                        if (id == tagChips[1].id && code == tagChips[1].code) {
                            text += " [TAG]";
                        }
                    }

                    return text;
                })
                .join("\n")
        )
    );
    folderHeading.appendChild(document.createTextNode(" "));
    folderHeading.appendChild(
        makeTextCopyButton(
            () =>
                sorted
                    .map(({ id, code, count }) => {
                        const chip = chipData[id];
                        let text =
                            count + "\t" + chip.name[LANG] + "\t" + code + "\t";
                        if (
                            regChip != null &&
                            id == regChip.id &&
                            code == regChip.code
                        ) {
                            text += "[REG]";
                        }

                        if (tagChips.length == 2) {
                            if (
                                id == tagChips[0].id &&
                                code == tagChips[0].code
                            ) {
                                text += " [TAG]";
                            }
                            if (
                                id == tagChips[1].id &&
                                code == tagChips[1].code
                            ) {
                                text += " [TAG]";
                            }
                        }

                        return text;
                    })
                    .join("\n"),
            {
                en: "copy for tournament registration",
                ja: "トーナメント登録用としてコピー",
            }
        )
    );

    const table = document.createElement("table");
    container.appendChild(table);
    table.className = "table table-sm table-striped";

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (const { id, code, count } of sorted) {
        const chip = chipData[id];

        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const countTh = document.createElement("th");
        tr.appendChild(countTh);
        countTh.className = "col-1";
        countTh.textContent = count + "x";

        const nameTd = document.createElement("td");
        tr.appendChild(nameTd);

        if (chip.index != null) {
            const a = document.createElement("a");
            a.target = "_blank";
            a.href =
                "/chiplibrary/6/#" +
                CHIP_PREFIXES[chip.section] +
                chip.index.toString() +
                (chip.version != null ? chip.version : "");
            nameTd.appendChild(a);
            a.appendChild(makeLangSpans(chip.name));
        } else {
            nameTd.appendChild(makeLangSpans(chip.name));
        }

        let tail = " " + code;

        if (regChip != null && id == regChip.id && code == regChip.code) {
            tail += " [REG]";
        }

        if (tagChips.length == 2) {
            if (id == tagChips[0].id && code == tagChips[0].code) {
                tail += " [TAG]";
            }
            if (id == tagChips[1].id && code == tagChips[1].code) {
                tail += " [TAG]";
            }
        }

        nameTd.appendChild(document.createTextNode(tail));
    }

    return container;
}

function renderModcardBadge(b, enabled) {
    const div = document.createElement("div");
    div.appendChild(makeLangSpans(b.name));
    div.className =
        "my-1 px-1 rounded modcard-badge " +
        (enabled
            ? b.debuff
                ? "modcard-badge-debuff"
                : "modcard-badge-buff"
            : "modcard-badge-off");
    return div;
}

function renderModcardsSection(modcards, gameInfo, modcardData) {
    const container = document.createElement("div");

    const heading = document.createElement("h3");
    container.appendChild(heading);
    heading.className = "h4";
    heading.appendChild(
        makeLangSpans({
            en: "modcards",
            ja: "改造カード",
        })
    );
    heading.appendChild(document.createElement("br"));

    heading.appendChild(
        makeTextCopyButton(() =>
            modcards
                .map(({ id, enabled }) => {
                    let name =
                        modcardData[id].name[LANG] +
                        " (" +
                        modcardData[id].mb +
                        "MB)";
                    if (!enabled) {
                        name += " (off)";
                    }
                    return name;
                })
                .join(", ")
        )
    );
    heading.appendChild(document.createTextNode(" "));
    heading.appendChild(
        makeTextCopyButton(
            () =>
                modcards
                    .filter(({ enabled }) => enabled)
                    .map(
                        ({ id }) =>
                            modcardData[id].name[LANG] +
                            "\t" +
                            modcardData[id].mb
                    )
                    .join("\n"),
            {
                en: "copy for tournament registration",
                ja: "トーナメント登録用としてコピー",
            }
        )
    );

    const table = document.createElement("table");
    container.appendChild(table);
    table.className = "table table-sm table-striped";

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (const { id, enabled } of modcards) {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const nameTd = document.createElement("td");
        tr.appendChild(nameTd);

        const nameSpans = makeLangSpans({
            en: modcardData[id].name.en + " (" + modcardData[id].mb + "MB)",
            ja: modcardData[id].name.ja + "（" + modcardData[id].mb + "MB）",
        });

        if (!enabled) {
            const el = document.createElement("del");
            nameTd.appendChild(el);
            el.appendChild(nameSpans);
        } else {
            nameTd.appendChild(nameSpans);
        }

        const parametersTd = document.createElement("td");
        tr.appendChild(parametersTd);
        parametersTd.style.width = "30%";

        for (const parameter of modcardData[id].parameters) {
            if (
                parameter.version != null &&
                parameter.version != gameInfo.version
            ) {
                continue;
            }
            parametersTd.appendChild(renderModcardBadge(parameter, enabled));
        }

        const abilitiesTd = document.createElement("td");
        tr.appendChild(abilitiesTd);
        abilitiesTd.style.width = "30%";

        for (const ability of modcardData[id].abilities) {
            if (
                ability.version != null &&
                ability.version != gameInfo.version
            ) {
                continue;
            }
            abilitiesTd.appendChild(renderModcardBadge(ability, enabled));
        }
    }

    return container;
}
