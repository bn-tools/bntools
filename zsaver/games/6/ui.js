function bn6Render(editor) {
    const results = document.createElement("div");

    const gameRow = document.createElement("div");
    results.appendChild(gameRow);
    gameRow.className = "row mb-3";

    const gameHeading = document.createElement("h2");
    gameRow.appendChild(gameHeading);
    gameHeading.className = "h3";

    const titleEn = document.createElement("span");
    gameHeading.appendChild(titleEn);
    titleEn.dataset.localize = true;
    titleEn.lang = "en";
    titleEn.textContent = editor.gameInfo.title.en;

    const titleJa = document.createElement("span");
    gameHeading.appendChild(titleJa);
    titleJa.dataset.localize = true;
    titleJa.lang = "ja";
    titleJa.textContent = editor.gameInfo.title.ja;

    const navicustRow = document.createElement("div");
    results.appendChild(navicustRow);
    navicustRow.className = "row mb-3";

    navicustRow.appendChild(
        renderNavicustSection(
            getNavicust(editor),
            DATA_6_navicust,
            {
                falzar: "#E78C39",
                gregar: "#08BD73",
            }[editor.gameInfo.version]
        )
    );

    if (editor.supportsModcards()) {
        const modcardsRow = document.createElement("div");
        results.appendChild(modcardsRow);
        modcardsRow.className = "row mb-3";

        modcardsRow.appendChild(
            renderModcardsSection(
                getModcards(editor),
                editor.gameInfo,
                DATA_6_modcards
            )
        );
    }

    const foldersRow = document.createElement("div");
    results.appendChild(foldersRow);
    foldersRow.className = "row mb-3";

    for (const folder of getFolders(editor)) {
        const folderCol = document.createElement("div");
        foldersRow.appendChild(folderCol);

        folderCol.className = "col-12 col-md-4";
        folderCol.appendChild(renderFolderSection(folder, DATA_6_chips));

        foldersRow.appendChild(folderCol);
    }

    return results;
}
