class BN4Editor {
    static ID = "4";

    static SRAM_END_OFFSET = 0x73d2;

    static CHECKSUM_START = {
        bluemoon: 0x22,
        redsun: 0x16,
    };

    static getStartOffset(buffer) {
        const dv = new DataView(buffer);
        const startOffset = dv.getUint32(0x1550, true);
        if (startOffset > 0x1fc || (startOffset & 3) != 0) {
            return null;
        }
        return startOffset;
    }

    static sramDumpToRaw(buffer) {
        buffer = buffer.slice(0, BN4Editor.SRAM_END_OFFSET);
        const dv = new DataView(buffer);
        BN4Editor.maskSave(dv);
        return buffer;
    }

    static rawToSramDump(buffer) {
        const arr = new Uint8Array(0x10000);
        arr.set(new Uint8Array(buffer));
        BN4Editor.maskSave(new DataView(arr.buffer));
        return arr.buffer;
    }

    constructor(buffer) {
        const startOffset = BN4Editor.getStartOffset(buffer);
        if (startOffset == null) {
            throw "could not locate start offset";
        }
        this.dv = new DataView(buffer, startOffset);

        const decoder = new TextDecoder("ascii");
        const gn = decoder.decode(
            new Uint8Array(buffer, this.dv.byteOffset + 0x2208, 20)
        );
        if (gn != "ROCKMANEXE4 20031022") {
            throw "unknown game name: " + gn;
        }

        const checksum = this.getChecksum();
        const rawChecksum = this.computeChecksumRaw();
        const firstVal = new Uint8Array(buffer, 0, 1)[0];

        let version;
        let region;
        switch (checksum) {
            case rawChecksum + BN4Editor.CHECKSUM_START.bluemoon: {
                version = "bluemoon";
                region = "JP";
                break;
            }
            case rawChecksum + BN4Editor.CHECKSUM_START.redsun: {
                version = "redsun";
                region = "JP";
                break;
            }
            case rawChecksum + BN4Editor.CHECKSUM_START.bluemoon + firstVal: {
                version = "bluemoon";
                region = "US";
                break;
            }
            case rawChecksum + BN4Editor.CHECKSUM_START.redsun + firstVal: {
                version = "redsun";
                region = "US";
                break;
            }
            default:
                throw "unknown game, no checksum formats match";
        }

        this.gameInfo = {
            title: {
                JPbluemoon: {
                    en: "Rockman EXE 4 - Tournament Blue Moon (Japan)",
                    ja: "ロックマンエグゼ4 トーナメントブルームーン（日本版）",
                },
                JPredsun: {
                    en: "Rockman EXE 4 - Tournament Red Sun (Japan)",
                    ja: "ロックマンエグゼ4 トーナメントレッドサン（日本版）",
                },
                USbluemoon: {
                    en: "Mega Man Battle Network 4 - Blue Moon (US)",
                    ja: "ロックマンエグゼ4 トーナメントブルームーン（北米版）",
                },
                USredsun: {
                    en: "Mega Man Battle Network 4 - Red Sun (US)",
                    ja: "ロックマンエグゼ4 トーナメントレッドサン（北米版）",
                },
            }[region + version],
            version: version,
            region: region,
        };
    }

    static maskSave(dv) {
        const mask = dv.getUint32(0x1554, true);
        const unmasked = new Uint8Array(
            dv.buffer,
            dv.byteOffset,
            dv.byteLength
        );
        for (let i = 0; i < unmasked.length; ++i) {
            unmasked[i] = (unmasked[i] ^ mask) & 0xff;
        }
        // Write the mask back.
        dv.setUint32(0x1554, mask, true);
    }

    getChecksum() {
        return this.dv.getUint32(0x21e8, true);
    }

    rebuildChecksum() {
        return this.dv.setUint32(0x21e8, this.computeChecksum(), true);
    }

    computeChecksum() {
        return (
            this.computeChecksumRaw() +
            BN4Editor.CHECKSUM_START[this.gameInfo.version] +
            (this.gameInfo.region != "JP"
                ? new Uint8Array(this.dv.buffer, 0, 1)[0]
                : 0)
        );
    }

    computeChecksumRaw() {
        let checksum = 0;
        const arr = new Uint8Array(
            this.dv.buffer,
            0,
            this.dv.buffer.byteLength
        );
        for (let i = 1; i < this.dv.buffer.byteLength; ++i) {
            if (i == 0x21e8 + this.dv.byteOffset) {
                // Don't include the checksum itself in the checksum.
                i += 3;
                continue;
            }
            checksum += arr[i];
        }
        return checksum;
    }

    getFolderCount() {
        return 3; // TODO
    }

    getFolderName(folderIdx) {
        if (folderIdx == 2) {
            return "-Folder";
        }
        return "Folder " + (folderIdx + 1);
    }

    getEquippedFolder() {
        return this.dv.getUint8(0x2132);
    }

    setEquippedFolder(i) {
        return this.dv.setUint8(0x2132, i);
    }

    getRegularChipIndex(folderIdx) {
        // Only the first chip can be the regular chip, but the value here is the insertion order of the regular chip for display.
        const i = this.dv.getUint8(0x214d + folderIdx);
        return i != 0xff ? 0 : null;
    }

    setRegularChipIndex(folderIdx, i) {
        if (i != 0 && i != null) {
            throw "must be 0 or null";
        }
        this.dv.setUint8(0x214d + folderIdx, i == null ? 0xff : 0);
    }

    getTagChip1Index() {
        // Not supported.
        return null;
    }

    getTagChip2Index() {
        // Not supported.
        return null;
    }

    getChipCount(id, code) {
        return this.getChipCountRaw(id, DATA_4_chips[id].codes.indexOf(code));
    }

    getChipCountRaw(id, variant) {
        return this.dv.getUint8(0x26e4 + ((id * 0xc) | variant));
    }

    setChipCount(id, code, n) {
        this.setChipCountRaw(id, DATA_4_chips[id].codes.indexOf(code), n);
    }

    setChipCountRaw(id, variant, n) {
        this.dv.setUint8(0x26e4 + ((id * 0xc) | variant), n);
    }

    getRawBufferForSave() {
        if (this.getChecksum() != this.computeChecksum()) {
            throw "checksum does not match";
        }
        return this.dv.buffer;
    }

    getChipRaw(folderIdx, chipIdx) {
        const chipConstant = this.dv.getUint16(
            0x262c + folderIdx * (30 * 2) + chipIdx * 2,
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
            0x262c + folderIdx * (30 * 2) + chipIdx * 2,
            id | (variant << 9),
            true
        );
    }

    setChip(folderIdx, chipIdx, id, code) {
        this.setChipRaw(folderIdx, chipIdx, id, CHIP_CODES.indexOf(code));
    }

    rebuild() {
        this.rebuildChecksum();
    }
}
