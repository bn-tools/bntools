const { renderNavicust, clearNavicustNumbers, NAVICUST_COLORS } = (() => {
    const borderColor = "#29314a";
    const cellColor = "#105284";

    const borderWidth = 6;

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

        noBugColorsTable.style.boxSizing = "border-box";
        noBugColorsTable.style.borderCollapse = "separate";
        noBugColorsTable.style.borderSpacing = "4px";
        noBugColorsTable.style.background = borderColor;

        const noBugColorsTr = document.createElement("tr");
        noBugColorsTable.appendChild(noBugColorsTr);

        for (let i = 0; i < 4; ++i) {
            const colorTd = document.createElement("td");
            noBugColorsTr.appendChild(colorTd);

            colorTd.style.height = `${borderWidth * 4}px`;
            colorTd.style.width = `${borderWidth * 6}px`;
            colorTd.style.boxSizing = "border-box";
            colorTd.style.background =
                i < colors.length
                    ? NAVICUST_COLORS[colors[i]].plusColor
                    : cellColor;
        }

        const bugColorsTable = document.createElement("table");
        colorsContainer.appendChild(bugColorsTable);
        bugColorsTable.style.boxSizing = "border-box";
        bugColorsTable.style.borderCollapse = "separate";
        bugColorsTable.style.borderSpacing = "4px";

        const bugColorsTr = document.createElement("tr");
        bugColorsTable.appendChild(bugColorsTr);

        for (let i = 4; i < colors.length; ++i) {
            const color = colors[i];

            const colorTd = document.createElement("td");
            bugColorsTr.appendChild(colorTd);

            colorTd.style.height = `${borderWidth * 4}px`;
            colorTd.style.width = `${borderWidth * 6}px`;
            colorTd.style.boxSizing = "border-box";
            colorTd.style.background = NAVICUST_COLORS[color].plusColor;
        }

        const gridContainer = document.createElement("div");
        container.appendChild(gridContainer);

        gridContainer.style.position = "relative";
        gridContainer.style.width = `${
            borderWidth * (packing.ncols * 10 + 1)
        }px`;
        gridContainer.style.height = `${
            borderWidth * (packing.nrows * 10 + 1)
        }px`;

        const table = document.createElement("table");
        gridContainer.appendChild(table);

        table.style.boxSizing = "border-box";
        table.style.borderCollapse = "separate";
        table.style.borderSpacing = `${borderWidth}px`;
        table.style.background = borderColor;
        table.style.width = `${borderWidth * (packing.ncols * 10 + 1)}px`;
        table.style.height = `${borderWidth * (packing.nrows * 10 + 1)}px`;

        for (let i = 0; i < packing.nrows; ++i) {
            const row = document.createElement("tr");
            table.appendChild(row);

            for (let j = 0; j < packing.ncols; ++j) {
                const cell = document.createElement("td");
                row.appendChild(cell);

                const idx = packing[i * packing.ncols + j];
                cell.className = "navicust-cell";
                cell.style.boxSizing = "border-box";
                cell.style.background = cellColor;
                cell.style.textAlign = "center";
                cell.style.verticalAlign = "middle";
                cell.style.fontSize = `${borderWidth * 3.5}px`;
                cell.style.fontFamily = "sans-serif";
                cell.style.fontWeight = "bold";
                cell.style.position = "relative";
                cell.style.width = `${borderWidth * 9}px`;
                cell.style.height = `${borderWidth * 9}px`;

                if (
                    i < safeAreaTop ||
                    i >= safeAreaTop + safeAreaNrows ||
                    j < safeAreaLeft ||
                    j >= safeAreaLeft + safeAreaNcols
                ) {
                    cell.style.opacity = 0.25;
                }

                if (
                    deadCorners &&
                    ((i == 0 && j == 0) ||
                        (i == 0 && j == packing.ncols - 1) ||
                        (i == packing.nrows - 1 && j == 0) ||
                        (i == packing.nrows - 1 && j == packing.ncols - 1))
                ) {
                    cell.style.background = borderColor;
                }

                if (idx != -1) {
                    const info = infos[idx];
                    if (info.isSolid) {
                        cell.style.background =
                            NAVICUST_COLORS[info.color].color;
                    } else {
                        cell.style.background = `conic-gradient(
                            from 90deg at ${borderWidth}px ${borderWidth}px,
                            ${NAVICUST_COLORS[info.color].color} 90deg,
                            ${NAVICUST_COLORS[info.color].plusColor} 0
                        )
                        calc(100% + ${borderWidth}px / 2) calc(100% + ${borderWidth}px / 2) /
                        calc(50% + ${borderWidth}px) calc(50% + ${borderWidth}px)`;
                    }
                    cell.textContent = idx + 1;
                }
            }
        }

        const commandLineTop = document.createElement("div");
        gridContainer.appendChild(commandLineTop);
        commandLineTop.style.position = "absolute";
        commandLineTop.style.width = table.style.width;
        commandLineTop.style.height = `${borderWidth}px`;
        commandLineTop.style.top = `${borderWidth * (commandLine * 10 + 2)}px`;
        commandLineTop.style.background = borderColor;

        const commandLineBottom = document.createElement("div");
        gridContainer.appendChild(commandLineBottom);
        commandLineBottom.style.position = "absolute";
        commandLineBottom.style.width = table.style.width;
        commandLineBottom.style.height = `${borderWidth}px`;
        commandLineBottom.style.top = `${
            borderWidth * ((commandLine + 1) * 10 - 2)
        }px`;
        commandLineBottom.style.background = borderColor;

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
