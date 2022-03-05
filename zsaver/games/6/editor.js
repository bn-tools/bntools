class BN6Editor {
    static ID = "6";

    static SRAM_START_OFFSET = 0x0100;
    static SRAM_END_OFFSET = 0x6810;

    static CHECKSUM_START = {
        falzar: 0x18,
        gregar: 0x72,
    };

    static GAMES = {
        // Japan
        "REXE6 F 20050924a JP": {
            title: {
                en: "Rockman EXE 6 - Dennoujuu Falzar (Japan)",
                ja: "ロックマンエグゼ6 電脳獣ファルザー（日本版）",
            },
            region: "JP",
            version: "falzar",
        },
        "REXE6 G 20050924a JP": {
            title: {
                en: "Rockman EXE 6 - Dennoujuu Gregar (Japan)",
                ja: "ロックマンエグゼ6 電脳獣グレイガ（日本版）",
            },
            region: "JP",
            version: "gregar",
        },

        // US
        "REXE6 F 20060110a US": {
            title: {
                en: "Mega Man Battle Network 6 - Cybeast Falzar (USA)",
                ja: "ロックマンエグゼ6 電脳獣ファルザー（北米版）",
            },
            region: "US",
            version: "falzar",
        },
        "REXE6 G 20060110a US": {
            title: {
                en: "Mega Man Battle Network 6 - Cybeast Gregar (USA)",
                ja: "ロックマンエグゼ6 電脳獣グレイガ（北米版）",
            },
            region: "US",
            version: "gregar",
        },

        // Poland :^)
        "REXE6 F 20060110a PL": {
            title: {
                en: "Mega Man Battle Network 6 - Cybeast Falzar (Europe)",
                ja: "ロックマンエグゼ6 電脳獣ファルザー（ヨーロッパ版）",
            },
            region: "PL",
            version: "falzar",
        },
        "REXE6 G 20060110a PL": {
            title: {
                en: "Mega Man Battle Network 6 - Cybeast Gregar (Europe)",
                ja: "ロックマンエグゼ6 電脳獣グレイガ（ヨーロッパ版）",
            },
            region: "PL",
            version: "gregar",
        },
    };

    static CHARS_EN =
        " 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*abcdefghijklmnopqrstuvwxyz�����ウアイオエケコカクキセサソシステトツタチネノヌナニヒヘホハフミマメムモヤヨユロルリレラン熱斗ワヲギガゲゴグゾジゼズザデドヅダヂベビボバブピパペプポゥァィォェュヴッョャ-×=:%?+█�ー!&,゜.・;'\"~/()「」�_�����あいけくきこかせそすさしつとてたちねのなぬにへふほはひめむみもまゆよやるらりろれ�んをわ研げぐごがぎぜずじぞざでどづだぢべばびぼぶぽぷぴぺぱぅぁぃぉぇゅょっゃ容量全木�無現実◯✗緑道不止彩起父集院一二三四五六七八陽十百千万脳上下左右手来日目月獣各人入出山口光電気綾科次名前学校省祐室世界高朗枚野悪路闇大小中自分間系花問究門城王兄化葉行街屋水見終新桜先生長今了点井子言太属風会性持時勝赤代年火改計画職体波回外地員正造値合戦川秋原町晴用金郎作数方社攻撃力同武何発少教以白早暮面組後文字本階明才者向犬々ヶ連射舟戸切土炎伊夫鉄国男天老師堀杉士悟森霧麻剛垣★[].";

    static CHARS_JP =
        ' 0123456789ウアイオエケコカクキセサソシステトツタチネノヌナニヒヘホハフミマメムモヤヨユロルリレラン熱斗ワヲギガゲゴグゾジゼズザデドヅダヂベビボバブピパペプポゥァィォェュヴッョャABCDEFGHIJKLMNOPQRSTUVWXYZ*-×=:%?+■�ー!��&、゜.・;’"~/()「」����_�周えおうあいけくきこかせそすさしつとてたちねのなぬにへふほはひめむみもまゆよやるらりろれ�んをわ研げぐごがぎぜずじぞざでどづだぢべばびぼぶぽぷぴぅぁぃぉぇゅょっゃabcdefghijklmnopqrstuvwxyz容量全木�無現実◯✗緑道不止彩起父集院一二三四五六七八陽十百千万脳上下左右手来日目月獣各人入出山口光電気綾科次名前学校省祐室世界高朗枚野悪路闇大小中自分間系花問究門城王兄化葉行街屋水見終新桜先生長今了点井子言太属風会性持時勝赤代年火改計画職体波回外地員正造値合戦川秋原町晴用金郎作数方社攻撃力同武何発少教以白早暮面組後文字本階明才者向犬々ヶ連射舟戸切土炎伊夫鉄国男天老師堀杉士悟森霧麻剛垣';

    static sramDumpToRaw(buffer) {
        buffer = buffer.slice(
            BN6Editor.SRAM_START_OFFSET,
            BN6Editor.SRAM_END_OFFSET
        );
        BN6Editor.maskSave(new DataView(buffer));
        return buffer;
    }

    static rawToSramDump(buffer) {
        const arr = new Uint8Array(0x10000);
        arr.set(new Uint8Array(buffer), BN6Editor.SRAM_START_OFFSET);
        BN6Editor.maskSave(
            new DataView(
                arr.buffer,
                BN6Editor.SRAM_START_OFFSET,
                BN6Editor.SRAM_END_OFFSET - BN6Editor.SRAM_START_OFFSET
            )
        );
        return arr.buffer;
    }

    static maskSave(dv) {
        const mask = dv.getUint32(0x1064, true);
        const unmasked = new Uint8Array(
            dv.buffer,
            dv.byteOffset,
            dv.byteLength
        );
        for (let i = 0; i < unmasked.length; ++i) {
            // We only actually need to use the first byte of the mask, even though it's 32 bits long.
            unmasked[i] = (unmasked[i] ^ mask) & 0xff;
        }
        // Write the mask back.
        dv.setUint32(0x1064, mask, true);
    }

    constructor(buffer) {
        if (
            buffer.byteLength !=
            BN6Editor.SRAM_END_OFFSET - BN6Editor.SRAM_START_OFFSET
        ) {
            throw (
                "invalid byte length of save file: expected " +
                (BN6Editor.SRAM_END_OFFSET - BN6Editor.SRAM_START_OFFSET) +
                " but got " +
                buffer.byteLength
            );
        }

        buffer = buffer.slice();

        this.dv = new DataView(buffer);

        const decoder = new TextDecoder("ascii");
        const gn = decoder.decode(
            new Uint8Array(this.dv.buffer, this.dv.byteOffset + 0x1c70, 20)
        );
        if (!Object.prototype.hasOwnProperty.call(BN6Editor.GAMES, gn)) {
            throw "unknown game name: " + gn;
        }

        this.gameInfo = BN6Editor.GAMES[gn];

        if (this.getChecksum() != this.computeChecksum()) {
            throw "checksum does not match";
        }

        this.navicustDirty = false;
        this.modcardsDirty = false;
    }

    supportsModcards() {
        return this.gameInfo.region == "JP";
    }

    getRawBufferForSave() {
        if (this.getChecksum() != this.computeChecksum()) {
            throw "checksum does not match";
        }
        if (this.navicustDirty) {
            throw "navicust must be rebuilt first";
        }
        if (this.modcardsDirty) {
            throw "modcards must be rebuilt first";
        }
        return this.dv.buffer;
    }

    computeChecksum() {
        let checksum = BN6Editor.CHECKSUM_START[this.gameInfo.version];
        const arr = new Uint8Array(
            this.dv.buffer,
            this.dv.byteOffset,
            this.dv.byteLength
        );
        for (let i = 0; i < arr.length; ++i) {
            if (i == 0x1c6c) {
                // Don't include the checksum itself in the checksum.
                i += 3;
                continue;
            }
            checksum += arr[i];
        }
        return checksum;
    }

    rebuild() {
        this.rebuildNavicustTiles();
        this.rebuildModcardsLoaded();
        this.rebuildChecksum();
    }

    getChecksum() {
        return this.dv.getUint32(0x1c6c, true);
    }

    rebuildChecksum() {
        return this.dv.setUint32(0x1c6c, this.computeChecksum(), true);
    }

    getNavicustBlock(i) {
        const offset = (this.gameInfo.region == "JP" ? 0x4150 : 0x4190) + i * 8;
        const blockConstant = this.dv.getUint8(offset);
        if (blockConstant == 0) {
            return null;
        }

        return {
            id: blockConstant >> 2,
            variant: blockConstant & 0x3,
            col: this.dv.getUint8(offset + 3),
            row: this.dv.getUint8(offset + 4),
            rot: this.dv.getUint8(offset + 5),
            compressed: !!this.dv.getUint8(offset + 6),
        };
    }

    setNavicustBlock(i, id, variant, col, row, rot, compressed) {
        const offset = (this.gameInfo.region == "JP" ? 0x4150 : 0x4190) + i * 8;
        this.dv.setUint8(offset, (id << 2) | variant);
        this.dv.setUint8(offset + 3, col);
        this.dv.setUint8(offset + 4, row);
        this.dv.setUint8(offset + 5, rot);
        this.dv.setUint8(offset + 6, compressed);
        this.navicustDirty = true;
    }

    rebuildNavicustTiles() {
        const arr = new Uint8Array(
            this.dv.buffer,
            this.dv.byteOffset +
                (this.gameInfo.region == "JP" ? 0x410c : 0x414c),
            49
        );

        for (let i = 0; i < arr.length; ++i) {
            arr[i] = 0;
        }

        for (let idx = 0; idx < 30; ++idx) {
            const onGrid = this.getNavicustBlock(idx);
            if (onGrid == null) {
                continue;
            }

            const block = DATA_6_navicust[onGrid.id];

            let squares = array2d.from(block.squares, 5, 5);
            for (let i = 0; i < onGrid.rot; ++i) {
                squares = array2d.rot90(squares);
            }

            for (let i = 0; i < squares.nrows; ++i) {
                for (let j = 0; j < squares.nrows; ++j) {
                    let i2 = i + onGrid.row - 2;
                    let j2 = j + onGrid.col - 2;
                    if (i2 >= 7 || j2 >= 7) {
                        continue;
                    }
                    const v = squares[i * squares.ncols + j];
                    if (v == 0) {
                        continue;
                    }
                    if (onGrid.compressed && v != 1) {
                        continue;
                    }
                    arr[i2 * 7 + j2] = idx + 1;
                }
            }
        }
        this.navicustDirty = false;
    }

    getEquippedFolder() {
        return this.dv.getUint8(this.gameInfo.region == "JP" ? 0x47b9 : 0x47f9);
    }

    setEquippedFolder(i) {
        return this.dv.setUint8(
            this.gameInfo.region == "JP" ? 0x47b9 : 0x47f9,
            i
        );
    }

    getChipCount(id, code) {
        return this.getChipCountRaw(id, DATA_6_chips[id].codes.indexOf(code));
    }

    getChipCountRaw(id, variant) {
        return this.dv.getUint8(0x2230 + ((id * 0xc) | variant));
    }

    setChipCount(id, code, n) {
        this.setChipCountRaw(id, DATA_6_chips[id].codes.indexOf(code), n);
    }

    setChipCountRaw(id, variant, n) {
        this.dv.setUint8(0x2230 + ((id * 0xc) | variant), n);
    }

    getModcardCount() {
        return this.dv.getUint8(0x65f0);
    }

    setModcardCount(n) {
        this.dv.setUint8(0x65f0, n);
        this.modcardsDirty = true;
    }

    getModcard(i) {
        const c = this.dv.getUint8(0x6620 + i);
        return {
            id: c & 0x7f,
            enabled: !(c >> 7),
        };
    }

    setModcard(i, id, enabled) {
        this.dv.setUint8(0x6620 + i, id | (!enabled << 7));
        this.modcardsDirty = true;
    }

    setModcardLoaded(id, loaded) {
        this.dv.setUint8(
            0x5047 + id,
            this.dv.getUint8(0x06bf + id) ^
                (loaded
                    ? {
                          falzar: 0x8d,
                          gregar: 0x43,
                      }[this.gameInfo.version]
                    : 0xff)
        );
    }

    rebuildModcardsLoaded() {
        for (let i = 1; i < DATA_6_modcards.length; ++i) {
            this.setModcardLoaded(i, false);
        }
        for (let i = 0; i < this.getModcardCount(); ++i) {
            this.setModcardLoaded(this.getModcard(i).id, true);
        }
        this.modcardsDirty = false;
    }

    getFolderCount() {
        return this.dv.getUint8(0x1c09);
    }

    getFolderName(folderIdx) {
        const arr = new Uint16Array(
            this.dv.buffer,
            this.dv.byteOffset + 0x1850 + folderIdx * 0x20,
            0x8
        );
        const buf = [];
        let chars = BN6Editor.CHARS_EN;
        if (this.gameInfo.region == "JP") {
            chars = BN6Editor.CHARS_JP;
        }
        for (const c of arr) {
            if (c == 0xe5e5) {
                break;
            }
            const hi = c >> 8;
            const lo = c & 0xff;
            let char;
            if (lo == 0xe4) {
                char = chars[0xe4 + hi];
            } else if (lo == 0xe9) {
                char = "\n";
            } else {
                char = chars[lo];
            }
            buf.push(char);
        }
        return buf.join("");
    }

    setFolderName(folderIdx, name) {
        if (name.length > 8) {
            throw "name too long";
        }

        const arr = new Uint16Array(
            this.dv.buffer,
            this.dv.byteOffset + 0x1850 + folderIdx * 0x20,
            0x8
        );

        let chars = BN6Editor.CHARS_EN;
        if (this.gameInfo.region == "JP") {
            chars = BN6Editor.CHARS_JP;
        }

        for (let i = 0; i < 8; ++i) {
            let c = 0xe5e5;
            if (i < name.length) {
                c = chars.indexOf(name[i]);
                if (c >= 0xe4) {
                    c = ((c - 0xe4) << 8) | 0x00e4;
                } else if (name[i] == "\n") {
                    c = 0xe5e9;
                } else {
                    c = c | 0xe500;
                }
            }
            arr[i] = c;
        }
    }

    getChipRaw(folderIdx, chipIdx) {
        const chipConstant = this.dv.getUint16(
            0x2178 + folderIdx * (30 * 2) + chipIdx * 2,
            true
        );

        if (chipConstant == 0) {
            return null;
        }

        return {
            id: chipConstant & 0x1ff,
            variant: chipConstant >> 9,
        };
    }

    getChip(folderIdx, chipIdx) {
        const rawChip = this.getChipRaw(folderIdx, chipIdx);
        if (rawChip == null) {
            return null;
        }

        return {
            id: rawChip.id,
            code: CHIP_CODES[rawChip.variant],
        };
    }

    setChipRaw(folderIdx, chipIdx, id, variant) {
        this.dv.setUint16(
            0x2178 + folderIdx * (30 * 2) + chipIdx * 2,
            id | (variant << 9),
            true
        );
    }

    setChip(folderIdx, chipIdx, id, code) {
        this.setChipRaw(folderIdx, chipIdx, id, CHIP_CODES.indexOf(code));
    }

    getRegularChipIndex(folderIdx) {
        const i = this.dv.getUint8(
            (this.gameInfo.region == "JP" ? 0x47ba : 0x47fa) + folderIdx
        );
        return i != 0xff ? i : null;
    }

    setRegularChipIndex(folderIdx, i) {
        this.dv.setUint8(
            (this.gameInfo.region == "JP" ? 0x47ba : 0x47fa) + folderIdx,
            i != null ? i : 0xff
        );
    }

    getTagChip1Index(folderIdx) {
        const i = this.dv.getUint8(
            (this.gameInfo.region == "JP" ? 0x47e2 : 0x4822) + folderIdx * 2
        );
        return i != 0xff ? i : null;
    }

    setTagChip1Index(folderIdx, i) {
        this.dv.setUint8(
            (this.gameInfo.region == "JP" ? 0x47e2 : 0x4822) + folderIdx,
            i != null ? i : 0xff
        );
    }

    getTagChip2Index(folderIdx) {
        const i = this.dv.getUint8(
            (this.gameInfo.region == "JP" ? 0x47e3 : 0x4823) + folderIdx * 2
        );
        return i != 0xff ? i : null;
    }

    setTagChip2Index(folderIdx, i) {
        this.dv.setUint8(
            (this.gameInfo.region == "JP" ? 0x47e3 : 0x4823) + folderIdx,
            i != null ? i : 0xff
        );
    }
}
