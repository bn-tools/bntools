function bn4Render(editor) {
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

    const foldersRow = document.createElement("div");
    results.appendChild(foldersRow);
    foldersRow.className = "row mb-3";

    for (const folder of getFolders(editor)) {
        const folderCol = document.createElement("div");
        foldersRow.appendChild(folderCol);

        folderCol.className = "col-12 col-md-4";
        folderCol.appendChild(renderFolderSection(folder, DATA_4_chips));

        foldersRow.appendChild(folderCol);
    }

    return results;
}
