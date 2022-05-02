const { renderNavicust, clearNavicustNumbers, NAVICUST_COLORS } = (() => {
    const borderColor = "#29314a";
    const cellColor = "#105284";

    const borderWidth = 4;

    const NAVICUST_COLORS = {
        red: {
            name: {
                en: "red",
                ja: "赤",
            },
            color: "#de1000",
            plusColor: "#bd0000",
        },
        pink: {
            name: {
                en: "pink",
                ja: "ピンク",
            },
            color: "#de8cc6",
            plusColor: "#bd6ba5",
        },
        yellow: {
            name: {
                en: "yellow",
                ja: "黄",
            },
            color: "#dede00",
            plusColor: "#bdbd00",
        },
        green: {
            name: {
                en: "green",
                ja: "緑",
            },
            color: "#18c600",
            plusColor: "#00a500",
        },
        blue: {
            name: {
                en: "blue",
                ja: "青",
            },
            color: "#2984de",
            plusColor: "#0860b8",
        },
        white: {
            name: {
                en: "white",
                ja: "白",
            },
            color: "#dedede",
            plusColor: "#bdbdbd",
        },
    };

    function renderNavicust(
        packing,
        infos,
        {
            commandLine,
            safeAreaTop,
            safeAreaLeft,
            safeAreaNrows,
            safeAreaNcols,
            deadCorners,
        },
        backgroundColor = "none"
    ) {
        const container = document.createElement("div");
        container.style.overflow = "auto";
        container.style.backgroundColor = backgroundColor;
        container.style.padding = `${borderWidth * 4}px`;

        const colorsContainer = document.createElement("div");
        container.appendChild(colorsContainer);

        colorsContainer.style.display = "flex";
        colorsContainer.style.marginBottom = `${borderWidth * 2}px`;

        const colors = [];
        for (const item of packing) {
            if (item == -1) {
                continue;
            }
            const color = infos[item].color;
            if (colors.indexOf(color) != -1) {
                continue;
            }
            colors.push(color);
        }

        const noBugColorsTable = document.createElement("table");
        colorsContainer.appendChild(noBugColorsTable);

        noBugColorsTable.style.display = "inline-block";
        noBugColorsTable.style.background = borderColor;
        noBugColorsTable.style.boxSizing = "border-box";
        noBugColorsTable.style.borderStyle = "solid";
        noBugColorsTable.style.borderColor = borderColor;
        noBugColorsTable.style.borderWidth = `${borderWidth / 4}px`;
        noBugColorsTable.style.borderSpacing = 0;
        noBugColorsTable.style.borderCollapse = "separate";

        const noBugColorsTr = document.createElement("tr");
        noBugColorsTable.appendChild(noBugColorsTr);

        for (let i = 0; i < 4; ++i) {
            const colorTd = document.createElement("td");
            noBugColorsTr.appendChild(colorTd);

            colorTd.style.borderStyle = "solid";
            colorTd.style.borderColor = borderColor;
            colorTd.style.boxSizing = "border-box";
            colorTd.style.borderWidth = `${borderWidth / 2}px`;
            colorTd.style.width = `${borderWidth * 8}px`;
            colorTd.style.height = `${borderWidth * 5}px`;
            colorTd.style.padding = 0;

            const colorDiv = document.createElement("div");
            colorTd.appendChild(colorDiv);

            colorDiv.style.width = "100%";
            colorDiv.style.height = "100%";
            colorDiv.style.background =
                i < colors.length
                    ? NAVICUST_COLORS[colors[i]].plusColor
                    : cellColor;
        }

        const bugColorsTable = document.createElement("table");
        colorsContainer.appendChild(bugColorsTable);
        bugColorsTable.style.display = "inline-block";
        bugColorsTable.style.borderStyle = "solid";
        bugColorsTable.style.borderColor = "transparent";
        bugColorsTable.style.boxSizing = "border-box";
        bugColorsTable.style.borderWidth = `${borderWidth / 4}px`;
        bugColorsTable.style.borderSpacing = 0;
        bugColorsTable.style.borderCollapse = "separate";

        const bugColorsTr = document.createElement("tr");
        bugColorsTable.appendChild(bugColorsTr);

        for (let i = 4; i < colors.length; ++i) {
            const color = colors[i];

            const colorTd = document.createElement("td");
            bugColorsTr.appendChild(colorTd);

            colorTd.style.borderStyle = "solid";
            colorTd.style.borderColor = "transparent";
            colorTd.style.boxSizing = "border-box";
            colorTd.style.borderWidth = `${borderWidth / 2}px`;
            colorTd.style.width = `${borderWidth * 8}px`;
            colorTd.style.height = `${borderWidth * 5}px`;
            colorTd.style.padding = 0;

            const colorDiv = document.createElement("div");
            colorTd.appendChild(colorDiv);

            colorDiv.style.width = "100%";
            colorDiv.style.height = "100%";
            colorDiv.style.background = NAVICUST_COLORS[color].plusColor;
        }

        const gridContainer = document.createElement("div");
        container.appendChild(gridContainer);

        gridContainer.style.position = "relative";

        const table = document.createElement("table");
        gridContainer.appendChild(table);

        table.style.background = borderColor;
        table.style.borderStyle = "solid";
        table.style.borderColor = borderColor;
        table.style.borderWidth = `${borderWidth / 2}px`;
        table.style.boxSizing = "border-box";
        table.style.borderSpacing = 0;
        table.style.borderCollapse = "separate";
        table.style.borderRadius = "4px";

        for (let i = 0; i < packing.nrows; ++i) {
            const row = document.createElement("tr");
            table.appendChild(row);

            for (let j = 0; j < packing.ncols; ++j) {
                const cell = document.createElement("td");
                row.appendChild(cell);

                const idx = packing[i * packing.ncols + j];

                const softBorders = [];
                const hardBorders = [];

                if (
                    idx == -1 ||
                    j <= 0 ||
                    packing[i * packing.ncols + (j - 1)] != idx
                ) {
                    hardBorders.push(
                        `inset ${borderWidth / 2}px 0 ${borderColor}`
                    );
                } else {
                    softBorders.push(
                        `inset ${borderWidth / 2}px 0 ${
                            NAVICUST_COLORS[infos[idx].color].plusColor
                        }`
                    );
                }

                if (
                    idx == -1 ||
                    j >= packing.ncols - 1 ||
                    packing[i * packing.ncols + (j + 1)] != idx
                ) {
                    hardBorders.push(
                        `inset ${-borderWidth / 2}px 0 ${borderColor}`
                    );
                } else {
                    softBorders.push(
                        `inset ${-borderWidth / 2}px 0 ${
                            NAVICUST_COLORS[infos[idx].color].plusColor
                        }`
                    );
                }

                if (
                    idx == -1 ||
                    i <= 0 ||
                    packing[(i - 1) * packing.ncols + j] != idx
                ) {
                    hardBorders.push(
                        `inset 0 ${borderWidth / 2}px ${borderColor}`
                    );
                } else {
                    softBorders.push(
                        `inset 0 ${borderWidth / 2}px ${
                            NAVICUST_COLORS[infos[idx].color].plusColor
                        }`
                    );
                }

                if (
                    idx == -1 ||
                    i >= packing.nrows - 1 ||
                    packing[(i + 1) * packing.ncols + j] != idx
                ) {
                    hardBorders.push(
                        `inset 0 ${-borderWidth / 2}px ${borderColor}`
                    );
                } else {
                    softBorders.push(
                        `inset 0 ${-borderWidth / 2}px ${
                            NAVICUST_COLORS[infos[idx].color].plusColor
                        }`
                    );
                }

                cell.style.width = `${borderWidth * 9}px`;
                cell.style.height = `${borderWidth * 9}px`;
                cell.style.padding = 0;
                cell.style.background = cellColor;
                cell.style.opacity =
                    i < safeAreaTop ||
                    i >= safeAreaTop + safeAreaNrows ||
                    j < safeAreaLeft ||
                    j >= safeAreaLeft + safeAreaNcols
                        ? 0.25
                        : 1.0;
                cell.style.fontSize = `${borderWidth * 3.5}px`;
                cell.style.fontFamily = "sans-serif";
                cell.style.fontWeight = "bold";

                if (
                    deadCorners &&
                    ((i == 0 && j == 0) ||
                        (i == 0 && j == packing.ncols - 1) ||
                        (i == packing.nrows - 1 && j == 0) ||
                        (i == packing.nrows - 1 && j == packing.ncols - 1))
                ) {
                    cell.style.background = borderColor;
                }

                const inner = document.createElement("div");
                cell.appendChild(inner);

                inner.style.width = "100%";
                inner.style.height = "100%";
                inner.style.boxShadow = [...hardBorders, ...softBorders].join(
                    ","
                );
                inner.style.display = "flex";
                inner.style.alignItems = "center";
                inner.style.justifyContent = "center";
                inner.className = "navicust-cell";

                if (idx != -1) {
                    const info = infos[idx];
                    if (info.isSolid) {
                        inner.style.background =
                            NAVICUST_COLORS[info.color].color;
                    } else {
                        inner.style.background = `conic-gradient(
                            from 90deg at ${borderWidth}px ${borderWidth}px,
                            ${NAVICUST_COLORS[info.color].color} 90deg,
                            ${NAVICUST_COLORS[info.color].plusColor} 0
                        )
                        calc(100% + ${borderWidth}px / 2) calc(100% + ${borderWidth}px / 2) /
                        calc(50% + ${borderWidth}px) calc(50% + ${borderWidth}px)`;
                    }
                    inner.textContent = idx + 1;
                }
            }
        }

        const commandLineTop = document.createElement("hr");
        gridContainer.appendChild(commandLineTop);
        commandLineTop.style.top = `${
            borderWidth * commandLine * 9 + borderWidth * 2.5
        }px`;
        commandLineTop.style.margin = 0;
        commandLineTop.style.padding = 0;
        commandLineTop.style.position = "absolute";
        commandLineTop.style.width = "100%";
        commandLineTop.style.borderColor = borderColor;
        commandLineTop.style.borderLeftStyle = "none";
        commandLineTop.style.borderRightStyle = "none";
        commandLineTop.style.borderTopStyle = "none";
        commandLineTop.style.borderBottomStyle = "solid";
        commandLineTop.style.boxSizing = "border-box";
        commandLineTop.style.borderWidth = `${borderWidth}px`;
        commandLineTop.style.pointerEvents = "none";
        commandLineTop.style.opacity = "1.0";

        const commandLineBottom = document.createElement("hr");
        gridContainer.appendChild(commandLineBottom);
        commandLineBottom.style.top = `${
            borderWidth * commandLine * 9 + borderWidth * 7 - borderWidth / 2
        }px`;
        commandLineBottom.style.margin = 0;
        commandLineBottom.style.padding = 0;
        commandLineBottom.style.position = "absolute";
        commandLineBottom.style.width = "100%";
        commandLineBottom.style.borderColor = borderColor;
        commandLineBottom.style.borderLeftStyle = "none";
        commandLineBottom.style.borderRightStyle = "none";
        commandLineBottom.style.borderTopStyle = "solid";
        commandLineBottom.style.borderBottomStyle = "none";
        commandLineBottom.style.boxSizing = "border-box";
        commandLineBottom.style.borderWidth = `${borderWidth}px`;
        commandLineBottom.style.pointerEvents = "none";
        commandLineBottom.style.opacity = "1.0";

        return container;
    }

    function clearNavicustNumbers(rendered) {
        rendered = rendered.cloneNode(true);
        const cells = rendered.getElementsByClassName("navicust-cell");
        for (let i = 0; i < cells.length; ++i) {
            cells[i].textContent = "";
        }
        return rendered;
    }

    return { renderNavicust, clearNavicustNumbers, NAVICUST_COLORS };
})();
