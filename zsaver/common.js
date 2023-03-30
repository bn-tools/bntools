const CHIP_PREFIXES = {
    standard: "s",
    mega: "m",
    giga: "g",
    secret: "z",
    dark: "d",
};

function nodeToPngBlob(node, width, height) {
    return new Promise((resolve) => {
        const img = document.createElement("img");
        const xmlSerializer = new XMLSerializer();
        img.src = `data:image/svg+xml;utf8,
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <foreignObject width="100%" height="100%">
                    ${xmlSerializer.serializeToString(node)}
                </foreignObject>
            </svg>
        `;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            canvas
                .getContext("2d")
                .drawImage(
                    img,
                    0,
                    0,
                    canvas.width,
                    canvas.height,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

            canvas.toBlob((blob) => {
                resolve(blob);
            });
        };
    });
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function download(editor) {
    downloadBlob(
        new Blob(
            [editor.constructor.rawToSramDump(editor.getRawBufferForSave())],
            {
                type: "application/octet-stream",
            }
        ),
        editor.gameInfo.title[LANG] + ".sav"
    );
}

function navicustToArray2d(navicust) {
    const cust = array2d.full(-1, 7, 7);
    for (let idx = 0; idx < navicust.length; ++idx) {
        const onGrid = navicust[idx];
        const block = DATA_6_navicust[onGrid.id];

        let squares = array2d.from(block.squares, 5, 5);
        for (let i = 0; i < onGrid.rot; ++i) {
            squares = array2d.rot90(squares);
        }

        for (let i = 0; i < squares.nrows; ++i) {
            for (let j = 0; j < squares.ncols; ++j) {
                let i2 = i + onGrid.row - 2;
                let j2 = j + onGrid.col - 2;
                if (i2 >= cust.nrows || j2 >= cust.ncols) {
                    continue;
                }
                const v = squares[i * squares.ncols + j];
                if (v == 0) {
                    continue;
                }
                if (onGrid.compressed && v != 1) {
                    continue;
                }
                cust[i2 * cust.ncols + j2] = idx;
            }
        }
    }
    return cust;
}
