const DATA_6_chips = [
    null,
    {
        "section": "standard",
        "index": 1,
        "name": {
            "en": "Cannon",
            "ja": "キャノン"
        },
        "description": {
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "ABC*",
        "mb": 6,
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
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "LMN*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 100,
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
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "RST*",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 4,
        "name": {
            "en": "AirShot",
            "ja": "エアシュート"
        },
        "description": {
            "en": "Knock\nenmy back\n1 square",
            "ja": "ヒットしたあいてを\n1マスおくへおす\nくうきほう"
        },
        "element": "wind",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 2,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 5,
        "name": {
            "en": "Vulcan1",
            "ja": "バルカン1"
        },
        "description": {
            "en": "3-shot to\npierce 1\npanel!",
            "ja": "3れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "BDS*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 6,
        "name": {
            "en": "Vulcan2",
            "ja": "バルカン2"
        },
        "description": {
            "en": "4-shot to\npierce 1\npanel!",
            "ja": "4れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "DFL",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 15,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 7,
        "name": {
            "en": "Vulcan3",
            "ja": "バルカン3"
        },
        "description": {
            "en": "5-shot to\npierce 1\npanel!",
            "ja": "5れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "AGR",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "SuprVulc",
            "ja": "スーパーバルカン"
        },
        "description": {
            "en": "10-shot\nvulcan\ncannon!",
            "ja": "きょういの\n10れんしゃ\nバルカンほう！"
        },
        "element": "null",
        "codes": "V",
        "mb": 75,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "Spreadr1",
            "ja": "スプレッドガン1"
        },
        "description": {
            "en": "Spreads\ndamg to\nadj panls",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "LMN*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "Spreadr2",
            "ja": "スプレッドガン2"
        },
        "description": {
            "en": "Spreads\ndamg to\nadj panls",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "ABC*",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "Spreadr3",
            "ja": "スプレッドガン3"
        },
        "description": {
            "en": "Spreads\ndamg to\nadj panls",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "QRS*",
        "mb": 26,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "TankCan1",
            "ja": "センシャホウ1"
        },
        "description": {
            "en": "3sqr blst\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "AGR",
        "mb": 17,
        "version": null,
        "stars": 1,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "TankCan2",
            "ja": "センシャホウ2"
        },
        "description": {
            "en": "3sqr blst\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "LSV",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "TankCan3",
            "ja": "センシャホウ3"
        },
        "description": {
            "en": "3sqr blst\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "BMP",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "GunDelS1",
            "ja": "ガンデルソル1"
        },
        "description": {
            "en": "Hits row\n2pnl ahd\nw/sunshne",
            "ja": "2マス前方の\nたて3マスに日の光\nをしょうしゃする！"
        },
        "element": "null",
        "codes": "CMT*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "GunDelS2",
            "ja": "ガンデルソル2"
        },
        "description": {
            "en": "Hits row\n2pnl ahd\nw/sunshne",
            "ja": "2マス前方の\nたて3マスに日の光\nをしょうしゃする！"
        },
        "element": "null",
        "codes": "BER",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "GunDelS3",
            "ja": "ガンデルソル3"
        },
        "description": {
            "en": "Hits row\n2pnl ahd\nw/sunshne",
            "ja": "2マス前方の\nたて3マスに日の光\nをしょうしゃする！"
        },
        "element": "null",
        "codes": "NQW",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 1,
        "name": {
            "en": "GunDelEX",
            "ja": "ガンデルソルEX"
        },
        "description": {
            "en": "Fires a\nspread\nsunbeam",
            "ja": "さらにこうはんいに\nたいようこうせんを\nしょうしゃする！"
        },
        "element": "null",
        "codes": "G",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "YoYo",
            "ja": "ヨーヨー"
        },
        "description": {
            "en": "YoYo atk\nreaches\n3sq ahead",
            "ja": "3マス前までとどく\nヨーヨー攻撃！\n3マス前は3ヒット"
        },
        "element": "null",
        "codes": "LMN*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "FireBrn1",
            "ja": "ヘルズバーナー1"
        },
        "description": {
            "en": "Crcks 3\nsqrs ahd\nwith fire",
            "ja": "前方3マス分に\nじごくの炎攻撃！\nパネルをヒビに！"
        },
        "element": "fire",
        "codes": "FGH*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "FireBrn2",
            "ja": "ヘルズバーナー2"
        },
        "description": {
            "en": "Crcks 3\nsqrs ahd\nwith fire",
            "ja": "前方3マス分に\nじごくの炎攻撃！\nパネルをヒビに！"
        },
        "element": "fire",
        "codes": "STU",
        "mb": 21,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "FireBrn3",
            "ja": "ヘルズバーナー3"
        },
        "description": {
            "en": "Crcks 3\nsqrs ahd\nwith fire",
            "ja": "前方3マス分に\nじごくの炎攻撃！\nパネルをヒビに！"
        },
        "element": "fire",
        "codes": "CDE",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "WideSht",
            "ja": "ワイドショット"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "PQR",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "TrnArrw1",
            "ja": "トレインアロー1"
        },
        "description": {
            "en": "Hits enmy\nw/arrow.\nUse dstnc",
            "ja": "前方のてきにアロー\nてきとのキョリが\nはなれてるほどよい"
        },
        "element": "aqua",
        "codes": "AFK",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "TrnArrw2",
            "ja": "トレインアロー2"
        },
        "description": {
            "en": "Hits enmy\nw/arrow.\nUse dstnc",
            "ja": "前方のてきにアロー\nてきとのキョリが\nはなれてるほどよい"
        },
        "element": "aqua",
        "codes": "GMZ",
        "mb": 36,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "TrnArrw3",
            "ja": "トレインアロー3"
        },
        "description": {
            "en": "Hits enmy\nw/arrow.\nUse dstnc",
            "ja": "前方のてきにアロー\nてきとのキョリが\nはなれてるほどよい"
        },
        "element": "aqua",
        "codes": "MSY",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "BblStar1",
            "ja": "バブルスター1"
        },
        "description": {
            "en": "Seals an\nenemy in\na bubble.",
            "ja": "前方へとんでいき\nヒットしたあいてを\nバブルにとじこめる"
        },
        "element": "aqua",
        "codes": "BET",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "BblStar2",
            "ja": "バブルスター2"
        },
        "description": {
            "en": "Seals an\nenemy in\na bubble.",
            "ja": "前方へとんでいき\nヒットしたあいてを\nバブルにとじこめる"
        },
        "element": "aqua",
        "codes": "CLV",
        "mb": 38,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 28,
        "name": {
            "en": "BblStar3",
            "ja": "バブルスター3"
        },
        "description": {
            "en": "Seals an\nenemy in\na bubble.",
            "ja": "前方へとんでいき\nヒットしたあいてを\nバブルにとじこめる"
        },
        "element": "aqua",
        "codes": "GRS",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "Thunder",
            "ja": "サンダーボール"
        },
        "description": {
            "en": "Pralyzing\nelectric\nattack!",
            "ja": "ゆっくりとすすむ\nついび電気攻撃\nあたるとマヒする！"
        },
        "element": "elec",
        "codes": "BRS*",
        "mb": 7,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "DolThdr1",
            "ja": "ドールサンダー1"
        },
        "description": {
            "en": "A piercng\nthunder\nattack!",
            "ja": "前方にかんつうする\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "AEQ",
        "mb": 24,
        "version": null,
        "stars": 1,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "DolThdr2",
            "ja": "ドールサンダー2"
        },
        "description": {
            "en": "A piercng\nthunder\nattack!",
            "ja": "前方にかんつうする\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "CLP",
        "mb": 31,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "DolThdr3",
            "ja": "ドールサンダー3"
        },
        "description": {
            "en": "A piercng\nthunder\nattack!",
            "ja": "前方にかんつうする\nサンダー攻撃！"
        },
        "element": "elec",
        "codes": "BRV",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "ElcPuls1",
            "ja": "エレキパルス1"
        },
        "description": {
            "en": "Sprd elec\npuls that\nparalyzes",
            "ja": "ほうしゃじょうに\nひろがるでんぱ攻撃\nあいてをマヒさせる"
        },
        "element": "elec",
        "codes": "JLS",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "ElcPuls2",
            "ja": "エレキパルス2"
        },
        "description": {
            "en": "Sprd elec\npulse.Pul\nenemy in.",
            "ja": "ほうしゃじょうに\nひろがるでんぱ攻撃\nあいてをひきよせる"
        },
        "element": "elec",
        "codes": "AEJ",
        "mb": 36,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "ElcPuls3",
            "ja": "エレキパルス3"
        },
        "description": {
            "en": "Sprd elec\npuls. Hit\nw/HP bug.",
            "ja": "ほうしゃじょうに\nひろがるでんぱ攻撃\nHPバグをあたえる"
        },
        "element": "elec",
        "codes": "AJS",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "RskyHny1",
            "ja": "リスキーハニー1"
        },
        "description": {
            "en": "Bees attk\nwhle hive\ndefending",
            "ja": "ハチのすをかまえて\nぼうぎょしながら\nハチがついび攻撃！"
        },
        "element": "wood",
        "codes": "BGS",
        "mb": 21,
        "version": null,
        "stars": 1,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "RskyHny2",
            "ja": "リスキーハニー2"
        },
        "description": {
            "en": "Bees attk\nwhle hive\ndefending",
            "ja": "ハチのすをかまえて\nぼうぎょしながら\nハチがついび攻撃！"
        },
        "element": "wood",
        "codes": "CRV",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 15,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "RskyHny3",
            "ja": "リスキーハニー3"
        },
        "description": {
            "en": "Bees attk\nwhle hive\ndefending",
            "ja": "ハチのすをかまえて\nぼうぎょしながら\nハチがついび攻撃！"
        },
        "element": "wood",
        "codes": "ADM",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "RlngLog1",
            "ja": "ローリングログ1"
        },
        "description": {
            "en": "Send out\n2 logs\n2panl fwd",
            "ja": "2マス前方に2本の\nころがるまるたを\nはっしゃする！"
        },
        "element": "wood",
        "codes": "IKP",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "RlngLog2",
            "ja": "ローリングログ2"
        },
        "description": {
            "en": "Send out\n2 logs\n2panl fwd",
            "ja": "2マス前方に2本の\nころがるまるたを\nはっしゃする！"
        },
        "element": "wood",
        "codes": "EQZ",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "RlngLog3",
            "ja": "ローリングログ3"
        },
        "description": {
            "en": "Send out\n2 logs\n2panl fwd",
            "ja": "2マス前方に2本の\nころがるまるたを\nはっしゃする！"
        },
        "element": "wood",
        "codes": "FNW",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "MachGun1",
            "ja": "マシンガン1"
        },
        "description": {
            "en": "Fire 9sts\nat row w/\nclst enmy",
            "ja": "いちばんちかいてき\nのいるたてれつから\n9れんしゃ攻撃！"
        },
        "element": "cursor",
        "codes": "ART*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "MachGun2",
            "ja": "マシンガン2"
        },
        "description": {
            "en": "Fire 9sts\nat row w/\nclst enmy",
            "ja": "いちばんちかいてき\nのいるたてれつから\n9れんしゃ攻撃！"
        },
        "element": "cursor",
        "codes": "EGS",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "MachGun3",
            "ja": "マシンガン3"
        },
        "description": {
            "en": "Fire 9sts\nat row w/\nclst enmy",
            "ja": "いちばんちかいてき\nのいるたてれつから\n9れんしゃ攻撃！"
        },
        "element": "cursor",
        "codes": "BFM",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 123,
        "name": {
            "en": "HeatDrgn",
            "ja": "ヒートドラゴン"
        },
        "description": {
            "en": "Drgn near\nclst enmy\nHit 2rows",
            "ja": "ちかいてきのいる\nれつからドラゴン！\nたて2れつを攻撃！"
        },
        "element": "fire",
        "codes": "GRT",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "ElecDrgn",
            "ja": "エレキドラゴン"
        },
        "description": {
            "en": "Drgn near\nclst enmy\nHit 2rows",
            "ja": "ちかいてきのいる\nれつからドラゴン！\nたて2れつを攻撃！"
        },
        "element": "elec",
        "codes": "ALV",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "AquaDrgn",
            "ja": "アクアドラゴン"
        },
        "description": {
            "en": "Drgn near\nclst enmy\nHit 2rows",
            "ja": "ちかいてきのいる\nれつからドラゴン！\nたて2れつを攻撃！"
        },
        "element": "aqua",
        "codes": "HPS",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "WoodDrgn",
            "ja": "ウッドドラゴン"
        },
        "description": {
            "en": "Drgn near\nclst enmy\nHit 2rows",
            "ja": "ちかいてきのいる\nれつからドラゴン！\nたて2れつを攻撃！"
        },
        "element": "wood",
        "codes": "GTV",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "AirHocky",
            "ja": "エアホッケー"
        },
        "description": {
            "en": "Bounce\nthe puck\noff walls",
            "ja": "かべにはんしゃする\nエアホッケーを\nななめ右になげる！"
        },
        "element": "break",
        "codes": "LMN",
        "mb": 19,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "DrilArm",
            "ja": "ドリルアーム"
        },
        "description": {
            "en": "Knocks\nenmy 2sq\naway",
            "ja": "前方2マスはんいを\nドリル攻撃！\nてきをおしやる！"
        },
        "element": "break",
        "codes": "GMW",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "Tornado",
            "ja": "トルネード"
        },
        "description": {
            "en": "8hit strm\n2 squares\nahead",
            "ja": "2マス前方に\n8ヒットのたつまき\nを発生させる！"
        },
        "element": "wind",
        "codes": "LRT",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "Static",
            "ja": "ノイズストーム"
        },
        "description": {
            "en": "A static\nblast 2sq\nahead",
            "ja": "2マス前にノイズの\nアラシ！バグがある\nとパワーアップする"
        },
        "element": "wind",
        "codes": "GSV",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throws a\nMiniBomb\n3sq ahead",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "BLR*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "EnergBom",
            "ja": "エナジーボム"
        },
        "description": {
            "en": "Throws a\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "CKV*",
        "mb": 11,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "MegEnBom",
            "ja": "メガエナジーボム"
        },
        "description": {
            "en": "Throws a\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "GMO*",
        "mb": 27,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "FlshBom1",
            "ja": "フラッシュボム1"
        },
        "description": {
            "en": "Thrw dlyd\nstun bomb\n3sq fwd.",
            "ja": "3マス前にボム！\nしばらくすると\nマヒさせるばくはつ"
        },
        "element": "null",
        "codes": "JLQ*",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "FlshBom2",
            "ja": "フラッシュボム2"
        },
        "description": {
            "en": "Thrw dlyd\nstun bomb\n3sq fwd.",
            "ja": "3マス前にボム！\nしばらくすると\nマヒさせるばくはつ"
        },
        "element": "null",
        "codes": "GKR",
        "mb": 34,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "FlshBom3",
            "ja": "フラッシュボム3"
        },
        "description": {
            "en": "Thrw dlyd\nstun bomb\n3sq fwd.",
            "ja": "3マス前にボム！\nしばらくすると\nマヒさせるばくはつ"
        },
        "element": "null",
        "codes": "HPS",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "BlkBomb",
            "ja": "ブラックボム"
        },
        "description": {
            "en": "Thrw shel\n3sqr fwd.\nFire attk",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "BFO",
        "mb": 32,
        "version": null,
        "stars": 4,
        "damage": 250,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "AquaNdl1",
            "ja": "アクアニードル1"
        },
        "description": {
            "en": "Target 3\nneedles\nat enemy!",
            "ja": "てきをねらって\n3本のニードルが\nとんでいく！"
        },
        "element": "aqua",
        "codes": "CJP",
        "mb": 31,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "AquaNdl2",
            "ja": "アクアニードル2"
        },
        "description": {
            "en": "Target 3\nneedles\nat enemy!",
            "ja": "てきをねらって\n3本のニードルが\nとんでいく！"
        },
        "element": "aqua",
        "codes": "FKT",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "AquaNdl3",
            "ja": "アクアニードル3"
        },
        "description": {
            "en": "Target 3\nneedles\nat enemy!",
            "ja": "てきをねらって\n3本のニードルが\nとんでいく！"
        },
        "element": "aqua",
        "codes": "ALU",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "CornSht1",
            "ja": "コーンショット1"
        },
        "description": {
            "en": "Damages\nenemies\nw/corn.",
            "ja": "ヒットしたとき､\nおくにてきがいると\nゆうばくしていく！"
        },
        "element": "wood",
        "codes": "JKL",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "CornSht2",
            "ja": "コーンショット2"
        },
        "description": {
            "en": "Damages\nenemies\nw/corn.",
            "ja": "ヒットしたとき､\nおくにてきがいると\nゆうばくしていく！"
        },
        "element": "wood",
        "codes": "CDE",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "CornSht3",
            "ja": "コーンショット3"
        },
        "description": {
            "en": "Damages\nenemies\nw/corn.",
            "ja": "ヒットしたとき､\nおくにてきがいると\nゆうばくしていく！"
        },
        "element": "wood",
        "codes": "PQR",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "BugBomb",
            "ja": "バグボム"
        },
        "description": {
            "en": "Throws a\nBugBomb\n3sq ahead",
            "ja": "あいてをバグらせる\nバグボムを3マス前\nになげつける"
        },
        "element": "null",
        "codes": "GSV",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "GrasSeed",
            "ja": "クサムラシード"
        },
        "description": {
            "en": "Makes 9sq\nmeadow\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nクサムラにする！"
        },
        "element": "wood",
        "codes": "AFS*",
        "mb": 19,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "IceSeed",
            "ja": "アイスシード"
        },
        "description": {
            "en": "Makes 9sq\nice field\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nこおりにする！"
        },
        "element": "aqua",
        "codes": "ALR*",
        "mb": 31,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "PoisSeed",
            "ja": "ポイズンシード"
        },
        "description": {
            "en": "Makes 9sq\npoisn swp\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nどくぬまにする！"
        },
        "element": "null",
        "codes": "HNP*",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 1",
            "ja": "目の前のてきを\nきりつける！\n攻撃はんいは1マス"
        },
        "element": "sword",
        "codes": "HLS*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "HLS*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "HLS*",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "WideBlde",
            "ja": "ワイドブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "BRW",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "LongBlde",
            "ja": "ロングブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "BMV",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "FireSwrd",
            "ja": "フレイムソード"
        },
        "description": {
            "en": "Cut enmy\n3sq fwrd\nw/fire!",
            "ja": "目の前のたて3マス\nをきりつける\n炎のソード！"
        },
        "element": "fire",
        "codes": "FOZ",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "AquaSwrd",
            "ja": "アクアソード"
        },
        "description": {
            "en": "Cut enmy\n3sq fwrd\nw/aqua!",
            "ja": "目の前のたて3マス\nをきりつける\n水のソード！"
        },
        "element": "aqua",
        "codes": "AIY",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "ElecSwrd",
            "ja": "エレキソード"
        },
        "description": {
            "en": "Cut enmy\n3sq fwrd\nw/elec!",
            "ja": "目の前のたて3マス\nをきりつける\n電気のソード！"
        },
        "element": "elec",
        "codes": "EKN",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "BambSwrd",
            "ja": "バンブーソード"
        },
        "description": {
            "en": "Cut enmy\n3sq fwrd\nw/wood!",
            "ja": "目の前のたて3マス\nをきりつける\n木のソード！"
        },
        "element": "wood",
        "codes": "HSW",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "WindRack",
            "ja": "フウジンラケット"
        },
        "description": {
            "en": "Blow enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\n風でふきとばす！\nはんいはたて3マス"
        },
        "element": "wind",
        "codes": "FJR*",
        "mb": 19,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 80,
        "name": {
            "en": "StepSwrd",
            "ja": "フミコミザン"
        },
        "description": {
            "en": "Use\nWideSwrd\n2sq ahead",
            "ja": "2マス前方に\nふみこんで\nワイドソード攻撃！"
        },
        "element": "sword",
        "codes": "BLP",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "VarSwrd",
            "ja": "バリアブルソード"
        },
        "description": {
            "en": "A magical\nshifting\nsword.",
            "ja": "へんげんじざいの\nテクニカルソード"
        },
        "element": "sword",
        "codes": "KVW",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "NeoVari",
            "ja": "ネオバリアブル"
        },
        "description": {
            "en": "A magical\nshifting\nsword.",
            "ja": "へんげんじざいの\nテクニカルソード\nじょうきゅうへん"
        },
        "element": "sword",
        "codes": "N",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "MoonBld",
            "ja": "エンゲツクナイ"
        },
        "description": {
            "en": "Slices\nenemies\naround",
            "ja": "じぶんのまわりに\nかいてんぎり！\nふかいきずをおわす"
        },
        "element": "sword",
        "codes": "AMT",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "Muramasa",
            "ja": "ムラマサブレード"
        },
        "description": {
            "en": "Atk power\nequal amt\nof lostHP",
            "ja": "へっているHP分が\n攻撃力になる\nのろいのカタナ！"
        },
        "element": "sword",
        "codes": "M",
        "mb": 77,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "MchnSwrd",
            "ja": "マシーンソード"
        },
        "description": {
            "en": "Search &\nhit stund\nenemies.",
            "ja": "マヒしているてきを\nサーチしてどこから\nでもきりつける！"
        },
        "element": "null",
        "codes": "HLQ",
        "mb": 37,
        "version": null,
        "stars": 1,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "ElemSwrd",
            "ja": "エレメントソード"
        },
        "description": {
            "en": "Cut enmy\non grass,\nice, fire",
            "ja": "くさむら､こおり､\n火口パネルのうえに\nいるてきをきる！"
        },
        "element": "null",
        "codes": "JMU",
        "mb": 43,
        "version": null,
        "stars": 2,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "AssnSwrd",
            "ja": "アサシンソード"
        },
        "description": {
            "en": "When plyz\ncut enemy\nspec panl",
            "ja": "マヒ中か､くさむら\nこおり､火口パネル\nにいるてきをきる！"
        },
        "element": "null",
        "codes": "NRY",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "CrakShot",
            "ja": "クラックシュート"
        },
        "description": {
            "en": "Shoot a\npanel at\nan enemy!",
            "ja": "目の前のパネルを\n前方へふっとばして\n攻撃する！"
        },
        "element": "null",
        "codes": "AGT*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "DublShot",
            "ja": "ダブルシュート"
        },
        "description": {
            "en": "Shoot 2\npanels at\nan enemy!",
            "ja": "目の前のよこ2マス\nのパネルを 前方へ\nふっとばして攻撃！"
        },
        "element": "null",
        "codes": "CRU*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "TrplShot",
            "ja": "トリプルシュート"
        },
        "description": {
            "en": "Shoot 3\npanels at\nan enemy!",
            "ja": "目の前のたて3マス\nのパネルを 前方へ\nふっとばして攻撃！"
        },
        "element": "null",
        "codes": "JLV*",
        "mb": 12,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "WaveArm1",
            "ja": "ウェーブアーム1"
        },
        "description": {
            "en": "Fllw enmy\nand fire\ntrap wave",
            "ja": "てきをついびして\n1回だけまがれる\nウェーブをはなつ！"
        },
        "element": "null",
        "codes": "EFG",
        "mb": 15,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "WaveArm2",
            "ja": "ウェーブアーム2"
        },
        "description": {
            "en": "Fllw enmy\nand fire\ntrap wave",
            "ja": "てきをついびして\n1回だけまがれる\nウェーブをはなつ！"
        },
        "element": "null",
        "codes": "LMN",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "WaveArm3",
            "ja": "ウェーブアーム3"
        },
        "description": {
            "en": "Fllw enmy\nand fire\ntrap wave",
            "ja": "てきをついびして\n1回だけまがれる\nウェーブをはなつ！"
        },
        "element": "null",
        "codes": "RST",
        "mb": 29,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "AuraHed1",
            "ja": "オーラヘッド1"
        },
        "description": {
            "en": "A flying\nhead with\n2spc tail",
            "ja": "よこ2マスのながさ\nをもつオーラヘッド\nを前方へはっしゃ！"
        },
        "element": "break",
        "codes": "BCD",
        "mb": 25,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "AuraHed2",
            "ja": "オーラヘッド2"
        },
        "description": {
            "en": "A flying\nhead with\n2spc tail",
            "ja": "よこ2マスのながさ\nをもつオーラヘッド\nを前方へはっしゃ！"
        },
        "element": "break",
        "codes": "DEF",
        "mb": 33,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "AuraHed3",
            "ja": "オーラヘッド3"
        },
        "description": {
            "en": "A flying\nhead with\n2spc tail",
            "ja": "よこ2マスのながさ\nをもつオーラヘッド\nを前方へはっしゃ！"
        },
        "element": "break",
        "codes": "FGH",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "LilBolr1",
            "ja": "リトルボイラー1"
        },
        "description": {
            "en": "3pnl fwd\nKttl attk\nAttack+",
            "ja": "3マス前にヤカーン\n攻撃をあてるたびに\n攻撃力がアップする"
        },
        "element": "obstacle",
        "codes": "FKL",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "LilBolr2",
            "ja": "リトルボイラー2"
        },
        "description": {
            "en": "3pnl fwd\nKttl attk\nAttack+",
            "ja": "3マス前にヤカーン\n攻撃をあてるたびに\n攻撃力がアップする"
        },
        "element": "obstacle",
        "codes": "EMV",
        "mb": 23,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "LilBolr3",
            "ja": "リトルボイラー3"
        },
        "description": {
            "en": "3pnl fwd\nKttl attk\nAttack+",
            "ja": "3マス前にヤカーン\n攻撃をあてるたびに\n攻撃力がアップする"
        },
        "element": "obstacle",
        "codes": "GSZ",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "SandWrm1",
            "ja": "サンドワーム1"
        },
        "description": {
            "en": "Attk enmy\nfrom rear\nw/snakarm",
            "ja": "てきのはいごから\nスナームがあらわれ\nたいあたり攻撃！"
        },
        "element": "null",
        "codes": "AGL",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "SandWrm2",
            "ja": "サンドワーム2"
        },
        "description": {
            "en": "Attk enmy\nfrom rear\nw/snakarm",
            "ja": "てきのはいごから\nスナームがあらわれ\nたいあたり攻撃！"
        },
        "element": "null",
        "codes": "BRY",
        "mb": 34,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "SandWrm3",
            "ja": "サンドワーム3"
        },
        "description": {
            "en": "Attk enmy\nfrom rear\nw/snakarm",
            "ja": "てきのはいごから\nスナームがあらわれ\nたいあたり攻撃！"
        },
        "element": "null",
        "codes": "HJS",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "AirRaid1",
            "ja": "エアレイド1"
        },
        "description": {
            "en": "Attk enmy\nw/flying\nFgtrPlne.",
            "ja": "ゼロプレーンを\n目の前におき\nてきを攻撃する"
        },
        "element": "obstacle",
        "codes": "GKR",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "AirRaid2",
            "ja": "エアレイド2"
        },
        "description": {
            "en": "Attk enmy\nw/flying\nFgtrPlne.",
            "ja": "ゼロプレーンを\n目の前におき\nてきを攻撃する"
        },
        "element": "obstacle",
        "codes": "OTY",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "AirRaid3",
            "ja": "エアレイド3"
        },
        "description": {
            "en": "Attk enmy\nw/flying\nFgtrPlne.",
            "ja": "ゼロプレーンを\n目の前におき\nてきを攻撃する"
        },
        "element": "obstacle",
        "codes": "NUZ",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "FireHit1",
            "ja": "ファイアパンチ1"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "DEF",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "FireHit2",
            "ja": "ファイアパンチ2"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "RST",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "FireHit3",
            "ja": "ファイアパンチ3"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "ABC",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "BurnSqr1",
            "ja": "バーンスクエア1"
        },
        "description": {
            "en": "Press 🅐\nto burn a\n4pnl sqr!",
            "ja": "4マス四方の\nサイトをAボタンで\nとめて 炎攻撃！"
        },
        "element": "fire",
        "codes": "HPV",
        "mb": 24,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "BurnSqr2",
            "ja": "バーンスクエア2"
        },
        "description": {
            "en": "Press 🅐\nto burn a\n4pnl sqr!",
            "ja": "4マス四方の\nサイトをAボタンで\nとめて 炎攻撃！"
        },
        "element": "fire",
        "codes": "DMT",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "BurnSqr3",
            "ja": "バーンスクエア3"
        },
        "description": {
            "en": "Press 🅐\nto burn a\n4pnl sqr!",
            "ja": "4マス四方の\nサイトをAボタンで\nとめて 炎攻撃！"
        },
        "element": "fire",
        "codes": "EOZ",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 116,
        "name": {
            "en": "Sensor1",
            "ja": "キラーセンサー1"
        },
        "description": {
            "en": "Hits enmy\nwith beam\nfrom snsr",
            "ja": "キラーズアイをおく\nセンサーにてきが\nかかるとビーム攻撃"
        },
        "element": "elec",
        "codes": "JOW",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "Sensor2",
            "ja": "キラーセンサー2"
        },
        "description": {
            "en": "Hits enmy\nwith beam\nfrom snsr",
            "ja": "キラーズアイをおく\nセンサーにてきが\nかかるとビーム攻撃"
        },
        "element": "elec",
        "codes": "NUY",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "Sensor3",
            "ja": "キラーセンサー3"
        },
        "description": {
            "en": "Hits enmy\nwith beam\nfrom snsr",
            "ja": "キラーズアイをおく\nセンサーにてきが\nかかるとビーム攻撃"
        },
        "element": "elec",
        "codes": "IKQ",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "Boomer",
            "ja": "ブーメラン"
        },
        "description": {
            "en": "Boomerang\nthat circ\nbtl field",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "JKT",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
        "name": {
            "en": "HiBoomer",
            "ja": "ハイブーメラン"
        },
        "description": {
            "en": "Boomerang\nthat circ\nbtl field",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "BLV",
        "mb": 26,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
        "name": {
            "en": "M-Boomer",
            "ja": "メガブーメラン"
        },
        "description": {
            "en": "Boomerang\nthat circ\nbtl field",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "IMW",
        "mb": 36,
        "version": null,
        "stars": 4,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 122,
        "name": {
            "en": "Lance",
            "ja": "バンブーランス"
        },
        "description": {
            "en": "Lance\nthrough\nback line",
            "ja": "てきエリアの右はし\nたてれつにとつぜん\nたけやりが発生！"
        },
        "element": "wood",
        "codes": "ARW*",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "GolmHit1",
            "ja": "ゴーレムパンチ1"
        },
        "description": {
            "en": "Hit 3panl\narea arnd\nclst enmy",
            "ja": "いちばんちかくの\nてきのエリアマスに\nたて3マスのパンチ"
        },
        "element": "break",
        "codes": "IKY",
        "mb": 17,
        "version": null,
        "stars": 1,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "GolmHit2",
            "ja": "ゴーレムパンチ2"
        },
        "description": {
            "en": "Hit 3panl\narea arnd\nclst enmy",
            "ja": "いちばんちかくの\nてきのエリアマスに\nたて3マスのパンチ"
        },
        "element": "break",
        "codes": "DPU",
        "mb": 27,
        "version": null,
        "stars": 2,
        "damage": 190,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "GolmHit3",
            "ja": "ゴーレムパンチ3"
        },
        "description": {
            "en": "Hit 3panl\narea arnd\nclst enmy",
            "ja": "いちばんちかくの\nてきのエリアマスに\nたて3マスのパンチ"
        },
        "element": "break",
        "codes": "HMV",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": 250,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "IronShl1",
            "ja": "アイアンシェル1"
        },
        "description": {
            "en": "Fire off\npiercing\nshell.",
            "ja": "かんつうするこうら\nを前方へはっしゃ！\n画面はしで2ヒット"
        },
        "element": "break",
        "codes": "JKL",
        "mb": 13,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "IronShl2",
            "ja": "アイアンシェル2"
        },
        "description": {
            "en": "Fire off\npiercing\nshell.",
            "ja": "かんつうするこうら\nを前方へはっしゃ！\n画面はしで2ヒット"
        },
        "element": "break",
        "codes": "CDE",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "IronShl3",
            "ja": "アイアンシェル3"
        },
        "description": {
            "en": "Fire off\npiercing\nshell.",
            "ja": "かんつうするこうら\nを前方へはっしゃ！\n画面はしで2ヒット"
        },
        "element": "break",
        "codes": "LMN",
        "mb": 27,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "AirSpin1",
            "ja": "エアホイール1"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "FGR",
        "mb": 22,
        "version": null,
        "stars": 2,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "AirSpin2",
            "ja": "エアホイール2"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "ALT",
        "mb": 29,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "AirSpin3",
            "ja": "エアホイール3"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "NOT",
        "mb": 36,
        "version": null,
        "stars": 4,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "Wind",
            "ja": "トップウ"
        },
        "description": {
            "en": "WindBox\nblows at\nenmy area",
            "ja": "ウインドボックスを\nおき てきエリアに\n風をふかせる"
        },
        "element": "wind",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "Fan",
            "ja": "スイコミ"
        },
        "description": {
            "en": "VacuumFn\npulls\nenemy in",
            "ja": "バキュームファンを\nおき 風でてきを\nすいよせる"
        },
        "element": "wind",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "Rflectr1",
            "ja": "リフレクメット1"
        },
        "description": {
            "en": "Bounce an\nattk back\nat them!",
            "ja": "てきの攻撃をガード\nして しょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "ACP*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "Rflectr2",
            "ja": "リフレクメット2"
        },
        "description": {
            "en": "Bounce an\nattk back\nat them!",
            "ja": "てきの攻撃をガード\nして しょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "BGY*",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "Rflectr3",
            "ja": "リフレクメット3"
        },
        "description": {
            "en": "Bounce an\nattk back\nat them!",
            "ja": "てきの攻撃をガード\nして しょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "EFO*",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "Snake",
            "ja": "カモンスネーク"
        },
        "description": {
            "en": "Call snke\nfrom hole\nin area.",
            "ja": "じぶんのエリアの\nあなマスから\nヘビがとんでいく！"
        },
        "element": "null",
        "codes": "HLM",
        "mb": 34,
        "version": null,
        "stars": 4,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "SumnBlk1",
            "ja": "サモンブラック1"
        },
        "description": {
            "en": "Summon a\nNghtmare\nattack!",
            "ja": "目の前のあなから\nナイトメアをよび\nちかくのてきをきる"
        },
        "element": "null",
        "codes": "EIP",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "SumnBlk2",
            "ja": "サモンブラック2"
        },
        "description": {
            "en": "Summon a\nNghtmare\nattack!",
            "ja": "目の前のあなから\nナイトメアをよび\nちかくのてきをきる"
        },
        "element": "null",
        "codes": "HOV",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "SumnBlk3",
            "ja": "サモンブラック3"
        },
        "description": {
            "en": "Summon a\nNghtmare\nattack!",
            "ja": "目の前のあなから\nナイトメアをよび\nちかくのてきをきる"
        },
        "element": "null",
        "codes": "WYZ",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 260,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "NumbrBl",
            "ja": "ナンバーボール"
        },
        "description": {
            "en": "Last 2\nHP digits\n= atk pwr",
            "ja": "HPの下2ケタが\n攻撃力になるボール\nを前方にハッシャ！"
        },
        "element": "null",
        "codes": "N",
        "mb": 69,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "Meteors",
            "ja": "リュウセイグン"
        },
        "description": {
            "en": "Drop many\nmeteor on\nenmy area",
            "ja": "あいてエリアに\nむすうのリュウセイ\nがふりそそぐ！"
        },
        "element": "fire",
        "codes": "R",
        "mb": 73,
        "version": null,
        "stars": 5,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "JustcOne",
            "ja": "ジャスティスワン"
        },
        "description": {
            "en": "Fist Atk\non center\npanel",
            "ja": "左から5れつめ\nまん中のマスに\nせいぎのコブシ！"
        },
        "element": "break",
        "codes": "J",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 220,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "Magnum",
            "ja": "マグナム"
        },
        "description": {
            "en": "Cursor\ndestroys\npanels!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "cursor",
        "codes": "FLW",
        "mb": 31,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "CircGun",
            "ja": "サークルガン"
        },
        "description": {
            "en": "Stop sght\nw/Button\nand attck",
            "ja": "まわるサイトを\nボタンでとめて\nショット攻撃！"
        },
        "element": "cursor",
        "codes": "PTV",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "RockCube",
            "ja": "ストーンキューブ"
        },
        "description": {
            "en": "Place a\nRockCube\nin front",
            "ja": "目の前のマスに\nストーンキューブを\n発生させる"
        },
        "element": "obstacle",
        "codes": "*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "TimeBom1",
            "ja": "カウントボム1"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "FGH",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
        "name": {
            "en": "Mine",
            "ja": "ステルスマイン"
        },
        "description": {
            "en": "Place a\nmine in\nenmy area",
            "ja": "てきエリアのどこか\nに見えないじらいを\nセットする！"
        },
        "element": "obstacle",
        "codes": "AST",
        "mb": 28,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 149,
        "name": {
            "en": "Fanfare",
            "ja": "オウエンカ"
        },
        "description": {
            "en": "Take no\ndmage for\na while",
            "ja": "ララパッパをおく\nえんそうちゅう\n自分がむてきに！"
        },
        "element": "obstacle",
        "codes": "PSZ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "Discord",
            "ja": "ディスコード"
        },
        "description": {
            "en": "Confuses\nenemies\nw/music",
            "ja": "ララチューバをおく\nえんそうちゅう\nあいてがこんらん！"
        },
        "element": "obstacle",
        "codes": "AGS*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 151,
        "name": {
            "en": "Timpani",
            "ja": "ティンパニー"
        },
        "description": {
            "en": "Stop enmy\nfeet with\nmusic",
            "ja": "ララボーンをおく\nえんそうちゅう\nじしんであしどめ！"
        },
        "element": "obstacle",
        "codes": "IOT*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 152,
        "name": {
            "en": "Silence",
            "ja": "サイレンス"
        },
        "description": {
            "en": "Blinds\nenemies\nw/music",
            "ja": "ララミュートをおく\nえんそうちゅう\nあいてはもうもくに"
        },
        "element": "obstacle",
        "codes": "BRW*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 153,
        "name": {
            "en": "VDoll",
            "ja": "ワラニンギョウ"
        },
        "description": {
            "en": "Throws\nVDoll\n3sq ahead",
            "ja": "おそろしいノロイの\nワラニンギョウを\n3マス前方になげる"
        },
        "element": "obstacle",
        "codes": "FNS*",
        "mb": 39,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 154,
        "name": {
            "en": "Guardian",
            "ja": "オジゾウサン"
        },
        "description": {
            "en": "Statue\npunishes\nwhen hit",
            "ja": "目の前のマスに\nこわしてはいけない\nオジゾウサンをおく"
        },
        "element": "obstacle",
        "codes": "O",
        "mb": 64,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 155,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "Anubis\npoisons\nenemies",
            "ja": "目の前のマスに\nどくを発生させる\nアヌビスぞうをおく"
        },
        "element": "obstacle",
        "codes": "P",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "secret",
        "index": 2,
        "name": {
            "en": "Otenko",
            "ja": "オテンコサマ"
        },
        "description": {
            "en": "Put Otnko\nto raise\natk pwr",
            "ja": "目の前に攻撃力を\nじょうしょうさせる\nオテンコサマをおく"
        },
        "element": "obstacle",
        "codes": "O",
        "mb": 66,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 156,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recovers\n10HP",
            "ja": "HPを10\nかいふくする"
        },
        "element": "null",
        "codes": "ADL*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 157,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recovers\n30HP",
            "ja": "HPを30\nかいふくする"
        },
        "element": "null",
        "codes": "ELQ*",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 158,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recovers\n50HP",
            "ja": "HPを50\nかいふくする"
        },
        "element": "null",
        "codes": "CMP*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 159,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recovers\n80HP",
            "ja": "HPを80\nかいふくする"
        },
        "element": "null",
        "codes": "HKV*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 160,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recovers\n120HP",
            "ja": "HPを120\nかいふくする"
        },
        "element": "null",
        "codes": "FPS",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 161,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recovers\n150HP",
            "ja": "HPを150\nかいふくする"
        },
        "element": "null",
        "codes": "JMT",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 162,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recovers\n200HP",
            "ja": "HPを200\nかいふくする"
        },
        "element": "null",
        "codes": "IQZ",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 163,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recovers\n300HP",
            "ja": "HPを300\nかいふくする"
        },
        "element": "null",
        "codes": "JOY",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 164,
        "name": {
            "en": "PanlGrab",
            "ja": "パネルスチール"
        },
        "description": {
            "en": "Steals 1\nenemy\nsquare!",
            "ja": "前方のてきエリアの\n1マスを 自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 165,
        "name": {
            "en": "AreaGrab",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steals\nleft edge\nfrom enmy",
            "ja": "てきエリアの左はし\nたて1れつを自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "BFS*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 166,
        "name": {
            "en": "GrabBnsh",
            "ja": "スチールパニシュ"
        },
        "description": {
            "en": "20 damage\nfor every\nstolen sq",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\n20のダメージ！"
        },
        "element": "null",
        "codes": "BMS",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 167,
        "name": {
            "en": "GrabRvng",
            "ja": "スチールリベンジ"
        },
        "description": {
            "en": "40 damage\nfor every\nstolen sq",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\n40のダメージ！"
        },
        "element": "null",
        "codes": "IQZ",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 168,
        "name": {
            "en": "PnlRetrn",
            "ja": "パネルリターン"
        },
        "description": {
            "en": "Fix your\narea's\npanels",
            "ja": "自分のエリアの\nパネルをノーマルに\nもどす！"
        },
        "element": "null",
        "codes": "*",
        "mb": 14,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 169,
        "name": {
            "en": "Geddon",
            "ja": "デスマッチ"
        },
        "description": {
            "en": "Breaks\nall empty\npanels",
            "ja": "あいているマスが\nすべてこわれる！"
        },
        "element": "null",
        "codes": "ALR*",
        "mb": 47,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 170,
        "name": {
            "en": "HolyPanl",
            "ja": "ホーリーパネル"
        },
        "description": {
            "en": "Creates a\nHolyPanl\nin front",
            "ja": "目の前のパネルを\nダメージはんげんの\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "ABS*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 171,
        "name": {
            "en": "Snctuary",
            "ja": "サンクチュアリ"
        },
        "description": {
            "en": "Chng all\nown panel\nto holy",
            "ja": "自分のエリアの\nすべてのマスを\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "Z",
        "mb": 62,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 172,
        "name": {
            "en": "ComingRd",
            "ja": "カミングロード"
        },
        "description": {
            "en": "Pull an\nenemy to\nthe front",
            "ja": "前方いちれつの\nてきエリアマスを\n左むきやじるしに"
        },
        "element": "null",
        "codes": "*",
        "mb": 21,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 173,
        "name": {
            "en": "GoingRd",
            "ja": "ゴーイングロード"
        },
        "description": {
            "en": "Push an\nenemy to\nthe back",
            "ja": "前方いちれつの\nてきエリアマスを\n右むきやじるしに"
        },
        "element": "null",
        "codes": "*",
        "mb": 21,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 174,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "CustGauge\nslow-down",
            "ja": "カスタムゲージの\nスピードがおちる"
        },
        "element": "null",
        "codes": "ABG*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 175,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "CustGauge\nspeed-up",
            "ja": "カスタムゲージの\nスピードがあがる"
        },
        "element": "null",
        "codes": "EMR*",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 176,
        "name": {
            "en": "FullCust",
            "ja": "フルカスタム"
        },
        "description": {
            "en": "CustGauge\ninstantly\nrefills",
            "ja": "カスタムゲージが\nいっしゅんで\nマンタンになる！"
        },
        "element": "null",
        "codes": "*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 177,
        "name": {
            "en": "BusterUp",
            "ja": "バスターアップ"
        },
        "description": {
            "en": "Power\ngoes up\nby 1",
            "ja": "そのバトル中\nバスターの攻撃力を\n1アップさせる！"
        },
        "element": "plus",
        "codes": "*",
        "mb": 11,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 178,
        "name": {
            "en": "BugFix",
            "ja": "バグシュウセイ"
        },
        "description": {
            "en": "Repairs &\nremoves\nbugs",
            "ja": "ナビに発生している\nバグをしゅうせいし\nとりのぞく"
        },
        "element": "null",
        "codes": "KPZ*",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 179,
        "name": {
            "en": "Invisibl",
            "ja": "インビジブル"
        },
        "description": {
            "en": "Invisible\nfor a\nwhile",
            "ja": "少しの間とうめいに\nなって ほとんどの\n攻撃にあたらない"
        },
        "element": "null",
        "codes": "*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 180,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullifies\n10 HP of\ndamage",
            "ja": "バリアをはり\n10HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "AFR*",
        "mb": 7,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 181,
        "name": {
            "en": "Barr100",
            "ja": "バリア100"
        },
        "description": {
            "en": "Nullifies\n100 HP of\ndamage",
            "ja": "バリアをはり\n100HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "HOY",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 182,
        "name": {
            "en": "Barr200",
            "ja": "バリア200"
        },
        "description": {
            "en": "Nullifies\n200 HP of\ndamage",
            "ja": "バリアをはり\n200HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "KUW",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 183,
        "name": {
            "en": "BblWrap",
            "ja": "バブルラップ"
        },
        "description": {
            "en": "Weak\nagainst\nelec atk",
            "ja": "はがれても また\nふっかつするバリア\n電気攻撃にはよわい"
        },
        "element": "aqua",
        "codes": "IQZ",
        "mb": 58,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 184,
        "name": {
            "en": "LifeAur",
            "ja": "ドリームオーラ"
        },
        "description": {
            "en": "Repel all\nattacks\nunder200",
            "ja": "攻撃力が200より\nひくい攻撃を\nむこうかするオーラ"
        },
        "element": "null",
        "codes": "U",
        "mb": 70,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 185,
        "name": {
            "en": "MagCoil",
            "ja": "マグネコイル"
        },
        "description": {
            "en": "Draw in\nenmy with\nmag force",
            "ja": "よこ3マス分の\nじりょくが上下の\nてきをすいよせる"
        },
        "element": "null",
        "codes": "*",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 192,
        "name": {
            "en": "WhiCapsl",
            "ja": "ホワイトカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nParalyze",
            "ja": "1つ前にえらんだ\n攻撃チップに\nマヒこうかをつける"
        },
        "element": "null",
        "codes": "*",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 193,
        "name": {
            "en": "Uninstll",
            "ja": "アンインストール"
        },
        "description": {
            "en": "Attach to\nNoDim Chp\nNavCusOff",
            "ja": "あんてんしない攻撃\nチップにつけると\nナビカスオフこうか"
        },
        "element": "null",
        "codes": "GLR",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 188,
        "name": {
            "en": "AntiNavi",
            "ja": "ナビスカウト"
        },
        "description": {
            "en": "Takes the\nenemy's\nNavi away",
            "ja": "てきにワナをはる\nよびだしたナビを\nねがえらせる"
        },
        "element": "null",
        "codes": "FLT*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 189,
        "name": {
            "en": "AntiDmg",
            "ja": "カワリミ"
        },
        "description": {
            "en": "Sets trap\nand throw\nstars",
            "ja": "てきにワナをはる\n攻撃にあたると\nしゅりけん攻撃！"
        },
        "element": "null",
        "codes": "GRV*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 190,
        "name": {
            "en": "AntiSwrd",
            "ja": "シラハドリ"
        },
        "description": {
            "en": "Retaliate\nfor sword\ndamage",
            "ja": "てきにワナをはる\nソード攻撃をうけ\nながしてはんげき！"
        },
        "element": "sword",
        "codes": "ARZ*",
        "mb": 33,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 191,
        "name": {
            "en": "AntiRecv",
            "ja": "バッドメディスン"
        },
        "description": {
            "en": "Damages\nenemy in\nrecovery",
            "ja": "てきにワナをはる\nてきのリカバリーが\nぎゃくにダメージに"
        },
        "element": "null",
        "codes": "AFV*",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 194,
        "name": {
            "en": "CopyDmg",
            "ja": "コピーダメージ"
        },
        "description": {
            "en": "Duplicate\ndamage to\n2nd enemy",
            "ja": "カーソルのあいてに\nほかのてきがうけた\nダメージをコピー！"
        },
        "element": "cursor",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 195,
        "name": {
            "en": "LifeSync",
            "ja": "ライフシンクロ"
        },
        "description": {
            "en": "Makes HP\nsame as\nenemy",
            "ja": "2マス前のてきに\nカーソル！てきの\nHPをおなじにする"
        },
        "element": "cursor",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 196,
        "name": {
            "en": "Atk+10",
            "ja": "アタック+10"
        },
        "description": {
            "en": "+10 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+10できる"
        },
        "element": "plus",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 198,
        "name": {
            "en": "Navi+20",
            "ja": "ナビ+20"
        },
        "description": {
            "en": "+20 for\nselected\nNavi chip",
            "ja": "ナビチップの\nあとにえらぶと\n攻撃力を+20！"
        },
        "element": "plus",
        "codes": "*",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 199,
        "name": {
            "en": "ColorPt",
            "ja": "カラーポイント"
        },
        "description": {
            "en": "+10 for\nnext chip\nattack",
            "ja": "自エリアをぎせいに\nしてつぎのチップの\n攻撃力を+10ずつ"
        },
        "element": "plus",
        "codes": "*",
        "mb": 31,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 197,
        "name": {
            "en": "Atk+30",
            "ja": "アタック+30"
        },
        "description": {
            "en": "+30 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+30できる"
        },
        "element": "plus",
        "codes": "*",
        "mb": 66,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 200,
        "name": {
            "en": "DblPoint",
            "ja": "ダブルポイント"
        },
        "description": {
            "en": "+20 for\nnext chip\nattack",
            "ja": "自エリアをぎせいに\nしてつぎのチップの\n攻撃力を+20ずつ"
        },
        "element": "plus",
        "codes": "*",
        "mb": 50,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 187,
        "name": {
            "en": "ElemTrap",
            "ja": "エレメントラップ"
        },
        "description": {
            "en": "Trap enmy\nand attk\nwith elem",
            "ja": "てきにワナをはる\nあいてが属性攻撃を\nつかうとはつどう！"
        },
        "element": "null",
        "codes": "GSU*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 186,
        "name": {
            "en": "ColArmy",
            "ja": "カーネルアーミー"
        },
        "description": {
            "en": "Launch an\nattk with\nCol. army",
            "ja": "しょうがいぶつから\nカーネルアーミーが\nあらわれて攻撃する"
        },
        "element": "null",
        "codes": "BGR*",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "BlzrdBal",
            "ja": "ブリザードボール"
        },
        "description": {
            "en": "Launch a\ngiant\nsnowball",
            "ja": "ものをまきこんで\n大きくなるユキダマ\nを前方へはっしゃ！"
        },
        "element": "aqua",
        "codes": "HNT",
        "mb": 39,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "TimeBom2",
            "ja": "カウントボム2"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "CDE",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 190,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "TimeBom3",
            "ja": "カウントボム3"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "LMN",
        "mb": 37,
        "version": null,
        "stars": 4,
        "damage": 230,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "BigBomb",
            "ja": "ビッグボム"
        },
        "description": {
            "en": "Throw a 9\npanl bomb\n3panl fwd",
            "ja": "ばくふうが9マスに\nひろがるボムを\n3マス前になげる！"
        },
        "element": "null",
        "codes": "OPV",
        "mb": 32,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "standard"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "mega",
        "index": 1,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Attacks\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R*",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 2,
        "name": {
            "en": "Roll2",
            "ja": "ロールV2"
        },
        "description": {
            "en": "Attacks\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 3,
        "name": {
            "en": "Roll3",
            "ja": "ロールV3"
        },
        "description": {
            "en": "Attacks\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "null",
        "codes": "R",
        "mb": 60,
        "version": null,
        "stars": 5,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 4,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Move in\nand slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B*",
        "mb": 41,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 5,
        "name": {
            "en": "ProtoMnEX",
            "ja": "ブルースEX"
        },
        "description": {
            "en": "Move in\nand slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 53,
        "version": null,
        "stars": 4,
        "damage": 170,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 6,
        "name": {
            "en": "ProtoMnSP",
            "ja": "ブルースSP"
        },
        "description": {
            "en": "Move in\nand slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 68,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 7,
        "name": {
            "en": "HeatMan",
            "ja": "ヒートマン"
        },
        "description": {
            "en": "Burn with\na radial\nfire attk",
            "ja": "前方たて3れつに\nほうしゃじょうに\nひろがる炎攻撃！"
        },
        "element": "fire",
        "codes": "H*",
        "mb": 32,
        "version": "gregar",
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 8,
        "name": {
            "en": "HeatManEX",
            "ja": "ヒートマンEX"
        },
        "description": {
            "en": "Burn with\na radial\nfire attk",
            "ja": "前方たて3れつに\nほうしゃじょうに\nひろがる炎攻撃！"
        },
        "element": "fire",
        "codes": "H",
        "mb": 55,
        "version": "gregar",
        "stars": 4,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 9,
        "name": {
            "en": "HeatManSP",
            "ja": "ヒートマンSP"
        },
        "description": {
            "en": "Burn with\na radial\nfire attk",
            "ja": "前方たて3れつに\nほうしゃじょうに\nひろがる炎攻撃！"
        },
        "element": "fire",
        "codes": "H",
        "mb": 70,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 10,
        "name": {
            "en": "ElecMan",
            "ja": "エレキマン"
        },
        "description": {
            "en": "Attk your\nsurrndngs\nwith thdr",
            "ja": "じぶんのしゅうい\n2マスはんいに\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E*",
        "mb": 38,
        "version": "gregar",
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 11,
        "name": {
            "en": "ElecManEX",
            "ja": "エレキマンEX"
        },
        "description": {
            "en": "Attk your\nsurrndngs\nwith thdr",
            "ja": "じぶんのしゅうい\n2マスはんいに\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E",
        "mb": 52,
        "version": "gregar",
        "stars": 4,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 12,
        "name": {
            "en": "ElecManSP",
            "ja": "エレキマンSP"
        },
        "description": {
            "en": "Attk your\nsurrndngs\nwith thdr",
            "ja": "じぶんのしゅうい\n2マスはんいに\nらくらい攻撃！"
        },
        "element": "elec",
        "codes": "E",
        "mb": 79,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 13,
        "name": {
            "en": "SlashMan",
            "ja": "スラッシュマン"
        },
        "description": {
            "en": "Slash an\nenmy w/\nflyn knfe",
            "ja": "ナイフをなげつけ\nさらにちかくのてき\n1体をきりつける！"
        },
        "element": "sword",
        "codes": "S*",
        "mb": 42,
        "version": "gregar",
        "stars": 3,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 14,
        "name": {
            "en": "SlashMnEX",
            "ja": "スラッシュマンEX"
        },
        "description": {
            "en": "Slash an\nenmy w/\nflyn knfe",
            "ja": "ナイフをなげつけ\nさらにちかくのてき\n1体をきりつける！"
        },
        "element": "sword",
        "codes": "S",
        "mb": 65,
        "version": "gregar",
        "stars": 4,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 15,
        "name": {
            "en": "SlashMnSP",
            "ja": "スラッシュマンSP"
        },
        "description": {
            "en": "Slash an\nenmy w/\nflyn knfe",
            "ja": "ナイフをなげつけ\nさらにちかくのてき\n1体をきりつける！"
        },
        "element": "sword",
        "codes": "S",
        "mb": 79,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 16,
        "name": {
            "en": "EraseMan",
            "ja": "キラーマン"
        },
        "description": {
            "en": "Press 🅐\nfor 3panl\nbeam attk",
            "ja": "3方向にうごく\nサイトをAボタンで\nとめてビーム攻撃"
        },
        "element": "cursor",
        "codes": "K*",
        "mb": 51,
        "version": "gregar",
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 17,
        "name": {
            "en": "EraseMnEX",
            "ja": "キラーマンEX"
        },
        "description": {
            "en": "Press 🅐\nfor 3panl\nbeam attk",
            "ja": "3方向にうごく\nサイトをAボタンで\nとめてビーム攻撃"
        },
        "element": "cursor",
        "codes": "K",
        "mb": 65,
        "version": "gregar",
        "stars": 4,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 18,
        "name": {
            "en": "EraseMnSP",
            "ja": "キラーマンSP"
        },
        "description": {
            "en": "Press 🅐\nfor 3panl\nbeam attk",
            "ja": "3方向にうごく\nサイトをAボタンで\nとめてビーム攻撃"
        },
        "element": "cursor",
        "codes": "K",
        "mb": 79,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "ChrgeMan",
            "ja": "チャージマン"
        },
        "description": {
            "en": "Rush fwd!\nOpen panl\nhit TrCar",
            "ja": "前方へとっしん！\n後ろがあきマスだと\nかもつがついてくる"
        },
        "element": "null",
        "codes": "C*",
        "mb": 42,
        "version": "gregar",
        "stars": 3,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "ChrgeMnEX",
            "ja": "チャージマンEX"
        },
        "description": {
            "en": "Rush fwd!\nOpen panl\nhit TrCar",
            "ja": "前方へとっしん！\n後ろがあきマスだと\nかもつがついてくる"
        },
        "element": "null",
        "codes": "C",
        "mb": 63,
        "version": "gregar",
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "ChrgeMnSP",
            "ja": "チャージマンSP"
        },
        "description": {
            "en": "Rush fwd!\nOpen panl\nhit TrCar",
            "ja": "前方へとっしん！\n後ろがあきマスだと\nかもつがついてくる"
        },
        "element": "null",
        "codes": "C",
        "mb": 81,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 7,
        "name": {
            "en": "SpoutMan",
            "ja": "アクアマン"
        },
        "description": {
            "en": "Watr atk!\nBhnd 2row\npower-up",
            "ja": "2マス前に水攻撃\nうしろのたて2れつ\nだとパワーアップ"
        },
        "element": "aqua",
        "codes": "A*",
        "mb": 42,
        "version": "falzar",
        "stars": 3,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 8,
        "name": {
            "en": "SpoutMnEX",
            "ja": "アクアマンEX"
        },
        "description": {
            "en": "Watr atk!\nBhnd 2row\npower-up",
            "ja": "2マス前に水攻撃\nうしろのたて2れつ\nだとパワーアップ"
        },
        "element": "aqua",
        "codes": "A",
        "mb": 56,
        "version": "falzar",
        "stars": 4,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 9,
        "name": {
            "en": "SpoutMnSP",
            "ja": "アクアマンSP"
        },
        "description": {
            "en": "Watr atk!\nBhnd 2row\npower-up",
            "ja": "2マス前に水攻撃\nうしろのたて2れつ\nだとパワーアップ"
        },
        "element": "aqua",
        "codes": "A",
        "mb": 78,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 10,
        "name": {
            "en": "TmhkMan",
            "ja": "トマホークマン"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3の\nはんいをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T*",
        "mb": 40,
        "version": "falzar",
        "stars": 3,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 11,
        "name": {
            "en": "TmhkManEX",
            "ja": "トマホークマンEX"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3の\nはんいをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "mb": 60,
        "version": "falzar",
        "stars": 4,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 12,
        "name": {
            "en": "TmhkManSP",
            "ja": "トマホークマンSP"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3の\nはんいをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "mb": 80,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 13,
        "name": {
            "en": "TenguMan",
            "ja": "テングマン"
        },
        "description": {
            "en": "Attk 2row\nfrom air,\nthen side",
            "ja": "手前のよこ2れつを\nひこう攻撃したあと\nななめにも攻撃する"
        },
        "element": "wind",
        "codes": "T*",
        "mb": 43,
        "version": "falzar",
        "stars": 3,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 14,
        "name": {
            "en": "TenguMnEX",
            "ja": "テングマンEX"
        },
        "description": {
            "en": "Attk 2row\nfrom air,\nthen side",
            "ja": "手前のよこ2れつを\nひこう攻撃したあと\nななめにも攻撃する"
        },
        "element": "wind",
        "codes": "T",
        "mb": 61,
        "version": "falzar",
        "stars": 4,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 15,
        "name": {
            "en": "TenguMnSP",
            "ja": "テングマンSP"
        },
        "description": {
            "en": "Attk 2row\nfrom air,\nthen side",
            "ja": "手前のよこ2れつを\nひこう攻撃したあと\nななめにも攻撃する"
        },
        "element": "wind",
        "codes": "T",
        "mb": 74,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 16,
        "name": {
            "en": "GrndMan",
            "ja": "グランドマン"
        },
        "description": {
            "en": "Move fwrd\nthen attk\nw/drill",
            "ja": "前方へすすんでいき\n画面はしをドリルで\nほってらくせき攻撃"
        },
        "element": "break",
        "codes": "G*",
        "mb": 41,
        "version": "falzar",
        "stars": 3,
        "damage": 60,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 17,
        "name": {
            "en": "GrndManEX",
            "ja": "グランドマンEX"
        },
        "description": {
            "en": "Move fwrd\nthen attk\nw/drill",
            "ja": "前方へすすんでいき\n画面はしをドリルで\nほってらくせき攻撃"
        },
        "element": "break",
        "codes": "G",
        "mb": 66,
        "version": "falzar",
        "stars": 4,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 18,
        "name": {
            "en": "GrndManSP",
            "ja": "グランドマンSP"
        },
        "description": {
            "en": "Move fwrd\nthen attk\nw/drill",
            "ja": "前方へすすんでいき\n画面はしをドリルで\nほってらくせき攻撃"
        },
        "element": "break",
        "codes": "G",
        "mb": 85,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "DustMan",
            "ja": "ダストマン"
        },
        "description": {
            "en": "Attk ahd.\nSuck in &\nshoot out",
            "ja": "前方のてきを攻撃\nおきものがあると\nすいこんではっしゃ"
        },
        "element": "null",
        "codes": "D*",
        "mb": 39,
        "version": "falzar",
        "stars": 3,
        "damage": 110,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "DustManEX",
            "ja": "ダストマンEX"
        },
        "description": {
            "en": "Attk ahd.\nSuck in &\nshoot out",
            "ja": "前方のてきを攻撃\nおきものがあると\nすいこんではっしゃ"
        },
        "element": "null",
        "codes": "D",
        "mb": 56,
        "version": "falzar",
        "stars": 4,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "DustManSP",
            "ja": "ダストマンSP"
        },
        "description": {
            "en": "Attk ahd.\nSuck in &\nshoot out",
            "ja": "前方のてきを攻撃\nおきものがあると\nすいこんではっしゃ"
        },
        "element": "null",
        "codes": "D",
        "mb": 74,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "BlastMan",
            "ja": "ブラストマン"
        },
        "description": {
            "en": "Head fwd\n& launch\nblst attk",
            "ja": "たて3れつにすすむ\nねっぷう攻撃！"
        },
        "element": "fire",
        "codes": "B*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
        "name": {
            "en": "BlastMnEX",
            "ja": "ブラストマンEX"
        },
        "description": {
            "en": "Head fwd\n& launch\nblst attk",
            "ja": "たて3れつにすすむ\nねっぷう攻撃！"
        },
        "element": "fire",
        "codes": "B",
        "mb": 49,
        "version": null,
        "stars": 4,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "BlastMnSP",
            "ja": "ブラストマンSP"
        },
        "description": {
            "en": "Head fwd\n& launch\nblst attk",
            "ja": "たて3れつにすすむ\nねっぷう攻撃！"
        },
        "element": "fire",
        "codes": "B",
        "mb": 68,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "DiveMan",
            "ja": "ダイブマン"
        },
        "description": {
            "en": "Snd giant\nwave acrs\narea 2pnl",
            "ja": "3れつぜんたいに\n2マス前まですすむ\nおおなみをおこす！"
        },
        "element": "aqua",
        "codes": "D*",
        "mb": 45,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "DiveManEX",
            "ja": "ダイブマンEX"
        },
        "description": {
            "en": "Snd giant\nwave acrs\narea 2pnl",
            "ja": "3れつぜんたいに\n2マス前まですすむ\nおおなみをおこす！"
        },
        "element": "aqua",
        "codes": "D",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "DiveManSP",
            "ja": "ダイブマンSP"
        },
        "description": {
            "en": "Snd giant\nwave acrs\narea 2pnl",
            "ja": "3れつぜんたいに\n2マス前まですすむ\nおおなみをおこす！"
        },
        "element": "aqua",
        "codes": "D",
        "mb": 75,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "CrcusMan",
            "ja": "サーカスマン"
        },
        "description": {
            "en": "Capture\nenmy in a\nash attck",
            "ja": "3マス前方のてきを\nオリで つかまえて\nみぐるみはいで攻撃"
        },
        "element": "null",
        "codes": "C*",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "CrcusMnEX",
            "ja": "サーカスマンEX"
        },
        "description": {
            "en": "Capture\nenmy in a\nash attck",
            "ja": "3マス前方のてきを\nオリで つかまえて\nみぐるみはいで攻撃"
        },
        "element": "null",
        "codes": "C",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": 25,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "CrcusMnSP",
            "ja": "サーカスマンSP"
        },
        "description": {
            "en": "Capture\nenmy in a\nash attck",
            "ja": "3マス前方のてきを\nオリで つかまえて\nみぐるみはいで攻撃"
        },
        "element": "null",
        "codes": "C",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "JudgeMan",
            "ja": "ジャッジマン"
        },
        "description": {
            "en": "Whip 3\npanels\nforward",
            "ja": "よこ3マスにムチ！\nさらにパネルをぬす\nんだあいてにさばき"
        },
        "element": "elec",
        "codes": "J*",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "JudgeMnEX",
            "ja": "ジャッジマンEX"
        },
        "description": {
            "en": "Whip 3\npanels\nforward",
            "ja": "よこ3マスにムチ！\nさらにパネルをぬす\nんだあいてにさばき"
        },
        "element": "elec",
        "codes": "J",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "JudgeMnSP",
            "ja": "ジャッジマンSP"
        },
        "description": {
            "en": "Whip 3\npanels\nforward",
            "ja": "よこ3マスにムチ！\nさらにパネルをぬす\nんだあいてにさばき"
        },
        "element": "elec",
        "codes": "J",
        "mb": 72,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "ElmntMan",
            "ja": "エレメントマン"
        },
        "description": {
            "en": "Hit 🅐 whn\ncol chges\nelem attk",
            "ja": "いろがかわるのを\nAボタンでとめて\nその属性の攻撃！"
        },
        "element": "null",
        "codes": "E*",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 35,
        "name": {
            "en": "ElmntMnEX",
            "ja": "エレメントマンEX"
        },
        "description": {
            "en": "Hit 🅐 whn\ncol chges\nelem attk",
            "ja": "いろがかわるのを\nAボタンでとめて\nその属性の攻撃！"
        },
        "element": "null",
        "codes": "E",
        "mb": 53,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "ElmntMnSP",
            "ja": "エレメントマンSP"
        },
        "description": {
            "en": "Hit 🅐 whn\ncol chges\nelem attk",
            "ja": "いろがかわるのを\nAボタンでとめて\nその属性の攻撃！"
        },
        "element": "null",
        "codes": "E",
        "mb": 66,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 37,
        "name": {
            "en": "Colonel",
            "ja": "カーネル"
        },
        "description": {
            "en": "Cut enmy\nlines in\nZ shape",
            "ja": "てきエリアを\nZのかたちに\nきりつける！"
        },
        "element": "sword",
        "codes": "C*",
        "mb": 45,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 38,
        "name": {
            "en": "ColonelEX",
            "ja": "カーネルEX"
        },
        "description": {
            "en": "Cut enmy\nlines in\nZ shape",
            "ja": "てきエリアを\nZのかたちに\nきりつける！"
        },
        "element": "sword",
        "codes": "C",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 39,
        "name": {
            "en": "ColonelSP",
            "ja": "カーネルSP"
        },
        "description": {
            "en": "Cut enmy\nlines in\nZ shape",
            "ja": "てきエリアを\nZのかたちに\nきりつける！"
        },
        "element": "sword",
        "codes": "C",
        "mb": 91,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 40,
        "name": {
            "en": "HackJack",
            "ja": "ハクシャク"
        },
        "description": {
            "en": "Rain on\nenmy then\nlance atk",
            "ja": "てきエリアに\nちのあめをふらせ\nそのあとランス攻撃"
        },
        "element": "null",
        "codes": "H*",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 41,
        "name": {
            "en": "HackJckEX",
            "ja": "ハクシャクEX"
        },
        "description": {
            "en": "Rain on\nenmy then\nlance atk",
            "ja": "てきエリアに\nちのあめをふらせ\nそのあとランス攻撃"
        },
        "element": "null",
        "codes": "H",
        "mb": 75,
        "version": null,
        "stars": 4,
        "damage": 25,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 42,
        "name": {
            "en": "HackJckSP",
            "ja": "ハクシャクSP"
        },
        "description": {
            "en": "Rain on\nenmy then\nlance atk",
            "ja": "てきエリアに\nちのあめをふらせ\nそのあとランス攻撃"
        },
        "element": "null",
        "codes": "H",
        "mb": 89,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 43,
        "name": {
            "en": "Django",
            "ja": "ジャンゴ"
        },
        "description": {
            "en": "Hit enmy\nwith bike\nrdng Djgo",
            "ja": "前方へ向かって\nバイクにのった\nジャンゴがとつげき"
        },
        "element": "null",
        "codes": "D*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 44,
        "name": {
            "en": "Django2",
            "ja": "ジャンゴV2"
        },
        "description": {
            "en": "Hit enmy\nwith bike\nrdng Djgo",
            "ja": "前方へ向かって\nバイクにのった\nジャンゴがとつげき"
        },
        "element": "null",
        "codes": "D",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": 180,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 45,
        "name": {
            "en": "Django3",
            "ja": "ジャンゴV3"
        },
        "description": {
            "en": "Hit enmy\nwith bike\nrdng Djgo",
            "ja": "前方へ向かって\nバイクにのった\nジャンゴがとつげき"
        },
        "element": "null",
        "codes": "D",
        "mb": 90,
        "version": null,
        "stars": 5,
        "damage": 260,
        "class": "mega"
    },
    {
        "name": {
            "en": "PunchArm",
            "ja": "パンチアーム"
        }
    },
    {
        "name": {
            "en": "NeedlArm",
            "ja": "ニードルアーム"
        }
    },
    {
        "name": {
            "en": "PuzzlArm",
            "ja": "パルスアーム"
        }
    },
    {
        "name": {
            "en": "BoomrArm",
            "ja": "ブーメランアーム"
        }
    },
    {
        "name": {
            "en": "SyncTrgr",
            "ja": "シンクロトリガー"
        }
    },
    {
        "name": {
            "en": "DrkSword",
            "ja": "ダークソード"
        },
        "codes": "ABC*"
    },
    {
        "name": {
            "en": "DarkThnd",
            "ja": "ダークサンダー"
        },
        "codes": "ABC*"
    },
    {
        "name": {
            "en": "DrkRecov",
            "ja": "ダークリカバリー"
        },
        "codes": "ABC*"
    },
    {
        "name": {
            "en": "DarkInvs",
            "ja": "ダークインビジ"
        },
        "codes": "ABC*"
    },
    {
        "name": {
            "en": "DarkPlus",
            "ja": "ダークプラス"
        },
        "codes": "ABC*"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "Bass",
            "ja": "フォルテ"
        },
        "description": {
            "en": "Buster\nrake wide\nenmy area",
            "ja": "前方こうはんいに\nれんしゃする\nフォルテバスター！"
        },
        "element": "null",
        "codes": "F",
        "mb": 95,
        "version": "gregar",
        "stars": 5,
        "damage": 60,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "BigHook",
            "ja": "ギガントフック"
        },
        "description": {
            "en": "Hook\natk 2 sq\nwide",
            "ja": "よこ2マスぶんの\nコブシが2つ\nフックをはなつ！"
        },
        "element": "break",
        "codes": "H",
        "mb": 92,
        "version": "gregar",
        "stars": 5,
        "damage": 240,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "DeltaRay",
            "ja": "デルタレイエッジ"
        },
        "description": {
            "en": "A Button\npower up\nby 3 swrd",
            "ja": "きりつけるときに\nAボタンでさいこう\n3だんのソード攻撃"
        },
        "element": "sword",
        "codes": "Z",
        "mb": 82,
        "version": "gregar",
        "stars": 5,
        "damage": 260,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "ColForce",
            "ja": "カーネルフォース"
        },
        "description": {
            "en": "Smmn Col.\narmy in\nopen pnls",
            "ja": "プレイヤーエリアの\nあいているマスから\nカーネルアーミー！"
        },
        "element": "null",
        "codes": "Q",
        "mb": 90,
        "version": "gregar",
        "stars": 5,
        "damage": 30,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "BugRSwrd",
            "ja": "バグライズソード"
        },
        "description": {
            "en": "Use Bug\nFrag with\nDrkSword!",
            "ja": "Bためうちがバグの\nかけらをしょうひす\nるダークソードに！"
        },
        "element": "sword",
        "codes": "V",
        "mb": 80,
        "version": "gregar",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "BassAnly",
            "ja": "フォルテアナザー"
        },
        "description": {
            "en": "A ring\nthat hits\n4 times",
            "ja": "いちどだけまがる\nリングを4発\nなげつける！"
        },
        "element": "null",
        "codes": "F",
        "mb": 95,
        "version": "falzar",
        "stars": 5,
        "damage": 160,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 2,
        "name": {
            "en": "MetrKnuk",
            "ja": "メテオナックル"
        },
        "description": {
            "en": "Meteors\nbombard\nfrom sky",
            "ja": "うちゅうから\nせいぎのこぶしが\nむすうにふりそそぐ"
        },
        "element": "break",
        "codes": "N",
        "mb": 90,
        "version": "falzar",
        "stars": 5,
        "damage": 100,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
        "name": {
            "en": "CrossDiv",
            "ja": "クロスディバイド"
        },
        "description": {
            "en": "Cross-\nslice!",
            "ja": "前方のてきを\nクロスにきりつける"
        },
        "element": "sword",
        "codes": "D",
        "mb": 93,
        "version": "falzar",
        "stars": 5,
        "damage": 250,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "HubBatc",
            "ja": "サイトバッチ"
        },
        "description": {
            "en": "Blend Hub\nDNA Data\nw/MegaMan",
            "ja": "ロックマンのデータ\nを光彩斗のいでんし\nデータにあわせる！"
        },
        "element": "null",
        "codes": "J",
        "mb": 99,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "BgDthThd",
            "ja": "バグデスサンダー"
        },
        "description": {
            "en": "Use Bug\nFrag with\nDarkThnd!",
            "ja": "Bためうちがバグの\nかけらをしょうひす\nるダークサンダーに"
        },
        "element": "elec",
        "codes": "V",
        "mb": 80,
        "version": "falzar",
        "stars": 5,
        "damage": null,
        "class": "giga"
    },
    {
        "section": "secret",
        "index": 3,
        "name": {
            "en": "DblBeast",
            "ja": "ダブルビースト"
        },
        "description": {
            "en": "Fang&wing\ndoubl atk\nfrenzy!",
            "ja": "はかいするキバと\nひきさくツバサ！\nゆめのダブル攻撃"
        },
        "element": "null",
        "codes": "W",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 4,
        "name": {
            "en": "Gregar",
            "ja": "グレイガ"
        },
        "description": {
            "en": "Gregar's\nscorching\nbreath!",
            "ja": "電脳獣グレイガが\nブレス攻撃！\nすべてをやきつくす"
        },
        "element": "null",
        "codes": "X",
        "mb": 99,
        "version": "gregar",
        "stars": 5,
        "damage": 300,
        "class": "giga"
    },
    {
        "section": "secret",
        "index": 4,
        "name": {
            "en": "Falzar",
            "ja": "ファルザー"
        },
        "description": {
            "en": "Falzar's\nstorming\ntornado!",
            "ja": "電脳獣ファルザーが\nトルネード攻撃！\nすべてをふきとばす"
        },
        "element": "null",
        "codes": "X",
        "mb": 99,
        "version": "falzar",
        "stars": 5,
        "damage": 100,
        "class": "giga"
    },
    null,
    {
        "name": {
            "en": "BatCan1",
            "ja": "バットキャノン1"
        },
        "description": {
            "en": "MegaBstr\nattk with\nMegaMan!",
            "ja": "シンボクがわに\nロックマンが現れ\nバスター攻撃"
        }
    },
    {
        "name": {
            "en": "BatCan2",
            "ja": "バットキャノン2"
        },
        "description": {
            "en": "ZapRing\nattk with\nMegaMan!",
            "ja": "シンボクがわに\nロックマンが現れ\nラビリング攻撃"
        }
    },
    {
        "name": {
            "en": "BatCan3",
            "ja": "バットキャノン3"
        },
        "description": {
            "en": "LifeSrd\nattk with\nMegaMan!",
            "ja": "シンボクがわに\nロックマンが現れ\nドリームソード攻撃"
        }
    },
    {
        "name": {
            "en": "BatCan4",
            "ja": "バットキャノン4"
        },
        "description": {
            "en": "Snd all 3\ntypes of\nDstb Atks",
            "ja": "シンボクがわに\n3しゅるいすべての\nオジャマをおくる"
        }
    },
    {
        "name": {
            "en": "BeastOut",
            "ja": "ビーストアウト"
        },
        "description": {
            "en": "If Beast\nChip hits\nDstb atk!",
            "ja": "1ターンの間､獣化\nチップ攻撃ヒットで\nオジャマをおくれる"
        }
    },
    {
        "section": "pa",
        "index": 1,
        "name": {
            "en": "GigaCan1",
            "ja": "ギガキャノン1"
        },
        "description": {
            "en": "Giga lvl\ncannon\nattack!",
            "ja": "前方のてきに\nギガきゅうの\nキャノン攻撃！"
        },
        "damage": 300,
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
            ]
        ]
    },
    {
        "section": "pa",
        "index": 2,
        "name": {
            "en": "GigaCan2",
            "ja": "ギガキャノン2"
        },
        "description": {
            "en": "Giga lvl\ncannon\nattack!",
            "ja": "前方のてきに\nギガきゅうの\nキャノン攻撃！"
        },
        "damage": 400,
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
            ]
        ]
    },
    {
        "section": "pa",
        "index": 3,
        "name": {
            "en": "GigaCan3",
            "ja": "ギガキャノン3"
        },
        "description": {
            "en": "Giga lvl\ncannon\nattack!",
            "ja": "前方のてきに\nギガきゅうの\nキャノン攻撃！"
        },
        "damage": 500,
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
            ]
        ]
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "WideBrn1",
            "ja": "ワイドバーナー1"
        },
        "description": {
            "en": "An expnd\n3 row\nfire attk",
            "ja": "たて3れつに\nひろがる火炎攻撃！"
        },
        "damage": 300,
        "pa": [
            [
                {
                    "id": 20,
                    "variant": 0
                },
                {
                    "id": 20,
                    "variant": 1
                },
                {
                    "id": 20,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "WideBrn2",
            "ja": "ワイドバーナー2"
        },
        "description": {
            "en": "An expnd\n3 row\nfire attk",
            "ja": "たて3れつに\nひろがる火炎攻撃！"
        },
        "damage": 350,
        "pa": [
            [
                {
                    "id": 21,
                    "variant": 0
                },
                {
                    "id": 21,
                    "variant": 1
                },
                {
                    "id": 21,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "WideBrn3",
            "ja": "ワイドバーナー3"
        },
        "description": {
            "en": "An expnd\n3 row\nfire attk",
            "ja": "たて3れつに\nひろがる火炎攻撃！"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 22,
                    "variant": 0
                },
                {
                    "id": 22,
                    "variant": 1
                },
                {
                    "id": 22,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "FlmHook1",
            "ja": "フレイムフック1"
        },
        "description": {
            "en": "Launch 2\nflaming\nhooks!",
            "ja": "よこ2マスぶんの\n炎のコブシが2つ\nフックをはなつ！"
        },
        "damage": 300,
        "pa": [
            [
                {
                    "id": 107,
                    "variant": 0
                },
                {
                    "id": 107,
                    "variant": 1
                },
                {
                    "id": 107,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "FlmHook2",
            "ja": "フレイムフック2"
        },
        "description": {
            "en": "Launch 2\nflaming\nhooks!",
            "ja": "よこ2マスぶんの\n炎のコブシが2つ\nフックをはなつ！"
        },
        "damage": 350,
        "pa": [
            [
                {
                    "id": 108,
                    "variant": 0
                },
                {
                    "id": 108,
                    "variant": 1
                },
                {
                    "id": 108,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "FlmHook3",
            "ja": "フレイムフック3"
        },
        "description": {
            "en": "Launch 2\nflaming\nhooks!",
            "ja": "よこ2マスぶんの\n炎のコブシが2つ\nフックをはなつ！"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 109,
                    "variant": 0
                },
                {
                    "id": 109,
                    "variant": 1
                },
                {
                    "id": 109,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "PwrWave1",
            "ja": "パワーウェーブ1"
        },
        "description": {
            "en": "Send a\npwrfl wav\n3rows fwd",
            "ja": "たて3れつにすすむ\nちをはうウェーブ！"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 92,
                    "variant": 0
                },
                {
                    "id": 92,
                    "variant": 1
                },
                {
                    "id": 92,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "PwrWave2",
            "ja": "パワーウェーブ2"
        },
        "description": {
            "en": "Send a\npwrfl wav\n3rows fwd",
            "ja": "たて3れつにすすむ\nちをはうウェーブ！"
        },
        "damage": 500,
        "pa": [
            [
                {
                    "id": 93,
                    "variant": 0
                },
                {
                    "id": 93,
                    "variant": 1
                },
                {
                    "id": 93,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "PwrWave3",
            "ja": "パワーウェーブ3"
        },
        "description": {
            "en": "Send a\npwrfl wav\n3rows fwd",
            "ja": "たて3れつにすすむ\nちをはうウェーブ！"
        },
        "damage": 600,
        "pa": [
            [
                {
                    "id": 94,
                    "variant": 0
                },
                {
                    "id": 94,
                    "variant": 1
                },
                {
                    "id": 94,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "CornFsta",
            "ja": "コーンパーティー"
        },
        "description": {
            "en": "Explosive\ncorn with\n9pnl rch!",
            "ja": "9マスはんいに\nコーンがさくれつ！\n2マス前までとどく"
        },
        "damage": 40,
        "pa": [
            [
                {
                    "id": 64,
                    "variant": 0
                },
                {
                    "id": 64,
                    "variant": 1
                },
                {
                    "id": 64,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 65,
                    "variant": 0
                },
                {
                    "id": 65,
                    "variant": 1
                },
                {
                    "id": 65,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 66,
                    "variant": 0
                },
                {
                    "id": 66,
                    "variant": 1
                },
                {
                    "id": 66,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "ParaShl",
            "ja": "パラレルシェル"
        },
        "description": {
            "en": "Shell atk\non 5 rght\ngrid rows",
            "ja": "すべてのれつに\n画面左から5マス分\nすすむシェル攻撃！"
        },
        "damage": 350,
        "pa": [
            [
                {
                    "id": 123,
                    "variant": 0
                },
                {
                    "id": 123,
                    "variant": 1
                },
                {
                    "id": 123,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 124,
                    "variant": 0
                },
                {
                    "id": 124,
                    "variant": 1
                },
                {
                    "id": 124,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 125,
                    "variant": 0
                },
                {
                    "id": 125,
                    "variant": 1
                },
                {
                    "id": 125,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "DestPuls",
            "ja": "デストロイパルス"
        },
        "description": {
            "en": "Fire puls\nthat caus\nstrg bug!",
            "ja": "あいてにひどいバグ\nをひきおこすパルス\nをはなつ！"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 35,
                    "variant": 2
                },
                {
                    "id": 36,
                    "variant": 1
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "TimeBom+",
            "ja": "ギガカウントボム"
        },
        "description": {
            "en": "Set TmBm+\nin enemy\narea!",
            "ja": "前方のてきエリアの\n左はしマスに\nギガカウントボム！"
        },
        "damage": 700,
        "pa": [
            [
                {
                    "id": 144,
                    "variant": 0
                },
                {
                    "id": 144,
                    "variant": 1
                },
                {
                    "id": 144,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 200,
                    "variant": 0
                },
                {
                    "id": 200,
                    "variant": 1
                },
                {
                    "id": 200,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 201,
                    "variant": 0
                },
                {
                    "id": 201,
                    "variant": 1
                },
                {
                    "id": 201,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "StreamHd",
            "ja": "ストリームヘッド"
        },
        "description": {
            "en": "Fire a\nstrm of 5\nAuraHeds",
            "ja": "前方に向けて\nオーラヘッドを\n5れんしゃする！"
        },
        "damage": 150,
        "pa": [
            [
                {
                    "id": 95,
                    "variant": 0
                },
                {
                    "id": 95,
                    "variant": 1
                },
                {
                    "id": 95,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 96,
                    "variant": 0
                },
                {
                    "id": 96,
                    "variant": 1
                },
                {
                    "id": 96,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 97,
                    "variant": 0
                },
                {
                    "id": 97,
                    "variant": 1
                },
                {
                    "id": 97,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "SuprSpr",
            "ja": "スーパーワイド"
        },
        "description": {
            "en": "Fire 3\nconsec.\nWideShts",
            "ja": "かんつうする\nワイドショットを\n3れんしゃ！"
        },
        "damage": 150,
        "pa": [
            [
                {
                    "id": 23,
                    "variant": 0
                },
                {
                    "id": 23,
                    "variant": 1
                },
                {
                    "id": 23,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 19,
        "name": {
            "en": "H-Burst",
            "ja": "ハイパーバースト"
        },
        "description": {
            "en": "Secondary\nexplosion\nafter hit",
            "ja": "ヒットすると\nまわりにひろがる\nれんぞくはれつ攻撃"
        },
        "damage": 60,
        "pa": [
            [
                {
                    "id": 9,
                    "variant": 0
                },
                {
                    "id": 9,
                    "variant": 1
                },
                {
                    "id": 9,
                    "variant": 2
                }
            ],
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
                    "id": 11,
                    "variant": 0
                },
                {
                    "id": 11,
                    "variant": 1
                },
                {
                    "id": 11,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 20,
        "name": {
            "en": "LifeSrd",
            "ja": "ドリームソード"
        },
        "description": {
            "en": "Slices\n2sq wide\n3sq vrtcl",
            "ja": "よこ2､たて3の\nはんいをきる\nきょだいソード！"
        },
        "damage": 400,
        "pa": [
            [
                {
                    "id": 71,
                    "variant": 0
                },
                {
                    "id": 72,
                    "variant": 0
                },
                {
                    "id": 73,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 71,
                    "variant": 1
                },
                {
                    "id": 72,
                    "variant": 1
                },
                {
                    "id": 73,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 71,
                    "variant": 2
                },
                {
                    "id": 72,
                    "variant": 2
                },
                {
                    "id": 73,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 71,
                    "variant": 3
                },
                {
                    "id": 74,
                    "variant": 0
                },
                {
                    "id": 75,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 21,
        "name": {
            "en": "GreatYo",
            "ja": "ヨーヨーグレート"
        },
        "description": {
            "en": "Moves 3sq\nvertical",
            "ja": "たて3れつに\nすすむヨーヨー！"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 19,
                    "variant": 0
                },
                {
                    "id": 19,
                    "variant": 1
                },
                {
                    "id": 19,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "PitHocky",
            "ja": "ジゴクホッケー"
        },
        "description": {
            "en": "Reflect\nhockey\nattack",
            "ja": "はんしゃしながら\nすすむきょうふの\nホッケー攻撃！"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 50,
                    "variant": 0
                },
                {
                    "id": 50,
                    "variant": 1
                },
                {
                    "id": 50,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 23,
        "name": {
            "en": "PoisPhar",
            "ja": "ポイズンファラオ"
        },
        "description": {
            "en": "Places a\npoisoned\nPharaoh",
            "ja": "目の前にどくを\nはっせいさせる\nファラオぞうをおく"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 70,
                    "variant": 2
                },
                {
                    "id": 70,
                    "variant": 2
                },
                {
                    "id": 152,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "BodyGrd",
            "ja": "ボディガード"
        },
        "description": {
            "en": "Trap enmy\nthen thrw\nstar attk",
            "ja": "てきにワナをはる\n攻撃をうけると\nしゅりけん攻撃！"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 186,
                    "variant": 3
                },
                {
                    "id": 188,
                    "variant": 3
                },
                {
                    "id": 187,
                    "variant": 3
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "DblHero",
            "ja": "ダブルヒーロー"
        },
        "description": {
            "en": "Attk with\nBtlNwk1's\nProtoMan",
            "ja": "エグゼ1リスペクト\nブルースといっしょ\nにてきを攻撃する！"
        },
        "damage": 60,
        "pa": [
            [
                {
                    "id": 74,
                    "variant": 0
                },
                {
                    "id": 75,
                    "variant": 0
                },
                {
                    "id": 226,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "Darkness",
            "ja": "ダークメシア"
        },
        "description": {
            "en": "BtlNwk2's\nGspelBth&\nBass Swrd",
            "ja": "エグゼ2リスペクト\nゴスペルのブレスと\nフォルテのソード！"
        },
        "damage": 300,
        "pa": [
            [
                {
                    "id": 150,
                    "variant": 0
                },
                {
                    "id": 150,
                    "variant": 0
                },
                {
                    "id": 301,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 150,
                    "variant": 0
                },
                {
                    "id": 150,
                    "variant": 0
                },
                {
                    "id": 306,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "MstrCros",
            "ja": "マスタークロス"
        },
        "description": {
            "en": "Attk with\nall BN3's\nCros Attk",
            "ja": "エグゼ3リスペクト\nすべてのクロスの\nロックマンが攻撃！"
        },
        "damage": 100,
        "pa": [
            [
                {
                    "id": 109,
                    "variant": 0
                },
                {
                    "id": 63,
                    "variant": 0
                },
                {
                    "id": 36,
                    "variant": 0
                },
                {
                    "id": 39,
                    "variant": 0
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "SunMoon",
            "ja": "サンアンドムーン"
        },
        "description": {
            "en": "Attk 3pnl\nfwd w/BN4\nSunMn atk",
            "ja": "エグゼ4リスペクト\n3マス前方めがけて\nたいようと月が攻撃"
        },
        "damage": 200,
        "pa": [
            [
                {
                    "id": 139,
                    "variant": 0
                },
                {
                    "id": 195,
                    "variant": 0
                },
                {
                    "id": 185,
                    "variant": 2
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "TwinLdrs",
            "ja": "ツインリーダーズ"
        },
        "description": {
            "en": "Dbl attk\nw/BN5 Col\nand ProtM",
            "ja": "エグゼ5リスペクト\nブルースとカーネル\nがダブル攻撃！"
        },
        "damage": 200,
        "pa": [
            [
                {
                    "id": 226,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 3
                },
                {
                    "id": 272,
                    "variant": 1
                }
            ],
            [
                {
                    "id": 274,
                    "variant": 0
                },
                {
                    "id": 186,
                    "variant": 3
                },
                {
                    "id": 224,
                    "variant": 1
                }
            ]
        ]
    },
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "CrosOver",
            "ja": "クロスオーバー"
        },
        "description": {
            "en": "Cllbrate!\nAttk w/MM\n+ Django!",
            "ja": "コラボレーション！\nロックマンとジャン\nゴのはさみうち攻撃"
        },
        "damage": null,
        "pa": [
            [
                {
                    "id": 278,
                    "variant": 0
                },
                {
                    "id": 279,
                    "variant": 0
                },
                {
                    "id": 280,
                    "variant": 0
                }
            ]
        ]
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "name": {
            "en": "IceCube",
            "ja": "アイスキューブ"
        },
        "description": {
            "en": "Add an\neffect:\nConfuse",
            "ja": "1つ前にえらんだ\n攻撃チップに\nこんらんをつける"
        }
    },
    {
        "name": {
            "en": "Z Saver",
            "ja": "Zセイバー"
        },
        "description": {
            "en": "Add an\neffect:\nBlind",
            "ja": "1つ前にえらんだ\n攻撃チップに\nもうもくをつける"
        }
    },
    {
        "name": {
            "en": "WhiCapsl",
            "ja": "ホワイトカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nParalyze",
            "ja": "1つ前にえらんだ\n攻撃チップに\nマヒこうかをつける"
        }
    },
    {
        "name": {
            "en": "PrpCapsl",
            "ja": "パープルカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nHP Bug",
            "ja": "1つ前にえらんだ\n攻撃チップに\nHPバグをつける"
        }
    },
    {
        "name": {
            "en": "PnkCapsl",
            "ja": "ピンクカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nRecovery",
            "ja": "1つ前にえらんだ\n攻撃チップに\nリカバリーをつける"
        }
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "special",
        "index": 1,
        "name": {
            "en": "HeatPres",
            "ja": "ヒートプレス"
        },
        "description": {
            "en": "Sprd fire\nattk with\nDpad.3pnl",
            "ja": "3マス前方に\nとびこんで十字に\nひろがる炎攻撃！"
        },
        "element": "fire",
        "codes": "H",
        "version": "gregar",
        "damage": 70,
        "class": "special"
    },
    {
        "section": "special",
        "index": 2,
        "name": {
            "en": "DElecSwd",
            "ja": "Dエレキソード"
        },
        "description": {
            "en": "Dash fwd\nand slash\nw/ElecSwd",
            "ja": "前方へダッシュして\nてきをみつけると\nエレキソードできる"
        },
        "element": "elec",
        "codes": "E",
        "version": "gregar",
        "damage": 60,
        "class": "special"
    },
    {
        "section": "special",
        "index": 3,
        "name": {
            "en": "RSlash",
            "ja": "Rスラッシュ"
        },
        "description": {
            "en": "Slash an\nenmy whl\nrevolving",
            "ja": "かいてんしながら\nすすみ､てきを\nきりつけてもどる"
        },
        "element": "sword",
        "codes": "S",
        "version": "gregar",
        "damage": 100,
        "class": "special"
    },
    {
        "section": "special",
        "index": 4,
        "name": {
            "en": "EDeletBm",
            "ja": "Kデスビーム"
        },
        "description": {
            "en": "Pierce\nfwd and\nfire beam",
            "ja": "前方へかんつうする\nビームをはなつ！"
        },
        "element": "cursor",
        "codes": "K",
        "version": "gregar",
        "damage": 50,
        "class": "special"
    },
    {
        "section": "special",
        "index": 5,
        "name": {
            "en": "VolcChrg",
            "ja": "ボルカノチャージ"
        },
        "description": {
            "en": "Snd coal\nup chimny\n& hit emy",
            "ja": "えんとつから\nせきたんをとばして\nてきを攻撃！"
        },
        "element": "fire",
        "codes": "C",
        "version": "gregar",
        "damage": 40,
        "class": "special"
    },
    {
        "section": "special",
        "index": 1,
        "name": {
            "en": "DripShwr",
            "ja": "アクアシャワー"
        },
        "description": {
            "en": "Send rvlv\nshwr 3fwd\nhit 8pnls",
            "ja": "3マス前方へいって\nかいてんシャワーで\nまわり8マスを攻撃"
        },
        "element": "aqua",
        "codes": "A",
        "version": "falzar",
        "damage": 30,
        "class": "special"
    },
    {
        "section": "special",
        "index": 2,
        "name": {
            "en": "ETomahwk",
            "ja": "Eトマホーク"
        },
        "description": {
            "en": "Unleash\na giant\naxe attck",
            "ja": "前方1れつを\n攻撃する大オノを\nふりおろす！"
        },
        "element": "null",
        "codes": "T",
        "version": "falzar",
        "damage": 130,
        "class": "special"
    },
    {
        "section": "special",
        "index": 3,
        "name": {
            "en": "FTornado",
            "ja": "Fトルネード"
        },
        "description": {
            "en": "Attk enmy\nw/spnning\ntwister!",
            "ja": "てきのいるマスに\nたつまきをおこす\nウチワをふるう！"
        },
        "element": "wind",
        "codes": "T",
        "version": "falzar",
        "damage": 20,
        "class": "special"
    },
    {
        "section": "special",
        "index": 4,
        "name": {
            "en": "RC Brakr",
            "ja": "RCブレイカー"
        },
        "description": {
            "en": "DrillAtk.\nGo fwd &\nshwr rock",
            "ja": "前方へすすみ\n画面右をドリル攻撃\nしてイワをふらせる"
        },
        "element": "break",
        "codes": "G",
        "version": "falzar",
        "damage": 40,
        "class": "special"
    },
    {
        "section": "special",
        "index": 5,
        "name": {
            "en": "DustBrk",
            "ja": "ダストブレイク"
        },
        "description": {
            "en": "Draw enmy\nin, then\ncrsh attk",
            "ja": "前方のてきを\nすいよせて目の前に\nプレス攻撃をする！"
        },
        "element": "break",
        "codes": "D",
        "version": "falzar",
        "damage": 110,
        "class": "special"
    },
    {
        "section": "special",
        "index": 6,
        "name": {
            "en": "StepSwrd",
            "ja": "フミコミザン"
        },
        "description": {
            "en": "Use\nWideSwrd\n2sq ahead",
            "ja": "2マス前にふみこみ\nワイドソードで\nきりつける！"
        },
        "element": "sword",
        "codes": "B",
        "version": null,
        "damage": 80,
        "class": "special"
    }
]
;