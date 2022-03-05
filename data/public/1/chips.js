const DATA_1_chips = [
    null,
    {
        "section": "standard",
        "index": 1,
        "name": {
            "en": "Cannon",
            "ja": "キャノン"
        },
        "description": {
            "en": "A nice,big\ncannon!",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "ABCDE",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 2,
        "name": {
            "en": "HiCannon",
            "ja": "ハイキャノン"
        },
        "description": {
            "en": "A nice,big\ncannon!",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "FGHIJ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 3,
        "name": {
            "en": "M-Cannon",
            "ja": "メガキャノン"
        },
        "description": {
            "en": "A nice,big\ncannon!",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "KLMNO",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cut down\nenemies!\nRange=1",
            "ja": "めのまえのてきをきり\nつける！攻撃はんいは\n1マス"
        },
        "element": "null",
        "codes": "BKLPS",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cut down\ncolumn!\nRange=1",
            "ja": "めのまえのてきをきり\nつける！攻撃はんいは\nたて3マス"
        },
        "element": "null",
        "codes": "CKMNS",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cut down\nenemies!\nRange=2",
            "ja": "めのまえのてきをきり\nつける！攻撃はんいは\nよこ2マス"
        },
        "element": "null",
        "codes": "DENOS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "LilBomb",
            "ja": "スモールボム"
        },
        "description": {
            "en": "Throw a\nbomb!\nDepth=3",
            "ja": "ばくふうがたてにひろ\nがるボムを3マス前に\nなげつける"
        },
        "element": "null",
        "codes": "BDGOT",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "CrosBomb",
            "ja": "クロスボム"
        },
        "description": {
            "en": "Cross\nbomb\nDepth=3",
            "ja": "ばくふうがじゅうじに\nひろがるボムを3マス\n前になげつける"
        },
        "element": "null",
        "codes": "BDHJL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "BigBomb",
            "ja": "ビッグボム"
        },
        "description": {
            "en": "Bomb with\na big boom\nDepth=3",
            "ja": "ばくふうが9マスに\nひろがるボムを3マス\n前になげつける"
        },
        "element": "null",
        "codes": "BGOST",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 6,
        "name": {
            "en": "Spreader",
            "ja": "スプレッドガン"
        },
        "description": {
            "en": "Gun with\na 1-panel\nblast",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\nこうはんい攻撃"
        },
        "element": "null",
        "codes": "HIJKL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 7,
        "name": {
            "en": "Bubbler",
            "ja": "バブルスプレッド"
        },
        "description": {
            "en": "Bubbles w/\na 1-panel\nblast",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\nバブル攻撃"
        },
        "element": "aqua",
        "codes": "AKLPS",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "Heater",
            "ja": "ヒートスプレッド"
        },
        "description": {
            "en": "Fire with\na 1-panel\nblast",
            "ja": "ヒットするとまわりの\n1マスにゆうばくする\n炎攻撃"
        },
        "element": "fire",
        "codes": "CFGKO",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throw a\nbomb!\nDepth=3",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "CEJLP",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 4,
        "name": {
            "en": "Shotgun",
            "ja": "ショットガン"
        },
        "description": {
            "en": "Hits enemy\nand keeps\ngoing 1pnl",
            "ja": "てきにヒットすると\nおくの1マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "KMNQR",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 5,
        "name": {
            "en": "CrossGun",
            "ja": "クロスガン"
        },
        "description": {
            "en": "4-panel\ndiagonal\nblast",
            "ja": "てきにヒットすると\nななめ4マスに\nゆうばくする"
        },
        "element": "null",
        "codes": "CEFJK",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "ShokWave",
            "ja": "ショックウェーブ"
        },
        "description": {
            "en": "Piercing\nground\nwave",
            "ja": "じめんにそってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "CKLNP",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "SoniWave",
            "ja": "ソニックウェーブ"
        },
        "description": {
            "en": "Piercing\nground\nwave",
            "ja": "じめんにそってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "CDJMS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "DynaWave",
            "ja": "ダイナウェーブ"
        },
        "description": {
            "en": "Piercing\nground\nwave",
            "ja": "じめんにそってすすむ\nかんつう攻撃"
        },
        "element": "null",
        "codes": "CEMRS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "FireTowr",
            "ja": "フレイムタワー"
        },
        "description": {
            "en": "Fire that\ncan move\nup & down",
            "ja": "じめんにそってすすむ\nひばしら攻撃\nたてにゆうどうできる"
        },
        "element": "fire",
        "codes": "EFLMT",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "AquaTowr",
            "ja": "アクアタワー"
        },
        "description": {
            "en": "Water that\ncan move\nup & down",
            "ja": "じめんにそってすすむ\nみずばしら攻撃\nたてにゆうどうできる"
        },
        "element": "aqua",
        "codes": "ACGHR",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 28,
        "name": {
            "en": "WoodTowr",
            "ja": "ウッディタワー"
        },
        "description": {
            "en": "Log that\ncan move\nup & down",
            "ja": "じめんにそってすすむ\nまるた攻撃\nたてにゆうどうできる"
        },
        "element": "wood",
        "codes": "BCHKN",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "Quake1",
            "ja": "アースクェイク1"
        },
        "description": {
            "en": "Cracks a\npanel\nDepth=3",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "AEHKQ",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "Quake2",
            "ja": "アースクェイク2"
        },
        "description": {
            "en": "Cracks a\npanel\nDepth=3",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "BCIKQ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "Quake3",
            "ja": "アースクェイク3"
        },
        "description": {
            "en": "Cracks a\npanel\nDepth=3",
            "ja": "3マス前にふんどう\nをおとして攻撃\nユカにはヒビがはいる"
        },
        "element": "null",
        "codes": "CDHMQ",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "FireSwrd",
            "ja": "フレイムソード"
        },
        "description": {
            "en": "Cuts down\ncolumn\nRange=1",
            "ja": "めのまえのたて3マス\nをきりつける\n炎のソード"
        },
        "element": "fire",
        "codes": "BFGNP",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "ElecSwrd",
            "ja": "エレキソード"
        },
        "description": {
            "en": "Cuts down\ncolumn\nRange=1",
            "ja": "めのまえのたて3マス\nをきりつける\n電気のソード"
        },
        "element": "elec",
        "codes": "EGLOS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "AquaSwrd",
            "ja": "アクアソード"
        },
        "description": {
            "en": "Cuts down\ncolumn\nRange=1",
            "ja": "めのまえのたて3マス\nをきりつける\n水のソード"
        },
        "element": "aqua",
        "codes": "AMNOP",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "GutsPnch",
            "ja": "ガッツパンチ"
        },
        "description": {
            "en": "Knocks\nstuff over\nRange=1",
            "ja": "めのまえの1マスに\nパンチ攻撃！\nものをおしたりできる"
        },
        "element": "null",
        "codes": "BHMNT",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "IcePunch",
            "ja": "コールドパンチ"
        },
        "description": {
            "en": "Knocks\nstuff over\nRange=1",
            "ja": "めのまえの1マスに\nこおりのパンチ！\nものをおしたりできる"
        },
        "element": "aqua",
        "codes": "BHMNT",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "FtrSword",
            "ja": "ファイターソード"
        },
        "description": {
            "en": "Warrior's\nsword\nRange=3",
            "ja": "いさましいせんしの\nソード！攻撃はんい\nは よこ3マス"
        },
        "element": "null",
        "codes": "BKLPS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "Dash",
            "ja": "ダッシュアタック"
        },
        "description": {
            "en": "Knock over\nall in\nyour path!",
            "ja": "とっしん攻撃！\nむてきのたいあたりで\nてきをもかんつうする"
        },
        "element": "null",
        "codes": "BDGLO",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "KngtSwrd",
            "ja": "ナイトソード"
        },
        "description": {
            "en": "Knight's\nsword\nRange=3",
            "ja": "ほこりたかきけんしの\nソード！攻撃はんいは\nよこ3マス"
        },
        "element": "null",
        "codes": "BCEGH",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "HeroSwrd",
            "ja": "パラディンソード"
        },
        "description": {
            "en": "Legendary\nsword\nRange=3",
            "ja": "でんせつのせいきしの\nソード！攻撃はんいは\nよこ3マス"
        },
        "element": "null",
        "codes": "BDFGI",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "MetGuard",
            "ja": "メットガード"
        },
        "description": {
            "en": "Hold A Btn\nfor 3 sec\ndefense!",
            "ja": "Aボタンをおしつづけ\nると3びょうかんまで\nてきの攻撃をガード！"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "TriArrow",
            "ja": "トリプルアロー"
        },
        "description": {
            "en": "Fires a\n3-arrow\nburst",
            "ja": "3れんしゃのアローを\nはっしゃする"
        },
        "element": "null",
        "codes": "ABCDE",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "TriSpear",
            "ja": "トリプルスピア"
        },
        "description": {
            "en": "Fires a\n3-spear\nburst",
            "ja": "3れんしゃのスピアを\nはっしゃする"
        },
        "element": "null",
        "codes": "FGHIJ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "TriLance",
            "ja": "トリプルランス"
        },
        "description": {
            "en": "Fires a\n3-lance\nburst",
            "ja": "3れんしゃのランスを\nはっしゃする"
        },
        "element": "null",
        "codes": "KLMNO",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "Typhoon",
            "ja": "タイフーン"
        },
        "description": {
            "en": "Creates a\ntwister w/\n3 hits",
            "ja": "2マス前にたつまき\nをはっせいさせる\nたつまきは3ヒット"
        },
        "element": "null",
        "codes": "ABDEG",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "Huricane",
            "ja": "ハリケーン"
        },
        "description": {
            "en": "Creates a\ntwister w/\n5 hits",
            "ja": "2マス前にたつまき\nをはっせいさせる\nたつまきは5ヒット"
        },
        "element": "null",
        "codes": "GIJKL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "Cyclone",
            "ja": "サイクロン"
        },
        "description": {
            "en": "Creates a\ntwister w/\n8 hits",
            "ja": "2マス前にたつまき\nをはっせいさせる\nたつまきは8ヒット"
        },
        "element": "null",
        "codes": "EFGHI",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "Howitzer",
            "ja": "ホウガン"
        },
        "description": {
            "en": "Breaks\npanels\nDepth=3",
            "ja": "ホウガンを3マス前\nになげつける\nパネルをはかいできる"
        },
        "element": "null",
        "codes": "ACGHO",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "Thunder1",
            "ja": "サンダーボール1"
        },
        "description": {
            "en": "A rolling\nlightning\nattack",
            "ja": "ゆっくりとんでいく\n電気攻撃！"
        },
        "element": "elec",
        "codes": "AEGHS",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "Thunder2",
            "ja": "サンダーボール2"
        },
        "description": {
            "en": "A rolling\nlightning\nattack",
            "ja": "ゆっくりとんでいく\n電気攻撃！"
        },
        "element": "elec",
        "codes": "BCFIL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "Thunder3",
            "ja": "サンダーボール3"
        },
        "description": {
            "en": "A rolling\nlightning\nattack",
            "ja": "ゆっくりとんでいく\n電気攻撃！"
        },
        "element": "elec",
        "codes": "DFGKN",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "Snakegg1",
            "ja": "エッグスネーク1"
        },
        "description": {
            "en": "Squirming\nsnake\nattack!",
            "ja": "てきのエリアにヘビが\nあらわれ\nうろつきまわる！"
        },
        "element": "wood",
        "codes": "BEGMN",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "Snakegg2",
            "ja": "エッグスネーク2"
        },
        "description": {
            "en": "Shocking\nsnake\nattack!",
            "ja": "てきのエリアに電気の\nヘビがあらわれ\nうろつきまわる！"
        },
        "element": "elec",
        "codes": "CEHNP",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "Snakegg3",
            "ja": "エッグスネーク3"
        },
        "description": {
            "en": "Scorching\nsnake\nattack!",
            "ja": "てきのエリアに炎の\nヘビがあらわれ\nうろつきまわる！"
        },
        "element": "fire",
        "codes": "ACFLS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "Hammer",
            "ja": "ブレイクハンマー"
        },
        "description": {
            "en": "Breaks\ncubes\nRange=1",
            "ja": "めのまえの1マスに\nハンマー攻撃！\nキューブをこわせる"
        },
        "element": "null",
        "codes": "AFIMQ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "BodyBurn",
            "ja": "バーニングボディ"
        },
        "description": {
            "en": "Engulf all\naround you\nin flames!",
            "ja": "じぶんのいるマスと\nその上下左右を\n炎にまきこむ！"
        },
        "element": "fire",
        "codes": "EFKMN",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "Ratton1",
            "ja": "ラットン1"
        },
        "description": {
            "en": "Missile\nthat can\nturn once",
            "ja": "じめんにそってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "ABCDE",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "Ratton2",
            "ja": "ラットン2"
        },
        "description": {
            "en": "Missile\nthat can\nturn once",
            "ja": "じめんにそってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "FGHIJ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "Ratton3",
            "ja": "ラットン3"
        },
        "description": {
            "en": "Missile\nthat can\nturn once",
            "ja": "じめんにそってすすむ\nねずみミサイル\n1どだけ まがれる"
        },
        "element": "null",
        "codes": "KLMNO",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "Lockon1",
            "ja": "ロックオン1"
        },
        "description": {
            "en": "Creates a\nlock on\nsatellite!",
            "ja": "めのまえのマスに\nサテラがしゅつげん！\nロックオン攻撃"
        },
        "element": "null",
        "codes": "CDHIL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "Lockon2",
            "ja": "ロックオン2"
        },
        "description": {
            "en": "Creates a\nlock on\nsatellite!",
            "ja": "めのまえのマスに\nサテラがしゅつげん！\nロックオン攻撃"
        },
        "element": "null",
        "codes": "BEGHM",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 15,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "Lockon3",
            "ja": "ロックオン3"
        },
        "description": {
            "en": "Creates a\nlock on\nsatellite!",
            "ja": "めのまえのマスに\nサテラがしゅつげん！\nロックオン攻撃"
        },
        "element": "null",
        "codes": "ADKNO",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "X-Panel1",
            "ja": "パネルアウト1"
        },
        "description": {
            "en": "Erase 1\npanel\nRange=1",
            "ja": "めのまえの1マスを\nけしさってしまう！"
        },
        "element": "null",
        "codes": "BDGLS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "X-Panel3",
            "ja": "パネルアウト3"
        },
        "description": {
            "en": "Erase\ncolumn\nRange=1",
            "ja": "めのまえのたて3マス\nをけしさってしまう！"
        },
        "element": "null",
        "codes": "BDGLS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recover\n10HP",
            "ja": "HPを10かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recover\n30HP",
            "ja": "HPを30かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recover\n50HP",
            "ja": "HPを50かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recover\n80HP",
            "ja": "HPを80かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recover\n120HP",
            "ja": "HPを120かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recover\n150HP",
            "ja": "HPを150かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recover\n200HP",
            "ja": "HPを200かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recover\n300HP",
            "ja": "HPを300かいふく"
        },
        "element": "null",
        "codes": "ACEGL",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "Steal",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steal left\ncolumn of\nenemy area",
            "ja": "てきのエリアのひだり\nはし1れつを じぶん\nのエリアにぬりかえる"
        },
        "element": "null",
        "codes": "AELPS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "Geddon1",
            "ja": "デスマッチ1"
        },
        "description": {
            "en": "All panels\nbecome\ncracked!",
            "ja": "すべてのマスが\nヒビじょうたいに！"
        },
        "element": "null",
        "codes": "FHJLN",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "Geddon2",
            "ja": "デスマッチ2"
        },
        "description": {
            "en": "Erases\nall empty\npanels",
            "ja": "あいてるマスがすべて\nパネルアウトされる！"
        },
        "element": "null",
        "codes": "ABEIK",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 80,
        "name": {
            "en": "Escape",
            "ja": "エスケープ"
        },
        "description": {
            "en": "Escape\nfrom most\nenemies",
            "ja": "てきから にげる！\nあいてによっては\nにげられないときも"
        },
        "element": "null",
        "codes": "FHJLN",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "Interupt",
            "ja": "インターラプト"
        },
        "description": {
            "en": "Destroy\nenemy chip\ndata",
            "ja": "てきのもっている\nチップデータをはかい\nしてしまう"
        },
        "element": "null",
        "codes": "FHJLN",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "LifeAura",
            "ja": "ドリームオーラ"
        },
        "description": {
            "en": "Negate all\nattacks w/\ndamage<100",
            "ja": "攻撃力が100より\nひくい攻撃をむこうか\nふりな属性はなし"
        },
        "element": "null",
        "codes": "AHKMP",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "AquaAura",
            "ja": "アクアオーラ"
        },
        "description": {
            "en": "Null<10dmg\nWeak vs.\n[Elec]",
            "ja": "攻撃力が10より\nひくい攻撃をむこうか\n電気属性によわい"
        },
        "element": "aqua",
        "codes": "DELRS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "FireAura",
            "ja": "フレイムオーラ"
        },
        "description": {
            "en": "Null<40dmg\nWeak vs.\n[Aqua]",
            "ja": "攻撃力が40より\nひくい攻撃をむこうか\n水属性によわい"
        },
        "element": "fire",
        "codes": "BGINT",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "WoodAura",
            "ja": "ウッドオーラ"
        },
        "description": {
            "en": "Null<80dmg\nWeak vs.\n[Fire]",
            "ja": "攻撃力が80より\nひくい攻撃をむこうか\n炎属性によわい"
        },
        "element": "wood",
        "codes": "CFJOQ",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "Repair",
            "ja": "パネルリターン"
        },
        "description": {
            "en": "Repair\npanels in\nyour area",
            "ja": "じぶんのエリアの\nパネルのじょうたいを\nかいふくさせる"
        },
        "element": "null",
        "codes": "AGHKS",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "Cloud",
            "ja": "クラウド"
        },
        "description": {
            "en": "Rains up\n& down on\n1 column",
            "ja": "あまぐもがたて1れつ\nをおうふくしながら\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "BGHOR",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "Cloudier",
            "ja": "モアクラウド"
        },
        "description": {
            "en": "Rains up\n& down on\n1 column",
            "ja": "あまぐもがたて1れつ\nをおうふくしながら\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "ADIMP",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "Cloudest",
            "ja": "モストクラウド"
        },
        "description": {
            "en": "Rains up\n& down on\n1 column",
            "ja": "あまぐもがたて1れつ\nをおうふくしながら\nあめをふらせる"
        },
        "element": "aqua",
        "codes": "CFJKO",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "IceCube",
            "ja": "アイスキューブ"
        },
        "description": {
            "en": "Creates an\nice cube\nRange=1",
            "ja": "めのまえのマスに\nアイスキューブを\nはっせいさせる"
        },
        "element": "aqua",
        "codes": "ACILM",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "RockCube",
            "ja": "ストーンキューブ"
        },
        "description": {
            "en": "Creates 3\nrock cubes\nrandomly",
            "ja": "どこかのマスに\nストーンキューブを\n3つはっせいさせる"
        },
        "element": "null",
        "codes": "BEGMO",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "TimeBom1",
            "ja": "カウントボム1"
        },
        "description": {
            "en": "Sets time\nbomb in\nenemy area",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "EGJLQ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "TimeBom2",
            "ja": "カウントボム2"
        },
        "description": {
            "en": "Sets time\nbomb in\nenemy area",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "CFJLS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "TimeBom3",
            "ja": "カウントボム3"
        },
        "description": {
            "en": "Sets time\nbomb in\nenemy area",
            "ja": "てきエリアにじげん\nばくだんをセット\nエリア中にばくはつ！"
        },
        "element": "null",
        "codes": "ABGOP",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "Invis1",
            "ja": "インビジブル1"
        },
        "description": {
            "en": "Temporary\nimmunity",
            "ja": "いっていじかん\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "IJLOQ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "Invis2",
            "ja": "インビジブル2"
        },
        "description": {
            "en": "Temporary\nimmunity",
            "ja": "いっていじかん\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "ACFJM",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "Invis3",
            "ja": "インビジブル3"
        },
        "description": {
            "en": "Temporary\nimmunity",
            "ja": "いっていじかん\nとうめいになって\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "BDHKN",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "IronBody",
            "ja": "アイアンボディ"
        },
        "description": {
            "en": "30 seconds\nstoneshape\nDefense UP",
            "ja": "30びょうかん\nせきかしていどうでき\nないが ぼうぎょUP"
        },
        "element": "null",
        "codes": "CDLQR",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "Remobit1",
            "ja": "リモコゴロー1"
        },
        "description": {
            "en": "Remote\ncontrol\nsmasher!",
            "ja": "アンテナをおいて\nリモコゴローがてきの\nエリアをこわしていく"
        },
        "element": "elec",
        "codes": "ACFNO",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "Remobit2",
            "ja": "リモコゴロー2"
        },
        "description": {
            "en": "Remote\ncontrol\nsmasher!",
            "ja": "アンテナをおいて\nリモコゴローがてきの\nエリアをこわしていく"
        },
        "element": "elec",
        "codes": "BDEHI",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "Remobit3",
            "ja": "リモコゴロー3"
        },
        "description": {
            "en": "Remote\ncontrol\nsmasher!",
            "ja": "アンテナをおいて\nリモコゴローがてきの\nエリアをこわしていく"
        },
        "element": "elec",
        "codes": "GJKPQ",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "BstrGard",
            "ja": "バスターガード"
        },
        "description": {
            "en": "1-turn of\nMetGuard\nw/ B Btn.",
            "ja": "そのターン中だけ\nBボタンでメットガー\nドがつかいほうだい"
        },
        "element": "null",
        "codes": "AGKNR",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "BstrBomb",
            "ja": "バスターボム"
        },
        "description": {
            "en": "1-turn of\nMiniBomb\nw/ B Btn.",
            "ja": "そのターン中だけ\nBボタンでミニボムが\nなげほうだい"
        },
        "element": "null",
        "codes": "DHJOT",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "BstrSwrd",
            "ja": "バスターソード"
        },
        "description": {
            "en": "1-turn use\nof Sword\nwith B Btn",
            "ja": "そのターン中だけ\nBボタンでソードが\nつかいほうだい"
        },
        "element": "null",
        "codes": "BELPS",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "BstrPnch",
            "ja": "バスターパンチ"
        },
        "description": {
            "en": "1-turn of\nGutsPnch\nwith B Btn.",
            "ja": "そのターン中だけ\nBボタンでガッツパン\nチがつかいほうだい"
        },
        "element": "null",
        "codes": "CFIMQ",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "RingZap1",
            "ja": "エレキサークル1"
        },
        "description": {
            "en": "Lightning\ncircles\nyou once",
            "ja": "電気がじぶんの\nまわりを1かいてん！"
        },
        "element": "elec",
        "codes": "GHMNP",
        "mb": null,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "RingZap2",
            "ja": "エレキサークル2"
        },
        "description": {
            "en": "Lightning\ncircles\nyou twice",
            "ja": "電気がじぶんの\nまわりを2かいてん！"
        },
        "element": "elec",
        "codes": "CEGJL",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "RingZap3",
            "ja": "エレキサークル3"
        },
        "description": {
            "en": "Lightning\ncircles\nyou thrice",
            "ja": "電気がじぶんの\nまわりを3かいてん！"
        },
        "element": "elec",
        "codes": "ABORT",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "Candle1",
            "ja": "リモローソク1"
        },
        "description": {
            "en": "Set candle\n& recover\nsome HP",
            "ja": "ローソクをおいておき\nそのあいだHPが\nじどうかいふくする"
        },
        "element": "null",
        "codes": "CFIPS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "Candle2",
            "ja": "リモローソク2"
        },
        "description": {
            "en": "Set candle\n& recover\nsome HP",
            "ja": "ローソクをおいておき\nそのあいだHPが\nじどうかいふくする"
        },
        "element": "null",
        "codes": "BEGJL",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "Candle3",
            "ja": "リモローソク3"
        },
        "description": {
            "en": "Set candle\n& recover\nsome HP",
            "ja": "ローソクをおいておき\nそのあいだHPが\nじどうかいふくする"
        },
        "element": "null",
        "codes": "ADHKM",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "Slows down\ncustom\ngauge",
            "ja": "そのバトル中\nカスタムゲージの\nたまるのがおそくなる"
        },
        "element": "null",
        "codes": "HKNOQ",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "Speeds up\ncustom\ngauge",
            "ja": "そのバトル中\nカスタムゲージの\nたまるのがはやくなる"
        },
        "element": "null",
        "codes": "ACELN",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    null,
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "Drain1",
            "ja": "モスキート1"
        },
        "description": {
            "en": "Charge to\ndrain HP\nfrom enemy",
            "ja": "とっしん攻撃！\nふれたてきから\nHPをすいとる"
        },
        "element": "null",
        "codes": "ABDKO",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "Drain2",
            "ja": "モスキート2"
        },
        "description": {
            "en": "Charge to\ndrain HP\nfrom enemy",
            "ja": "とっしん攻撃！\nふれたてきから\nHPをすいとる"
        },
        "element": "null",
        "codes": "ACHNT",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "Drain3",
            "ja": "モスキート3"
        },
        "description": {
            "en": "Charge to\ndrain HP\nfrom enemy",
            "ja": "とっしん攻撃！\nふれたてきから\nHPをすいとる"
        },
        "element": "null",
        "codes": "AEFLQ",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "Mine1",
            "ja": "ステルスマイン1"
        },
        "description": {
            "en": "Hides a\nmine in\nenemy area",
            "ja": "てきのエリアのどこか\nのマスに みえない\nじらいをセットする"
        },
        "element": "null",
        "codes": "GHMNP",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "Mine2",
            "ja": "ステルスマイン2"
        },
        "description": {
            "en": "Hides a\nmine in\nenemy area",
            "ja": "てきのエリアのどこか\nのマスに みえない\nじらいをセットする"
        },
        "element": "null",
        "codes": "CEGJL",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "Mine3",
            "ja": "ステルスマイン3"
        },
        "description": {
            "en": "Hides a\nmine in\nenemy area",
            "ja": "てきのエリアのどこか\nのマスに みえない\nじらいをセットする"
        },
        "element": "null",
        "codes": "ABORT",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "Gaia1",
            "ja": "ガイアハンマー1"
        },
        "description": {
            "en": "Rolling\n3-column\nexplosion!",
            "ja": "じめんをたたいて\n3れつぜんたいを\nすすむばくはつ！"
        },
        "element": "null",
        "codes": "CDLOT",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "Gaia2",
            "ja": "ガイアハンマー2"
        },
        "description": {
            "en": "Rolling\n3-column\nexplosion!",
            "ja": "じめんをたたいて\n3れつぜんたいを\nすすむばくはつ！"
        },
        "element": "null",
        "codes": "CFKPS",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "Gaia3",
            "ja": "ガイアハンマー3"
        },
        "description": {
            "en": "Rolling\n3-column\nexplosion!",
            "ja": "じめんをたたいて\n3れつぜんたいを\nすすむばくはつ！"
        },
        "element": "null",
        "codes": "CGMNT",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
        "name": {
            "en": "BblWrap1",
            "ja": "バブルラップ1"
        },
        "description": {
            "en": "Aqua wall\nComes back\nif damaged",
            "ja": "水属性のバリア\nこわれてもしばらくす\nればふっかつする"
        },
        "element": "aqua",
        "codes": "CEGIM",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
        "name": {
            "en": "BblWrap2",
            "ja": "バブルラップ2"
        },
        "description": {
            "en": "Aqua wall\nComes back\nif damaged",
            "ja": "水属性のバリア\nこわれてもしばらくす\nればふっかつする"
        },
        "element": "aqua",
        "codes": "DFHKN",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 122,
        "name": {
            "en": "BblWrap3",
            "ja": "バブルラップ3"
        },
        "description": {
            "en": "Aqua wall\nComes back\nif damaged",
            "ja": "水属性のバリア\nこわれてもしばらくす\nればふっかつする"
        },
        "element": "aqua",
        "codes": "ABLQR",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "Wave",
            "ja": "ツナミ"
        },
        "description": {
            "en": "3-row\nwave!\n[Aqua]",
            "ja": "3れつぜんたいを\nすすむツナミ！\n水属性の攻撃"
        },
        "element": "aqua",
        "codes": "ADILM",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "RedWave",
            "ja": "アカツナミ"
        },
        "description": {
            "en": "3-row\nlava wave!\n[Fire]",
            "ja": "3れつぜんたいを\nすすむようがんツナミ\n炎属性の攻撃"
        },
        "element": "fire",
        "codes": "BEJNP",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "BigWave",
            "ja": "オオツナミ"
        },
        "description": {
            "en": "3-row\ngiant wave\n[Aqua]",
            "ja": "3れつぜんたいを\nすすむオオツナミ\n水属性の攻撃"
        },
        "element": "aqua",
        "codes": "CHKLQ",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "Muramasa",
            "ja": "ムラマサ"
        },
        "description": {
            "en": "Do damage\n= to your\nHP loss",
            "ja": "へっているHPぶんが\n攻撃力になる\nのろいのカタナ"
        },
        "element": "null",
        "codes": "CEGJK",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 116,
        "name": {
            "en": "Dropdown",
            "ja": "テンジョウウラ"
        },
        "description": {
            "en": "Invisible\nuntil you\nattack!",
            "ja": "つぎに攻撃をだすまで\nのあいだインビジブル\nじょうたい！"
        },
        "element": "null",
        "codes": "ABORT",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "Popup",
            "ja": "ユカシタ"
        },
        "description": {
            "en": "Invisible\nwhen not\nattacking!",
            "ja": "そのターン中 攻撃\nしてないあいだは\nインビジブル！"
        },
        "element": "null",
        "codes": "CDHKN",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "Dynamyt1",
            "ja": "ダイナマイト1"
        },
        "description": {
            "en": "Looks\nright for\nenemy",
            "ja": "よこほうこうを\nみはって てきをみつ\nけるとばくはつ！"
        },
        "element": "null",
        "codes": "BGOQS",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "Dynamyt2",
            "ja": "ダイナマイト2"
        },
        "description": {
            "en": "Looks\ndiagonally\nfor enemy",
            "ja": "ななめほうこうを\nみはって てきをみつ\nけるとばくはつ！"
        },
        "element": "null",
        "codes": "ACKMN",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "Dynamyt3",
            "ja": "ダイナマイト3"
        },
        "description": {
            "en": "Looks up &\ndown for\nenemy",
            "ja": "たてほうこうを\nみはって てきをみつ\nけるとばくはつ！"
        },
        "element": "null",
        "codes": "GKMOP",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "Set Anubis\nstatue to\nreduce HP",
            "ja": "アヌビスぞうをおいて\nてきのHPがへってい\nく どくののろい"
        },
        "element": "null",
        "codes": "CLMQT",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "IronShld",
            "ja": "メタルシールド"
        },
        "description": {
            "en": "Hold btn.\nto create\nshield!",
            "ja": "ボタンをおしている\nあいだ めのまえに\nはじけとぶシールド！"
        },
        "element": "null",
        "codes": "ABORT",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 123,
        "name": {
            "en": "LeafShld",
            "ja": "リーフシールド"
        },
        "description": {
            "en": "Turns dmg\nfrom 1 hit\ninto HP",
            "ja": "1どだけ 攻撃をうけ\nても その攻撃力分を\nHPにしてかいふく！"
        },
        "element": "wood",
        "codes": "CDFKQ",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullify\n1 enemy\nattack",
            "ja": "1どだけ てきの\n攻撃をむこうか"
        },
        "element": "null",
        "codes": "DFMRS",
        "mb": null,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 170,
        "name": {
            "en": "PharoMan",
            "ja": "ファラオマン"
        },
        "description": {
            "en": "3-row\ncoffin\nlaser!",
            "ja": "3れつぜんたいに\nかんおけレーザー！"
        },
        "element": "null",
        "codes": "P",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 171,
        "name": {
            "en": "PharoMn2",
            "ja": "ファラオマンV2"
        },
        "description": {
            "en": "3-row\ncoffin\nlaser!",
            "ja": "3れつぜんたいに\nかんおけレーザー！"
        },
        "element": "null",
        "codes": "P",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 172,
        "name": {
            "en": "PharoMn3",
            "ja": "ファラオマンV3"
        },
        "description": {
            "en": "3-row\ncoffin\nlaser!",
            "ja": "3れつぜんたいに\nかんおけレーザー！"
        },
        "element": "null",
        "codes": "P",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 173,
        "name": {
            "en": "ShadoMan",
            "ja": "シャドーマン"
        },
        "description": {
            "en": "Split into\n3 for star\nattack",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 174,
        "name": {
            "en": "ShadoMn2",
            "ja": "シャドーマンV2"
        },
        "description": {
            "en": "Split into\n3 for star\nattack",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 175,
        "name": {
            "en": "ShadoMn3",
            "ja": "シャドーマンV3"
        },
        "description": {
            "en": "Split into\n3 for star\nattack",
            "ja": "ぶんしんしてトリプル\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    null,
    null,
    null,
    {
        "section": "standard",
        "index": 158,
        "name": {
            "en": "MagicMan",
            "ja": "マジックマン"
        },
        "description": {
            "en": "Magic fire\n=instant\ndelete!?",
            "ja": "前のてき1たいに\nマジックファイア！\nまれにそくしこうか！"
        },
        "element": "null",
        "codes": "M",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 159,
        "name": {
            "en": "MagicMn2",
            "ja": "マジックマンV2"
        },
        "description": {
            "en": "Magic fire\n=instant\ndelete!?",
            "ja": "前のてき1たいに\nマジックファイア！\nまれにそくしこうか！"
        },
        "element": "null",
        "codes": "M",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 160,
        "name": {
            "en": "MagicMn3",
            "ja": "マジックマンV3"
        },
        "description": {
            "en": "Magic fire\n=instant\ndelete!?",
            "ja": "前のてき1たいに\nマジックファイア！\nまれにそくしこうか！"
        },
        "element": "null",
        "codes": "M",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Hit enemy\nand heal\nsome HP",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "Roll2",
            "ja": "ロールV2"
        },
        "description": {
            "en": "Hit enemy\nand heal\nsome HP",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "Roll3",
            "ja": "ロールV3"
        },
        "description": {
            "en": "Hit enemy\nand heal\nsome HP",
            "ja": "てき1たいを攻撃\nHPかいふくのハート\nでいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "GutsMan",
            "ja": "ガッツマン"
        },
        "description": {
            "en": "Shock foe\nand crack\nenemy area",
            "ja": "しょうげきは攻撃！\nてきエリアは\nヒビわれに！"
        },
        "element": "null",
        "codes": "G",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "GutsMan2",
            "ja": "ガッツマンV2"
        },
        "description": {
            "en": "Shock foe\nand crack\nenemy area",
            "ja": "しょうげきは攻撃！\nてきエリアは\nヒビわれに！"
        },
        "element": "null",
        "codes": "G",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "GutsMan3",
            "ja": "ガッツマンV3"
        },
        "description": {
            "en": "Shock foe\nand crack\nenemy area",
            "ja": "しょうげきは攻撃！\nてきエリアは\nヒビわれに！"
        },
        "element": "null",
        "codes": "G",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Hit column\nw/ nearest\nenemy",
            "ja": "いちばんちかいてきの\nいる たて1れつに\nスーパーワイドソード"
        },
        "element": "null",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "ProtoMn2",
            "ja": "ブルースV2"
        },
        "description": {
            "en": "Hit column\nw/ nearest\nenemy",
            "ja": "いちばんちかいてきの\nいる たて1れつに\nスーパーワイドソード"
        },
        "element": "null",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "ProtoMn3",
            "ja": "ブルースV3"
        },
        "description": {
            "en": "Hit column\nw/ nearest\nenemy",
            "ja": "いちばんちかいてきの\nいる たて1れつに\nスーパーワイドソード"
        },
        "element": "null",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 161,
        "name": {
            "en": "WoodMan",
            "ja": "ウッドマン"
        },
        "description": {
            "en": "Skewer\nentire\nenemy area",
            "ja": "てきエリアぜんたいに\nまるたでくしざし攻撃"
        },
        "element": "wood",
        "codes": "W",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 162,
        "name": {
            "en": "WoodMan2",
            "ja": "ウッドマンV2"
        },
        "description": {
            "en": "Skewer\nentire\nenemy area",
            "ja": "てきエリアぜんたいに\nまるたでくしざし攻撃"
        },
        "element": "wood",
        "codes": "W",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 163,
        "name": {
            "en": "WoodMan3",
            "ja": "ウッドマンV3"
        },
        "description": {
            "en": "Skewer\nentire\nenemy area",
            "ja": "てきエリアぜんたいに\nまるたでくしざし攻撃"
        },
        "element": "wood",
        "codes": "W",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "FireMan",
            "ja": "ファイアマン"
        },
        "description": {
            "en": "1 row\nfire arm",
            "ja": "よこ1れつにひっさつ\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "FireMan2",
            "ja": "ファイアマンV2"
        },
        "description": {
            "en": "1 row\nfire arm",
            "ja": "よこ1れつにひっさつ\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "FireMan3",
            "ja": "ファイアマンV3"
        },
        "description": {
            "en": "1 row\nfire arm",
            "ja": "よこ1れつにひっさつ\nファイアアーム！"
        },
        "element": "fire",
        "codes": "F",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "NumbrMan",
            "ja": "ナンバーマン"
        },
        "description": {
            "en": "DieRollx10\ndamage to\nenemy area",
            "ja": "サイコロをふって出た\n目の×10のダメージ\nをエリアぜんたいに！"
        },
        "element": "null",
        "codes": "N",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "NumbrMn2",
            "ja": "ナンバーマンV2"
        },
        "description": {
            "en": "DieRollx20\ndamage to\nenemy area",
            "ja": "サイコロをふって出た\n目の×20のダメージ\nをエリアぜんたいに！"
        },
        "element": "null",
        "codes": "N",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "NumbrMn3",
            "ja": "ナンバーマンV3"
        },
        "description": {
            "en": "DieRollx30\ndamage to\nenemy area",
            "ja": "サイコロをふって出た\n目の×30のダメージ\nをエリアぜんたいに！"
        },
        "element": "null",
        "codes": "N",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "StoneMan",
            "ja": "ストーンマン"
        },
        "description": {
            "en": "Drops 3x3\nstones on\nenemy area",
            "ja": "てきのエリアにランダ\nムにいわを3つおとす\nそれを3回"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "StoneMn2",
            "ja": "ストーンマンV2"
        },
        "description": {
            "en": "Drops 4x3\nstones on\nenemy area",
            "ja": "てきのエリアにランダ\nムにいわを4つおとす\nそれを3回"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "StoneMn3",
            "ja": "ストーンマンV3"
        },
        "description": {
            "en": "Drops 5x3\nstones on\nenemy area",
            "ja": "てきのエリアにランダ\nムにいわを5つおとす\nそれを3回"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "IceMan",
            "ja": "アイスマン"
        },
        "description": {
            "en": "Blizzard\nattack on\nenemy area",
            "ja": "てきエリアぜんたいに\nふぶき攻撃！"
        },
        "element": "aqua",
        "codes": "I",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "IceMan2",
            "ja": "アイスマンV2"
        },
        "description": {
            "en": "Blizzard\nattack on\nenemy area",
            "ja": "てきエリアぜんたいに\nふぶき攻撃！"
        },
        "element": "aqua",
        "codes": "I",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
        "name": {
            "en": "IceMan3",
            "ja": "アイスマンV3"
        },
        "description": {
            "en": "Blizzard\nattack on\nenemy area",
            "ja": "てきエリアぜんたいに\nふぶき攻撃！"
        },
        "element": "aqua",
        "codes": "I",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 164,
        "name": {
            "en": "SkullMan",
            "ja": "スカルマン"
        },
        "description": {
            "en": "Big skull\nattack on\none enemy",
            "ja": "てき1たいにきょだい\nずがいこつ攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 165,
        "name": {
            "en": "SkullMn2",
            "ja": "スカルマンV2"
        },
        "description": {
            "en": "Big skull\nattack on\none enemy",
            "ja": "てき1たいにきょだい\nずがいこつ攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 166,
        "name": {
            "en": "SkullMn3",
            "ja": "スカルマンV3"
        },
        "description": {
            "en": "Big skull\nattack on\none enemy",
            "ja": "てき1たいにきょだい\nずがいこつ攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 149,
        "name": {
            "en": "ColorMan",
            "ja": "カラードマン"
        },
        "description": {
            "en": "Towers of\n[Aqua] &\n[Fire]!",
            "ja": "おくのれつにフレイム\nてまえれつにアクアの\nダブルタワー攻撃"
        },
        "element": "null",
        "codes": "C",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "ColorMn2",
            "ja": "カラードマンV2"
        },
        "description": {
            "en": "Towers of\n[Aqua] &\n[Fire]!",
            "ja": "おくのれつにフレイム\nてまえれつにアクアの\nダブルタワー攻撃"
        },
        "element": "null",
        "codes": "C",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 151,
        "name": {
            "en": "ColorMn3",
            "ja": "カラードマンV3"
        },
        "description": {
            "en": "Towers of\n[Aqua] &\n[Fire]!",
            "ja": "おくのれつにフレイム\nてまえれつにアクアの\nダブルタワー攻撃"
        },
        "element": "null",
        "codes": "C",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 155,
        "name": {
            "en": "BombMan",
            "ja": "ボンバーマン"
        },
        "description": {
            "en": "Enemy area\nCrossBomb\nDepth=3",
            "ja": "3マス前にバクダン！\nてきエリアにおとすと\nじゅうじにばくはつ！"
        },
        "element": "fire",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 156,
        "name": {
            "en": "BombMan2",
            "ja": "ボンバーマンV2"
        },
        "description": {
            "en": "Enemy area\nCrossBomb\nDepth=3",
            "ja": "3マス前にバクダン！\nてきエリアにおとすと\nじゅうじにばくはつ！"
        },
        "element": "fire",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 157,
        "name": {
            "en": "BombMan3",
            "ja": "ボンバーマンV3"
        },
        "description": {
            "en": "Enemy area\nCrossBomb\nDepth=3",
            "ja": "3マス前にバクダン！\nてきエリアにおとすと\nじゅうじにばくはつ！"
        },
        "element": "fire",
        "codes": "B",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 167,
        "name": {
            "en": "SharkMan",
            "ja": "シャークマン"
        },
        "description": {
            "en": "3-row\nshark fin\nattack",
            "ja": "3たいのヒレが3れつ\nに とつげきする\nかんつう攻撃！"
        },
        "element": "aqua",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 168,
        "name": {
            "en": "SharkMn2",
            "ja": "シャークマンV2"
        },
        "description": {
            "en": "3-row\nshark fin\nattack",
            "ja": "3たいのヒレが3れつ\nに とつげきする\nかんつう攻撃！"
        },
        "element": "aqua",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 169,
        "name": {
            "en": "SharkMn3",
            "ja": "シャークマンV3"
        },
        "description": {
            "en": "3-row\nshark fin\nattack",
            "ja": "3たいのヒレが3れつ\nに とつげきする\nかんつう攻撃！"
        },
        "element": "aqua",
        "codes": "S",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 152,
        "name": {
            "en": "ElecMan",
            "ja": "エレキマン"
        },
        "description": {
            "en": "Lightning\nhits enemy\npanel!",
            "ja": "てきのマスめがけて\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E",
        "mb": null,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 153,
        "name": {
            "en": "ElecMan2",
            "ja": "エレキマンV2"
        },
        "description": {
            "en": "Lightning\nhits enemy\npanel!",
            "ja": "てきのマスめがけて\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E",
        "mb": null,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 154,
        "name": {
            "en": "ElecMan3",
            "ja": "エレキマンV3"
        },
        "description": {
            "en": "Lightning\nhits enemy\npanel!",
            "ja": "てきのマスめがけて\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 176,
        "name": {
            "en": "Bass",
            "ja": "フォルテ"
        },
        "description": {
            "en": "Explodes\non entire\narea!",
            "ja": "エリアぜんたいに\nばくはつ攻撃！"
        },
        "element": "null",
        "codes": "F",
        "mb": null,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    null,
    null,
    {
        "section": "pa",
        "index": 1,
        "name": {
            "en": "Z-Canon1",
            "ja": "ゼータキャノン1"
        },
        "description": {
            "en": "ID CA",
            "ja": "ID CA"
        },
        "damage": 40,
        "pa": [
            [
                {
                    "id": 1,
                    "variant": 0
                },
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                },
                {
                    "id": 1,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 2,
        "name": {
            "en": "Z-Canon2",
            "ja": "ゼータキャノン2"
        },
        "description": {
            "en": "ID CB",
            "ja": "ID CB"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 2,
                    "variant": 0
                },
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                },
                {
                    "id": 2,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 3,
        "name": {
            "en": "Z-Canon3",
            "ja": "ゼータキャノン3"
        },
        "description": {
            "en": "ID CC",
            "ja": "ID CC"
        },
        "damage": 120,
        "pa": [
            [
                {
                    "id": 3,
                    "variant": 0
                },
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "Z-Spread",
            "ja": "ゼータスプレッド"
        },
        "description": {
            "en": "ID CD",
            "ja": "ID CD"
        },
        "damage": 30,
        "pa": [
            [
                {
                    "id": 10,
                    "variant": 0
                },
                {
                    "id": 10,
                    "variant": 1
                },
                {
                    "id": 10,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 10,
                    "variant": 1
                },
                {
                    "id": 10,
                    "variant": 2
                },
                {
                    "id": 10,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 10,
                    "variant": 2
                },
                {
                    "id": 10,
                    "variant": 3
                },
                {
                    "id": 10,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "Z-Raton1",
            "ja": "ゼータラットン1"
        },
        "description": {
            "en": "ID CE",
            "ja": "ID CE"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 58,
                    "variant": 0
                },
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                },
                {
                    "id": 58,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "Z-Raton2",
            "ja": "ゼータラットン2"
        },
        "description": {
            "en": "ID CF",
            "ja": "ID CF"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 59,
                    "variant": 0
                },
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                },
                {
                    "id": 59,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "Z-Raton3",
            "ja": "ゼータラットン3"
        },
        "description": {
            "en": "ID D0",
            "ja": "ID D0"
        },
        "damage": 120,
        "pa": [
            [
                {
                    "id": 60,
                    "variant": 0
                },
                {
                    "id": 60,
                    "variant": 1
                },
                {
                    "id": 60,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 60,
                    "variant": 1
                },
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 3
                },
                {
                    "id": 60,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "Z-Arrow",
            "ja": "ゼータアロー"
        },
        "description": {
            "en": "ID D1",
            "ja": "ID D1"
        },
        "damage": 40,
        "pa": [
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 1
                },
                {
                    "id": 37,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 37,
                    "variant": 1
                },
                {
                    "id": 37,
                    "variant": 2
                },
                {
                    "id": 37,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 37,
                    "variant": 2
                },
                {
                    "id": 37,
                    "variant": 3
                },
                {
                    "id": 37,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "Z-Spear",
            "ja": "ゼータスピア"
        },
        "description": {
            "en": "ID D2",
            "ja": "ID D2"
        },
        "damage": 50,
        "pa": [
            [
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 1
                },
                {
                    "id": 38,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 38,
                    "variant": 1
                },
                {
                    "id": 38,
                    "variant": 2
                },
                {
                    "id": 38,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 38,
                    "variant": 2
                },
                {
                    "id": 38,
                    "variant": 3
                },
                {
                    "id": 38,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "Z-Lance",
            "ja": "ゼータランス"
        },
        "description": {
            "en": "ID D3",
            "ja": "ID D3"
        },
        "damage": 60,
        "pa": [
            [
                {
                    "id": 39,
                    "variant": 0
                },
                {
                    "id": 39,
                    "variant": 1
                },
                {
                    "id": 39,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 39,
                    "variant": 1
                },
                {
                    "id": 39,
                    "variant": 2
                },
                {
                    "id": 39,
                    "variant": 3
                }
            ],
            [
                {
                    "id": 39,
                    "variant": 2
                },
                {
                    "id": 39,
                    "variant": 3
                },
                {
                    "id": 39,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "O-Canon1",
            "ja": "オメガキャノン1"
        },
        "description": {
            "en": "ID D4",
            "ja": "ID D4"
        },
        "damage": 40,
        "pa": [
            [
                {
                    "id": 1,
                    "variant": 0
                },
                {
                    "id": 1,
                    "variant": 1
                },
                {
                    "id": 1,
                    "variant": 2
                },
                {
                    "id": 1,
                    "variant": 3
                },
                {
                    "id": 1,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "O-Canon2",
            "ja": "オメガキャノン2"
        },
        "description": {
            "en": "ID D5",
            "ja": "ID D5"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 2,
                    "variant": 0
                },
                {
                    "id": 2,
                    "variant": 1
                },
                {
                    "id": 2,
                    "variant": 2
                },
                {
                    "id": 2,
                    "variant": 3
                },
                {
                    "id": 2,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "O-Canon3",
            "ja": "オメガキャノン3"
        },
        "description": {
            "en": "ID D6",
            "ja": "ID D6"
        },
        "damage": 120,
        "pa": [
            [
                {
                    "id": 3,
                    "variant": 0
                },
                {
                    "id": 3,
                    "variant": 1
                },
                {
                    "id": 3,
                    "variant": 2
                },
                {
                    "id": 3,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "O-Spread",
            "ja": "オメガスプレッド"
        },
        "description": {
            "en": "ID D7",
            "ja": "ID D7"
        },
        "damage": 30,
        "pa": [
            [
                {
                    "id": 10,
                    "variant": 0
                },
                {
                    "id": 10,
                    "variant": 1
                },
                {
                    "id": 10,
                    "variant": 2
                },
                {
                    "id": 10,
                    "variant": 3
                },
                {
                    "id": 10,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "O-Raton1",
            "ja": "オメガラットン1"
        },
        "description": {
            "en": "ID D8",
            "ja": "ID D8"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 58,
                    "variant": 0
                },
                {
                    "id": 58,
                    "variant": 1
                },
                {
                    "id": 58,
                    "variant": 2
                },
                {
                    "id": 58,
                    "variant": 3
                },
                {
                    "id": 58,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "O-Raton2",
            "ja": "オメガラットン2"
        },
        "description": {
            "en": "ID D9",
            "ja": "ID D9"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 59,
                    "variant": 0
                },
                {
                    "id": 59,
                    "variant": 1
                },
                {
                    "id": 59,
                    "variant": 2
                },
                {
                    "id": 59,
                    "variant": 3
                },
                {
                    "id": 59,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "O-Raton3",
            "ja": "オメガラットン3"
        },
        "description": {
            "en": "ID DA",
            "ja": "ID DA"
        },
        "damage": 120,
        "pa": [
            [
                {
                    "id": 60,
                    "variant": 0
                },
                {
                    "id": 60,
                    "variant": 1
                },
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 3
                },
                {
                    "id": 60,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "O-Arrow",
            "ja": "オメガアロー"
        },
        "description": {
            "en": "ID DB",
            "ja": "ID DB"
        },
        "damage": 40,
        "pa": [
            [
                {
                    "id": 37,
                    "variant": 0
                },
                {
                    "id": 37,
                    "variant": 1
                },
                {
                    "id": 37,
                    "variant": 2
                },
                {
                    "id": 37,
                    "variant": 3
                },
                {
                    "id": 37,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 19,
        "name": {
            "en": "O-Spear",
            "ja": "オメガスピア"
        },
        "description": {
            "en": "ID DC",
            "ja": "ID DC"
        },
        "damage": 50,
        "pa": [
            [
                {
                    "id": 38,
                    "variant": 0
                },
                {
                    "id": 38,
                    "variant": 1
                },
                {
                    "id": 38,
                    "variant": 2
                },
                {
                    "id": 38,
                    "variant": 3
                },
                {
                    "id": 38,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 20,
        "name": {
            "en": "O-Lance",
            "ja": "オメガランス"
        },
        "description": {
            "en": "ID DD",
            "ja": "ID DD"
        },
        "damage": 60,
        "pa": [
            [
                {
                    "id": 39,
                    "variant": 0
                },
                {
                    "id": 39,
                    "variant": 1
                },
                {
                    "id": 39,
                    "variant": 2
                },
                {
                    "id": 39,
                    "variant": 3
                },
                {
                    "id": 39,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 21,
        "name": {
            "en": "B-Bomb",
            "ja": "ベータボム"
        },
        "description": {
            "en": "ID DE",
            "ja": "ID DE"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "B-Sword",
            "ja": "ベータソード"
        },
        "description": {
            "en": "ID DF",
            "ja": "ID DF"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 23,
        "name": {
            "en": "B-Wave",
            "ja": "ベータウェーブ"
        },
        "description": {
            "en": "ID E0",
            "ja": "ID E0"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "B-Quake",
            "ja": "ベータクェイク"
        },
        "description": {
            "en": "ID E1",
            "ja": "ID E1"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "S-Bomb",
            "ja": "シグマボム"
        },
        "description": {
            "en": "ID E2",
            "ja": "ID E2"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 7,
                    "variant": 0
                },
                {
                    "id": 8,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "S-Sword",
            "ja": "シグマソード"
        },
        "description": {
            "en": "ID E3",
            "ja": "ID E3"
        },
        "damage": 80,
        "pa": [
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 4,
                    "variant": 4
                },
                {
                    "id": 5,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                },
                {
                    "id": 6,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "S-Wave",
            "ja": "シグマウェーブ"
        },
        "description": {
            "en": "ID E4",
            "ja": "ID E4"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "S-Quake",
            "ja": "シグマクェイク"
        },
        "description": {
            "en": "ID E5",
            "ja": "ID E5"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ],
            [
                {
                    "id": 22,
                    "variant": 4
                },
                {
                    "id": 23,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                },
                {
                    "id": 24,
                    "variant": 4
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "PwrCanon",
            "ja": "パワードキャノン"
        },
        "description": {
            "en": "ID E6",
            "ja": "ID E6"
        },
        "damage": 200,
        "pa": [
            [
                {
                    "id": 14,
                    "variant": 0
                },
                {
                    "id": 15,
                    "variant": 4
                },
                {
                    "id": 10,
                    "variant": 3
                },
                {
                    "id": 3,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "HvyStamp",
            "ja": "ヘビースタンプ"
        },
        "description": {
            "en": "ID E7",
            "ja": "ID E7"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 127,
                    "variant": 0
                },
                {
                    "id": 128,
                    "variant": 0
                },
                {
                    "id": 129,
                    "variant": 0
                },
                {
                    "id": 24,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 31,
        "name": {
            "en": "BgStrait",
            "ja": "ビッグストレート"
        },
        "description": {
            "en": "ID E8",
            "ja": "ID E8"
        },
        "damage": 250,
        "pa": [
            [
                {
                    "id": 28,
                    "variant": 0
                },
                {
                    "id": 29,
                    "variant": 0
                },
                {
                    "id": 31,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 32,
        "name": {
            "en": "BloodSuk",
            "ja": "ブラッドレイン"
        },
        "description": {
            "en": "ID E9",
            "ja": "ID E9"
        },
        "damage": 200,
        "pa": [
            [
                {
                    "id": 121,
                    "variant": 0
                },
                {
                    "id": 122,
                    "variant": 0
                },
                {
                    "id": 123,
                    "variant": 0
                },
                {
                    "id": 133,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 33,
        "name": {
            "en": "Storm",
            "ja": "デスストーム"
        },
        "description": {
            "en": "ID EA",
            "ja": "ID EA"
        },
        "damage": 200,
        "pa": [
            [
                {
                    "id": 40,
                    "variant": 4
                },
                {
                    "id": 41,
                    "variant": 0
                },
                {
                    "id": 42,
                    "variant": 2
                },
                {
                    "id": 88,
                    "variant": 1
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 34,
        "name": {
            "en": "GtsShoot",
            "ja": "ガッツシュート"
        },
        "description": {
            "en": "ID EB",
            "ja": "ID EB"
        },
        "damage": 500,
        "pa": [
            [
                {
                    "id": 34,
                    "variant": 3
                },
                {
                    "id": 31,
                    "variant": 2
                },
                {
                    "id": 163,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 34,
                    "variant": 3
                },
                {
                    "id": 31,
                    "variant": 2
                },
                {
                    "id": 164,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 34,
                    "variant": 3
                },
                {
                    "id": 31,
                    "variant": 2
                },
                {
                    "id": 165,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 35,
        "name": {
            "en": "LifeSavr",
            "ja": "ライフセーバー"
        },
        "description": {
            "en": "ID EC",
            "ja": "ID EC"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 147,
                    "variant": 3
                },
                {
                    "id": 85,
                    "variant": 3
                },
                {
                    "id": 160,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 147,
                    "variant": 3
                },
                {
                    "id": 85,
                    "variant": 3
                },
                {
                    "id": 161,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 147,
                    "variant": 3
                },
                {
                    "id": 85,
                    "variant": 3
                },
                {
                    "id": 162,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 36,
        "name": {
            "en": "2xHero",
            "ja": "ダブルヒーロー"
        },
        "description": {
            "en": "ID ED",
            "ja": "ID ED"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 30,
                    "variant": 0
                },
                {
                    "id": 32,
                    "variant": 0
                },
                {
                    "id": 33,
                    "variant": 0
                },
                {
                    "id": 166,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 30,
                    "variant": 0
                },
                {
                    "id": 32,
                    "variant": 0
                },
                {
                    "id": 33,
                    "variant": 0
                },
                {
                    "id": 167,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 30,
                    "variant": 0
                },
                {
                    "id": 32,
                    "variant": 0
                },
                {
                    "id": 33,
                    "variant": 0
                },
                {
                    "id": 168,
                    "variant": 0
                }
            ]
        ]
    },
    null,
    null,
    {
        "name": {
            "en": "HPmemory",
            "ja": "HPメモリ"
        },
        "description": {
            "en": "ID F0",
            "ja": "ID F0"
        }
    },
    {
        "name": {
            "en": "PowerUP",
            "ja": "バスターUP"
        },
        "description": {
            "en": "ID F1",
            "ja": "ID F1"
        }
    },
    {
        "name": {
            "en": "PharTrap",
            "ja": "ファラオトラップ"
        },
        "description": {
            "en": "ID F2",
            "ja": "ID F2"
        }
    },
    null,
    {
        "name": {
            "en": "HeatArmr",
            "ja": "ヒートアーマー"
        },
        "description": {
            "en": "ID F4",
            "ja": "ID F4"
        }
    },
    {
        "name": {
            "en": "AquaArmr",
            "ja": "アクアアーマー"
        },
        "description": {
            "en": "ID F5",
            "ja": "ID F5"
        }
    },
    {
        "name": {
            "en": "WoodArmr",
            "ja": "ウッドアーマー"
        },
        "description": {
            "en": "ID F6",
            "ja": "ID F6"
        }
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];