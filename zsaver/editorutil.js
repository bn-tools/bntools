function getNavicust(editor) {
    const onGrids = [];
    for (let i = 0; i < 30; ++i) {
        const block = editor.getNavicustBlock(i);
        if (block == null) {
            continue;
        }
        onGrids.push(block);
    }
    return onGrids;
}

function getFolders(editor) {
    const folders = [];
    for (let i = 0; i < editor.getFolderCount(); ++i) {
        folders.push(getFolder(editor, i));
    }
    return folders;
}

function getFolder(editor, folderIdx) {
    return {
        name: editor.getFolderName(folderIdx),
        isEquipped: editor.getEquippedFolder() == folderIdx,
        chips: getChips(editor, folderIdx),
    };
}

function getChips(editor, folderIdx) {
    const chips = [];
    for (let i = 0; i < 30; ++i) {
        chips.push(getChip(editor, folderIdx, i));
    }
    return chips;
}

function getChip(editor, folderIdx, chipIdx) {
    const chip = editor.getChip(folderIdx, chipIdx);
    if (chip == null) {
        return null;
    }

    return {
        ...chip,
        isRegular: editor.getRegularChipIndex(folderIdx) == chipIdx,
        isTag:
            editor.getTagChip1Index(folderIdx) == chipIdx ||
            editor.getTagChip2Index(folderIdx) == chipIdx,
    };
}

function getModcards(editor) {
    if (!editor.supportsModcards()) {
        return [];
    }
    const modcards = [];
    for (let i = 0; i < editor.getModcardCount(); ++i) {
        modcards.push(editor.getModcard(i));
    }
    return modcards;
}
