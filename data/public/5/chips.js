const DATA_5_chips = [
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
        "mb": 8,
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
        "codes": "DEF",
        "mb": 24,
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
            "en": "Cannon to\nattack\n1 enemy",
            "ja": "前方のてき1たいを\n攻撃できる\nキャノンほう"
        },
        "element": "null",
        "codes": "FGH",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 120,
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
        "mb": 6,
        "version": null,
        "stars": 2,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 70,
        "name": {
            "en": "AirHoc",
            "ja": "エアホッケー"
        },
        "description": {
            "en": "Ricochet\nattack to\nright",
            "ja": "かべにはんしゃする\nエアホッケーを\nななめ右になげる！"
        },
        "element": "break",
        "codes": "QRS",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 92,
        "name": {
            "en": "Boomer",
            "ja": "ブーメラン"
        },
        "description": {
            "en": "Boomerang\nencircles\nfield",
            "ja": "バトルフィールドの\nはしにそってとぶ\nかんつうブーメラン"
        },
        "element": "wood",
        "codes": "ALV*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 126,
        "name": {
            "en": "Silence",
            "ja": "サイレンス"
        },
        "description": {
            "en": "MuteAnt\nblinds\nenemy",
            "ja": "ララミュートをおく\nえんそうちゅう\nあいてはもうもくに"
        },
        "element": "obstacle",
        "codes": "CJN*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 32,
        "name": {
            "en": "Tornado",
            "ja": "トルネード"
        },
        "description": {
            "en": "8hit strm\n2 squares\nahead",
            "ja": "2マス前方に\n8ヒットのたつまき\nを発生させる！"
        },
        "element": "wind",
        "codes": "DLR",
        "mb": 22,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 18,
        "name": {
            "en": "WideSht1",
            "ja": "ワイドショット1"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "LMN",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 19,
        "name": {
            "en": "WideSht2",
            "ja": "ワイドショット2"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "EFG",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 20,
        "name": {
            "en": "WideSht3",
            "ja": "ワイドショット3"
        },
        "description": {
            "en": "Fires 3sq\nshotgun\nblast!",
            "ja": "たて3マスのはばを\nもつワイドショット\nを前方へはなつ！"
        },
        "element": "aqua",
        "codes": "STU",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 9,
        "name": {
            "en": "MrkCan1",
            "ja": "マークキャノン1"
        },
        "description": {
            "en": "DoomerEX\nlocks on\n3 rows",
            "ja": "前方3れつまでの\nてきをロックオンし\nキャノン攻撃！"
        },
        "element": "cursor",
        "codes": "KMS",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 10,
        "name": {
            "en": "MrkCan2",
            "ja": "マークキャノン2"
        },
        "description": {
            "en": "DoomerEX\nlocks on\n3 rows",
            "ja": "前方3れつまでの\nてきをロックオンし\nキャノン攻撃！"
        },
        "element": "cursor",
        "codes": "DFZ",
        "mb": 27,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 11,
        "name": {
            "en": "MrkCan3",
            "ja": "マークキャノン3"
        },
        "description": {
            "en": "DoomerEX\nlocks on\n3 rows",
            "ja": "前方3れつまでの\nてきをロックオンし\nキャノン攻撃！"
        },
        "element": "cursor",
        "codes": "ERY",
        "mb": 36,
        "version": null,
        "stars": 3,
        "damage": 130,
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
        "codes": "CDE*",
        "mb": 6,
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
            "en": "5-shot to\npierce 1\npanel!",
            "ja": "5れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "ABC",
        "mb": 18,
        "version": null,
        "stars": 2,
        "damage": 10,
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
            "en": "7-shot to\npierce 1\npanel!",
            "ja": "7れんしゃバルカン\nヒットすると1マス\nおくにもかんつう！"
        },
        "element": "null",
        "codes": "LMN",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 8,
        "name": {
            "en": "Spreader",
            "ja": "スプレッドガン"
        },
        "description": {
            "en": "Creates a\nlarge\nexplosion",
            "ja": "ヒットすると\nまわりの1マスに\nゆうばく！"
        },
        "element": "null",
        "codes": "CDE*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 31,
        "name": {
            "en": "Thunder",
            "ja": "サンダーボール"
        },
        "description": {
            "en": "Pralyzing\nelectric\nattack!",
            "ja": "ゆっくりとすすむ\nついび電気攻撃\nあたるとマヒする！"
        },
        "element": "elec",
        "codes": "BLP*",
        "mb": 7,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 49,
        "name": {
            "en": "IceSeed",
            "ja": "アイスシード"
        },
        "description": {
            "en": "Makes 9sq\nice\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nこおりにする！"
        },
        "element": "null",
        "codes": "AKQ*",
        "mb": 42,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 12,
        "name": {
            "en": "Pulsar1",
            "ja": "パルスビーム1"
        },
        "description": {
            "en": "Sonic atk\nspreads\nwhen hits",
            "ja": "前方におんぱ攻撃！\nものにあたると\nまわりにひろがる！"
        },
        "element": "null",
        "codes": "FPT",
        "mb": 14,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 13,
        "name": {
            "en": "Pulsar2",
            "ja": "パルスビーム2"
        },
        "description": {
            "en": "Sonic atk\nspreads\nwhen hits",
            "ja": "前方におんぱ攻撃！\nものにあたると\nまわりにひろがる！"
        },
        "element": "null",
        "codes": "EGM",
        "mb": 26,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 14,
        "name": {
            "en": "Pulsar3",
            "ja": "パルスビーム3"
        },
        "description": {
            "en": "Sonic atk\nspreads\nwhen hits",
            "ja": "前方におんぱ攻撃！\nものにあたると\nまわりにひろがる！"
        },
        "element": "null",
        "codes": "CRS",
        "mb": 38,
        "version": null,
        "stars": 3,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 96,
        "name": {
            "en": "SpShake1",
            "ja": "スペースユラ1"
        },
        "description": {
            "en": "Shakey\nshivers\n3sq ahead",
            "ja": "たて3マスはばで\nゆれながらすすむ\nユラをはっしゃ！"
        },
        "element": "elec",
        "codes": "GHI",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 97,
        "name": {
            "en": "SpShake2",
            "ja": "スペースユラ2"
        },
        "description": {
            "en": "Shakey\nshivers\n3sq ahead",
            "ja": "たて3マスはばで\nゆれながらすすむ\nユラをはっしゃ！"
        },
        "element": "elec",
        "codes": "BCD",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 98,
        "name": {
            "en": "SpShake3",
            "ja": "スペースユラ3"
        },
        "description": {
            "en": "Shakey\nshivers\n3sq ahead",
            "ja": "たて3マスはばで\nゆれながらすすむ\nユラをはっしゃ！"
        },
        "element": "elec",
        "codes": "STU",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 33,
        "name": {
            "en": "Static",
            "ja": "ノイズストーム"
        },
        "description": {
            "en": "A static\nblast 2sq\nahead",
            "ja": "2マス前にノイズの\nアラシ！バグがある\nとパワーアップする"
        },
        "element": "wind",
        "codes": "NSV",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 177,
        "name": {
            "en": "LifeSync",
            "ja": "ライフシンクロ"
        },
        "description": {
            "en": "Makes HP\nsame as\nenemy",
            "ja": "2マス前のてきに\nカーソル！てきの\nHPをおなじにする"
        },
        "element": "cursor",
        "codes": "BRS*",
        "mb": 12,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 34,
        "name": {
            "en": "MiniBomb",
            "ja": "ミニボム"
        },
        "description": {
            "en": "Throws a\nMiniBomb\n3sq ahead",
            "ja": "3マス前におちる\nボムをなげつける"
        },
        "element": "null",
        "codes": "BGL*",
        "mb": 5,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 35,
        "name": {
            "en": "EnergBom",
            "ja": "エナジーボム"
        },
        "description": {
            "en": "Throws a\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "EPW",
        "mb": 11,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 36,
        "name": {
            "en": "MegEnBom",
            "ja": "メガエナジーボム"
        },
        "description": {
            "en": "Throws a\nbomb 3sq\nahead",
            "ja": "3マス前に\nれんぞくばくふうの\nボムをなげつける"
        },
        "element": "null",
        "codes": "CKZ",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 27,
        "name": {
            "en": "GunDelS1",
            "ja": "ガンデルソル1"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "ASU*",
        "mb": 15,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 28,
        "name": {
            "en": "GunDelS2",
            "ja": "ガンデルソル2"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "GUY",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 29,
        "name": {
            "en": "GunDelS3",
            "ja": "ガンデルソル3"
        },
        "description": {
            "en": "Sunshine\nappear w/\nButton",
            "ja": "ボタンをおしつづけ\nると2マス前方の\nたて3マスに日の光"
        },
        "element": "null",
        "codes": "DMO",
        "mb": 35,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 40,
        "name": {
            "en": "Quake1",
            "ja": "アースクエイク1"
        },
        "description": {
            "en": "Quake\ncracks\n3sq ahead",
            "ja": "3マス前方に\nアースクエイク攻撃\nじめんをヒビに！"
        },
        "element": "break",
        "codes": "AKP",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 41,
        "name": {
            "en": "Quake2",
            "ja": "アースクエイク2"
        },
        "description": {
            "en": "Quake\ncracks\n3sq ahead",
            "ja": "3マス前方に\nアースクエイク攻撃\nじめんをヒビに！"
        },
        "element": "break",
        "codes": "BLY",
        "mb": 25,
        "version": null,
        "stars": 2,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 42,
        "name": {
            "en": "Quake3",
            "ja": "アースクエイク3"
        },
        "description": {
            "en": "Quake\ncracks\n3sq ahead",
            "ja": "3マス前方に\nアースクエイク攻撃\nじめんをヒビに！"
        },
        "element": "break",
        "codes": "FHN",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 37,
        "name": {
            "en": "CrakBom",
            "ja": "クラックボム"
        },
        "description": {
            "en": "Bomb\ncracks\n3sq ahead",
            "ja": "3マス前方にボム！\nたて3マス攻撃で\nじめんをヒビに！"
        },
        "element": "null",
        "codes": "CRV*",
        "mb": 18,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 38,
        "name": {
            "en": "ParaBom",
            "ja": "パラライズボム"
        },
        "description": {
            "en": "Bomb\nparalyzes\n3sq ahead",
            "ja": "3マス前方にボム！\nたて3マス攻撃で\nマヒこうかつき！"
        },
        "element": "null",
        "codes": "HNP",
        "mb": 34,
        "version": null,
        "stars": 2,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 39,
        "name": {
            "en": "ResetBom",
            "ja": "リセットボム"
        },
        "description": {
            "en": "Reduces\npower\n3sq ahead",
            "ja": "3マス前方にボム！\nたて3マス攻撃で\nパワーダウンこうか"
        },
        "element": "null",
        "codes": "DIO",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 43,
        "name": {
            "en": "BugBomb",
            "ja": "バグボム"
        },
        "description": {
            "en": "Throws a\nBugBomb\n3sq ahead",
            "ja": "あいてをバグらせる\nバグボムを3マス前\nになげつける"
        },
        "element": "null",
        "codes": "ART*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 50,
        "name": {
            "en": "GrasSeed",
            "ja": "クサムラシード"
        },
        "description": {
            "en": "Makes 9sq\nmeadow\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nクサムラにする！"
        },
        "element": "null",
        "codes": "AMW*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 47,
        "name": {
            "en": "LavaSeed",
            "ja": "マグマシード"
        },
        "description": {
            "en": "Makes 9sq\nlava zone\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\nマグマにする！"
        },
        "element": "null",
        "codes": "HKP",
        "mb": 60,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 44,
        "name": {
            "en": "CannBall",
            "ja": "ホウガン"
        },
        "description": {
            "en": "Breaks\n3rd panel\nahead",
            "ja": "3マス前に\nホウガンをなげる！\nパネルはかい攻撃！"
        },
        "element": "break",
        "codes": "CTZ*",
        "mb": 30,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 46,
        "name": {
            "en": "Geyser",
            "ja": "カンケツセン"
        },
        "description": {
            "en": "Geyser 3\nsquares\nforward",
            "ja": "3マス前になげつけ\nあなマスにおちると\n水がふきだす！"
        },
        "element": "aqua",
        "codes": "GMS",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 45,
        "name": {
            "en": "BlkBomb",
            "ja": "ブラックボム"
        },
        "description": {
            "en": "Firebomb\nhits 3rd\nsq ahead!",
            "ja": "ふはつだんを\n3マス前になげる！\n炎攻撃でバクハツ！"
        },
        "element": "fire",
        "codes": "LRZ",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": 210,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 48,
        "name": {
            "en": "SeaSeed",
            "ja": "オーシャンシード"
        },
        "description": {
            "en": "Makes 9sq\nwtr zone\n3sq ahead",
            "ja": "3マス前にタネ！\n9マス分のパネルを\n水パネルにする！"
        },
        "element": "null",
        "codes": "DJM*",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 51,
        "name": {
            "en": "Sword",
            "ja": "ソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 1",
            "ja": "目の前のてきを\nきりつける！\n攻撃はんいは1マス"
        },
        "element": "sword",
        "codes": "CLS",
        "mb": 9,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 52,
        "name": {
            "en": "WideSwrd",
            "ja": "ワイドソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "KSZ",
        "mb": 16,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 53,
        "name": {
            "en": "LongSwrd",
            "ja": "ロングソード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "CMS",
        "mb": 25,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 54,
        "name": {
            "en": "WideBlde",
            "ja": "ワイドブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\nきりつける！\nはんいはたて3マス"
        },
        "element": "sword",
        "codes": "ALV",
        "mb": 38,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 55,
        "name": {
            "en": "LongBlde",
            "ja": "ロングブレード"
        },
        "description": {
            "en": "Cuts enmy\nin front!\nRange: 2",
            "ja": "目の前のてきを\nきりつける！\nはんいはよこ2マス"
        },
        "element": "sword",
        "codes": "ELP",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 59,
        "name": {
            "en": "WindRack",
            "ja": "フウジンラケット"
        },
        "description": {
            "en": "Blow enmy\nin front!\nRange: 3",
            "ja": "目の前のてきを\n風でふきとばす！\nはんいはたて3マス"
        },
        "element": "wind",
        "codes": "BFJ*",
        "mb": 23,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 56,
        "name": {
            "en": "CustSwrd",
            "ja": "カスタムソード"
        },
        "description": {
            "en": "Cust\nGauge=\nAtk Str",
            "ja": "カスタムゲージが\nマンタンにちかい\nほど攻撃力アップ！"
        },
        "element": "sword",
        "codes": "ELR",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 57,
        "name": {
            "en": "VarSwrd",
            "ja": "バリアブルソード"
        },
        "description": {
            "en": "A magical\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード"
        },
        "element": "sword",
        "codes": "BCV",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 58,
        "name": {
            "en": "Slasher",
            "ja": "イアイフォーム"
        },
        "description": {
            "en": "Cut while\nA Button\nis held",
            "ja": "Aボタンをおして\nいる間に入ってくる\nてきをきる！"
        },
        "element": "sword",
        "codes": "BIR",
        "mb": 18,
        "version": null,
        "stars": 3,
        "damage": 240,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 60,
        "name": {
            "en": "MoonBld1",
            "ja": "エンゲツクナイ1"
        },
        "description": {
            "en": "Slices\nenemies\naround",
            "ja": "じぶんのまわりに\nかいてんぎり！\nふかいきずをおわす"
        },
        "element": "sword",
        "codes": "AEN",
        "mb": 23,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 61,
        "name": {
            "en": "MoonBld2",
            "ja": "エンゲツクナイ2"
        },
        "description": {
            "en": "Slices\nenemies\naround",
            "ja": "じぶんのまわりに\nかいてんぎり！\nふかいきずをおわす"
        },
        "element": "sword",
        "codes": "GOV",
        "mb": 36,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 62,
        "name": {
            "en": "MoonBld3",
            "ja": "エンゲツクナイ3"
        },
        "description": {
            "en": "Slices\nenemies\naround",
            "ja": "じぶんのまわりに\nかいてんぎり！\nふかいきずをおわす"
        },
        "element": "sword",
        "codes": "CLT",
        "mb": 49,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 63,
        "name": {
            "en": "Katana1",
            "ja": "サムライソード1"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\n2回れんぞくで\nきりつける！"
        },
        "element": "sword",
        "codes": "DHS",
        "mb": 25,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 64,
        "name": {
            "en": "Katana2",
            "ja": "サムライソード2"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\n2回れんぞくで\nきりつける！"
        },
        "element": "sword",
        "codes": "BRW",
        "mb": 37,
        "version": null,
        "stars": 2,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 65,
        "name": {
            "en": "Katana3",
            "ja": "サムライソード3"
        },
        "description": {
            "en": "Cut twice\nonce wide\nonce long",
            "ja": "ワイドとロングに\n2回れんぞくで\nきりつける！"
        },
        "element": "sword",
        "codes": "AJZ",
        "mb": 49,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 15,
        "name": {
            "en": "TankCan1",
            "ja": "センシャホウ1"
        },
        "description": {
            "en": "3sq blast\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "AEP",
        "mb": 20,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 16,
        "name": {
            "en": "TankCan2",
            "ja": "センシャホウ2"
        },
        "description": {
            "en": "3sq blast\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "BTY",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 17,
        "name": {
            "en": "TankCan3",
            "ja": "センシャホウ3"
        },
        "description": {
            "en": "3sq blast\nif hits\nend row",
            "ja": "前方にほうげき！\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "FMR",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 127,
        "name": {
            "en": "RedFrut1",
            "ja": "レッドフルーツ1"
        },
        "description": {
            "en": "Hit apple\nfor\n+300HP",
            "ja": "りんごがしゅつげん\n攻撃をあてるとHP\nが300かいふく！"
        },
        "element": "recovery",
        "codes": "EKZ",
        "mb": 24,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 128,
        "name": {
            "en": "RedFrut2",
            "ja": "レッドフルーツ2"
        },
        "description": {
            "en": "Hit apple\nfor temp\nno damage",
            "ja": "りんごがしゅつげん\n攻撃をあてると\nむてきじょうたいに"
        },
        "element": "recovery",
        "codes": "FTW",
        "mb": 48,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 129,
        "name": {
            "en": "RedFrut3",
            "ja": "レッドフルーツ3"
        },
        "description": {
            "en": "Hit apple\nfor Full\nSyncro",
            "ja": "りんごがしゅつげん\n攻撃をあてると\nフルシンクロに！"
        },
        "element": "recovery",
        "codes": "HOU",
        "mb": 62,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 71,
        "name": {
            "en": "Skully1",
            "ja": "スカルチェーン1"
        },
        "description": {
            "en": "Confuses\nenemy if\nit hits",
            "ja": "3マスだけすすむ\nついびするホネ！\nあたるとこんらんに"
        },
        "element": "null",
        "codes": "CKS",
        "mb": 34,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 72,
        "name": {
            "en": "Skully2",
            "ja": "スカルチェーン2"
        },
        "description": {
            "en": "Confuses\nenemy if\nit hits",
            "ja": "3マスだけすすむ\nついびするホネ！\nあたるとこんらんに"
        },
        "element": "null",
        "codes": "AHV",
        "mb": 50,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 73,
        "name": {
            "en": "Skully3",
            "ja": "スカルチェーン3"
        },
        "description": {
            "en": "Confuses\nenemy if\nit hits",
            "ja": "3マスだけすすむ\nついびするホネ！\nあたるとこんらんに"
        },
        "element": "null",
        "codes": "GNU",
        "mb": 76,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 67,
        "name": {
            "en": "DrilArm1",
            "ja": "ドリルアーム1"
        },
        "description": {
            "en": "Knocks\nenmy 2sq\naway",
            "ja": "前方2マスはんいを\nドリル攻撃！\nてきをおしやる！"
        },
        "element": "break",
        "codes": "AJW",
        "mb": 38,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 68,
        "name": {
            "en": "DrilArm2",
            "ja": "ドリルアーム2"
        },
        "description": {
            "en": "Knocks\nenmy 2sq\naway",
            "ja": "前方2マスはんいを\nドリル攻撃！\nてきをおしやる！"
        },
        "element": "break",
        "codes": "DLS",
        "mb": 51,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 69,
        "name": {
            "en": "DrilArm3",
            "ja": "ドリルアーム3"
        },
        "description": {
            "en": "Knocks\nenmy 2sq\naway",
            "ja": "前方2マスはんいを\nドリル攻撃！\nてきをおしやる！"
        },
        "element": "break",
        "codes": "IPZ",
        "mb": 64,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 113,
        "name": {
            "en": "TimeBom1",
            "ja": "カウントボム1"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "HNT",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 114,
        "name": {
            "en": "TimeBom2",
            "ja": "カウントボム2"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "DHZ",
        "mb": 54,
        "version": null,
        "stars": 2,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 115,
        "name": {
            "en": "TimeBom3",
            "ja": "カウントボム3"
        },
        "description": {
            "en": "Explodes\n3 seconds\nlater",
            "ja": "3びょうごに\nばくはつするボムを\nてきエリアにおく！"
        },
        "element": "obstacle",
        "codes": "FHS",
        "mb": 76,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 99,
        "name": {
            "en": "Voltz1",
            "ja": "イナズマキング1"
        },
        "description": {
            "en": "Sensor2\nElecShock\n3sq ahead",
            "ja": "3マス前にピカラー\nがしゅつげん！\nじゅうじにほうでん"
        },
        "element": "elec",
        "codes": "KOY",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 100,
        "name": {
            "en": "Voltz2",
            "ja": "イナズマキング2"
        },
        "description": {
            "en": "Sensor2\nElecShock\n3sq ahead",
            "ja": "3マス前にピカラー\nがしゅつげん！\nじゅうじにほうでん"
        },
        "element": "elec",
        "codes": "JUZ",
        "mb": 48,
        "version": null,
        "stars": 2,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 101,
        "name": {
            "en": "Voltz3",
            "ja": "イナズマキング3"
        },
        "description": {
            "en": "Sensor2\nElecShock\n3sq ahead",
            "ja": "3マス前にピカラー\nがしゅつげん！\nじゅうじにほうでん"
        },
        "element": "elec",
        "codes": "AHV",
        "mb": 66,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 105,
        "name": {
            "en": "Lance",
            "ja": "バンブーランス"
        },
        "description": {
            "en": "Lance\nthrough\nback line",
            "ja": "てきエリアの右はし\nたてれつにとつぜん\nたけやりが発生！"
        },
        "element": "wood",
        "codes": "CLR*",
        "mb": 42,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 66,
        "name": {
            "en": "YoYo",
            "ja": "ヨーヨー"
        },
        "description": {
            "en": "YoYo atk\nreaches\n3sq ahead",
            "ja": "3マス前までとどく\nヨーヨー攻撃！\n3マス前は3ヒット"
        },
        "element": "null",
        "codes": "DEF",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 121,
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
        "index": 122,
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
        "index": 116,
        "name": {
            "en": "BoyBomb1",
            "ja": "ボーイズボム1"
        },
        "description": {
            "en": "BoyBomb\n1sq ahead\nPush it!",
            "ja": "目の前のマスに\nボーイズボム！\nおすと前へすすむ！"
        },
        "element": "obstacle",
        "codes": "CFS",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 117,
        "name": {
            "en": "BoyBomb2",
            "ja": "ボーイズボム2"
        },
        "description": {
            "en": "BoyBomb\n1sq ahead\nPush it!",
            "ja": "目の前のマスに\nボーイズボム！\nおすと前へすすむ！"
        },
        "element": "obstacle",
        "codes": "HPW",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 180,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 118,
        "name": {
            "en": "BoyBomb3",
            "ja": "ボーイズボム3"
        },
        "description": {
            "en": "BoyBomb\n1sq ahead\nPush it!",
            "ja": "目の前のマスに\nボーイズボム！\nおすと前へすすむ！"
        },
        "element": "obstacle",
        "codes": "BQY",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 230,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 131,
        "name": {
            "en": "Guard1",
            "ja": "メットガード1"
        },
        "description": {
            "en": "Repels a\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "ADK*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 132,
        "name": {
            "en": "Guard2",
            "ja": "メットガード2"
        },
        "description": {
            "en": "Repels a\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "BLQ*",
        "mb": 10,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 133,
        "name": {
            "en": "Guard3",
            "ja": "メットガード3"
        },
        "description": {
            "en": "Repels a\nenemy's\nattack",
            "ja": "タイミングガードし\n攻撃をしょうげきは\nにしてはねかえす！"
        },
        "element": "null",
        "codes": "CMS*",
        "mb": 16,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 137,
        "name": {
            "en": "CrakOut",
            "ja": "クラックアウト"
        },
        "description": {
            "en": "Destroys\n1 panel\nin front",
            "ja": "パネルはかい攻撃！\n目の前の1マスを\nけしさってしまう"
        },
        "element": "null",
        "codes": "*",
        "mb": 4,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 138,
        "name": {
            "en": "DublCrak",
            "ja": "ダブルクラック"
        },
        "description": {
            "en": "Destroys\n2 panels\nin front",
            "ja": "パネルはかい攻撃！\n前のよこ2マスを\nけしさってしまう"
        },
        "element": "null",
        "codes": "*",
        "mb": 7,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 139,
        "name": {
            "en": "TripCrak",
            "ja": "トリプルクラック"
        },
        "description": {
            "en": "Destroys\n3 panels\nin front",
            "ja": "パネルはかい攻撃！\n前のたて3マスを\nけしさってしまう"
        },
        "element": "null",
        "codes": "*",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 111,
        "name": {
            "en": "Magnum",
            "ja": "マグナム"
        },
        "description": {
            "en": "Cursor\ndestroys\npanels!",
            "ja": "カーソルをとめて\nパネルをはかいする\nマグナムをハッシャ"
        },
        "element": "cursor",
        "codes": "EOV",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 150,
        "name": {
            "en": "MetaGel",
            "ja": "スチールゼリー"
        },
        "description": {
            "en": "Gel atk\nsteals a\npanel!",
            "ja": "てきエリア左はしに\nパネルをぬりかえる\nゼリー攻撃！"
        },
        "element": "aqua",
        "codes": "FNT",
        "mb": 52,
        "version": null,
        "stars": 4,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 110,
        "name": {
            "en": "Snake",
            "ja": "カモンスネーク"
        },
        "description": {
            "en": "Call snak\nfrom hole\nin area",
            "ja": "自分のエリアの\nあなマスから\nこヘビがとんでいく"
        },
        "element": "wood",
        "codes": "CMZ",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 112,
        "name": {
            "en": "CircGun",
            "ja": "サークルガン"
        },
        "description": {
            "en": "Stop site\nw/ Button\nand attck",
            "ja": "まわるサイトを\nボタンでとめて\nショット攻撃！"
        },
        "element": "cursor",
        "codes": "ACF",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 119,
        "name": {
            "en": "Mine",
            "ja": "ステルスマイン"
        },
        "description": {
            "en": "Place a\nmine in\nenmy area",
            "ja": "てきエリアのどこか\nに見えないじらいを\nセットする！"
        },
        "element": "invisible",
        "codes": "HPT",
        "mb": 42,
        "version": null,
        "stars": 3,
        "damage": 300,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 120,
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
        "index": 123,
        "name": {
            "en": "Fanfare",
            "ja": "オウエンカ"
        },
        "description": {
            "en": "Take no\ndmg for a\nwhile",
            "ja": "ララパッパをおく\nえんそうちゅう\n自分がむてきに！"
        },
        "element": "obstacle",
        "codes": "FPZ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 124,
        "name": {
            "en": "Discord",
            "ja": "ディスコード"
        },
        "description": {
            "en": "Confuses\nenemies\nw/ music",
            "ja": "ララチューバをおく\nえんそうちゅう\nあいてがこんらん！"
        },
        "element": "obstacle",
        "codes": "BJQ*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 125,
        "name": {
            "en": "Timpani",
            "ja": "ティンパニー"
        },
        "description": {
            "en": "Paralyzes\nenemies\nw/ music",
            "ja": "ララボーンをおく\nえんそうちゅう\nじしんであしどめ！"
        },
        "element": "obstacle",
        "codes": "ALV*",
        "mb": 20,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 130,
        "name": {
            "en": "VDoll",
            "ja": "ワラニンギョウ"
        },
        "description": {
            "en": "Throws\nVdoll\nahead",
            "ja": "おそろしいノロイの\nワラニンギョウを\n3マス前方になげる"
        },
        "element": "obstacle",
        "codes": "OTZ",
        "mb": 58,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 93,
        "name": {
            "en": "Astroid1",
            "ja": "メテオアース1"
        },
        "description": {
            "en": "Meteors\ncrack\npanels!",
            "ja": "てきめがけて\nふりそそぐメテオ\nじめんをヒビに！"
        },
        "element": "fire",
        "codes": "AQT",
        "mb": 26,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 94,
        "name": {
            "en": "Astroid2",
            "ja": "メテオアース2"
        },
        "description": {
            "en": "Meteors\ncrack\npanels!",
            "ja": "てきめがけて\nふりそそぐメテオ\nじめんをヒビに！"
        },
        "element": "fire",
        "codes": "EMU",
        "mb": 42,
        "version": null,
        "stars": 2,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 95,
        "name": {
            "en": "Astroid3",
            "ja": "メテオアース3"
        },
        "description": {
            "en": "Meteors\ncrack\npanels!",
            "ja": "てきめがけて\nふりそそぐメテオ\nじめんをヒビに！"
        },
        "element": "fire",
        "codes": "CPY",
        "mb": 56,
        "version": null,
        "stars": 3,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 140,
        "name": {
            "en": "Recov10",
            "ja": "リカバリー10"
        },
        "description": {
            "en": "Recovers\n10HP",
            "ja": "HPを10\nかいふくする"
        },
        "element": "recovery",
        "codes": "ACL*",
        "mb": 8,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 141,
        "name": {
            "en": "Recov30",
            "ja": "リカバリー30"
        },
        "description": {
            "en": "Recovers\n30HP",
            "ja": "HPを30\nかいふくする"
        },
        "element": "recovery",
        "codes": "CHL*",
        "mb": 16,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 142,
        "name": {
            "en": "Recov50",
            "ja": "リカバリー50"
        },
        "description": {
            "en": "Recovers\n50HP",
            "ja": "HPを50\nかいふくする"
        },
        "element": "recovery",
        "codes": "BHO*",
        "mb": 24,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 143,
        "name": {
            "en": "Recov80",
            "ja": "リカバリー80"
        },
        "description": {
            "en": "Recovers\n80HP",
            "ja": "HPを80\nかいふくする"
        },
        "element": "recovery",
        "codes": "BKO*",
        "mb": 32,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 144,
        "name": {
            "en": "Recov120",
            "ja": "リカバリー120"
        },
        "description": {
            "en": "Recovers\n120HP",
            "ja": "HPを120\nかいふくする"
        },
        "element": "recovery",
        "codes": "K",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 145,
        "name": {
            "en": "Recov150",
            "ja": "リカバリー150"
        },
        "description": {
            "en": "Recovers\n150HP",
            "ja": "HPを150\nかいふくする"
        },
        "element": "recovery",
        "codes": "Q",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 146,
        "name": {
            "en": "Recov200",
            "ja": "リカバリー200"
        },
        "description": {
            "en": "Recovers\n200HP",
            "ja": "HPを200\nかいふくする"
        },
        "element": "recovery",
        "codes": "I",
        "mb": 56,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 147,
        "name": {
            "en": "Recov300",
            "ja": "リカバリー300"
        },
        "description": {
            "en": "Recovers\n300HP",
            "ja": "HPを300\nかいふくする"
        },
        "element": "recovery",
        "codes": "Y",
        "mb": 64,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 159,
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
        "mb": 5,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 148,
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
        "index": 149,
        "name": {
            "en": "AreaGrab",
            "ja": "エリアスチール"
        },
        "description": {
            "en": "Steals\nleft edge\nfrom enmy",
            "ja": "てきエリアの左はし\nたて1れつを自分の\nエリアにぬりかえる"
        },
        "element": "null",
        "codes": "ALS*",
        "mb": 8,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 152,
        "name": {
            "en": "GrabRvng",
            "ja": "スチールリベンジ"
        },
        "description": {
            "en": "40 damage\nfor every\nstolen sq",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\n40のダメージ！"
        },
        "element": "null",
        "codes": "FNP",
        "mb": 48,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 151,
        "name": {
            "en": "GrabBnsh",
            "ja": "スチールパニシュ"
        },
        "description": {
            "en": "20 damage\nfor every\nstolen sq",
            "ja": "ぬすまれたパネルの\nかずだけ あいてに\n20のダメージ！"
        },
        "element": "null",
        "codes": "DLR",
        "mb": 24,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 157,
        "name": {
            "en": "SloGauge",
            "ja": "ヘビーゲージ"
        },
        "description": {
            "en": "CustGauge\nTemporary\nslow-down",
            "ja": "しばらくのあいだ\nカスタムゲージの\nスピードがおちる"
        },
        "element": "null",
        "codes": "HQW*",
        "mb": 69,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 158,
        "name": {
            "en": "FstGauge",
            "ja": "クイックゲージ"
        },
        "description": {
            "en": "CustGauge\nTemporary\nspeed-up",
            "ja": "しばらくのあいだ\nカスタムゲージの\nスピードがあがる"
        },
        "element": "null",
        "codes": "HQW*",
        "mb": 32,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 153,
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
        "index": 154,
        "name": {
            "en": "Geddon1",
            "ja": "デスマッチ1"
        },
        "description": {
            "en": "Cracks\nall panel\non screen",
            "ja": "パネルのあるマスが\nすべてヒビに！"
        },
        "element": "null",
        "codes": "MPZ*",
        "mb": 34,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 155,
        "name": {
            "en": "Geddon2",
            "ja": "デスマッチ2"
        },
        "description": {
            "en": "Breaks\nall empty\npanels",
            "ja": "あいているマスが\nすべてこわれる！"
        },
        "element": "null",
        "codes": "HTW",
        "mb": 47,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 156,
        "name": {
            "en": "Geddon3",
            "ja": "デスマッチ3"
        },
        "description": {
            "en": "Turns all\npanels to\nswamp",
            "ja": "パネルのあるマスが\nすべてどくぬまに！"
        },
        "element": "null",
        "codes": "AOV",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 109,
        "name": {
            "en": "RainyDay",
            "ja": "カモンレイン"
        },
        "description": {
            "en": "Rains\ndown on\nenmy area",
            "ja": "じぶんのエリアの\n水パネルをすいこみ\nてきにあめをふらす"
        },
        "element": "aqua",
        "codes": "BGL",
        "mb": 47,
        "version": null,
        "stars": 4,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 180,
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
        "mb": 25,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 30,
        "name": {
            "en": "ElemRage",
            "ja": "エレメントレイジ"
        },
        "description": {
            "en": "Powers up\nwhen over\nelem sq",
            "ja": "前方3マス攻撃\nぞくせいパネルの\n上だとパワーアップ"
        },
        "element": "null",
        "codes": "EKW",
        "mb": 39,
        "version": null,
        "stars": 3,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 160,
        "name": {
            "en": "Blinder",
            "ja": "ブラインド"
        },
        "description": {
            "en": "Blinds\nenemy w/\nlight",
            "ja": "きょうりょくな光で\nあいてをもうもく\nじょうたいにする！"
        },
        "element": "null",
        "codes": "ADH*",
        "mb": 9,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 77,
        "name": {
            "en": "AirSpin1",
            "ja": "エアホイール1"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "CEO",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 78,
        "name": {
            "en": "AirSpin2",
            "ja": "エアホイール2"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "BHW",
        "mb": 44,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 79,
        "name": {
            "en": "AirSpin3",
            "ja": "エアホイール3"
        },
        "description": {
            "en": "Spits out\nhurricane\nattack",
            "ja": "しゅういをおそう\n風をおこすしゃりん\nを前方にすべらせる"
        },
        "element": "wind",
        "codes": "AGJ",
        "mb": 56,
        "version": null,
        "stars": 3,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 163,
        "name": {
            "en": "Invisibl",
            "ja": "インビジブル"
        },
        "description": {
            "en": "Invisibl\nfor a\nwhile",
            "ja": "少しの間とうめいに\nなって ほとんどの\n攻撃にあたらない"
        },
        "element": "invisible",
        "codes": "*",
        "mb": 12,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 167,
        "name": {
            "en": "BblWrap",
            "ja": "バブルラップ"
        },
        "description": {
            "en": "Weak\nagainst\nelec atk",
            "ja": "はがれても また\nふっかつするバリア\n電気攻撃にはよわい"
        },
        "element": "aqua",
        "codes": "Y",
        "mb": 35,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 164,
        "name": {
            "en": "Barrier",
            "ja": "バリア"
        },
        "description": {
            "en": "Nullifies\n10 HP of\ndamage",
            "ja": "バリアをはり\n10HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "BLS*",
        "mb": 7,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 165,
        "name": {
            "en": "Barr100",
            "ja": "バリア100"
        },
        "description": {
            "en": "Nullifies\n100 HP of\ndamage",
            "ja": "バリアをはり\n100HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "P",
        "mb": 27,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 166,
        "name": {
            "en": "Barr200",
            "ja": "バリア200"
        },
        "description": {
            "en": "Nullifies\n200 HP of\ndamage",
            "ja": "バリアをはり\n200HPぶんの\nダメージをむこうか"
        },
        "element": "null",
        "codes": "W",
        "mb": 47,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 161,
        "name": {
            "en": "NrthWind",
            "ja": "スーパーキタカゼ"
        },
        "description": {
            "en": "Wind blws\noff aura,\nbarriers",
            "ja": "すさまじいキタカゼ\nがバリアやオーラを\nふきとばしてしまう"
        },
        "element": "wind",
        "codes": "DQV*",
        "mb": 33,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 162,
        "name": {
            "en": "HolyPanl",
            "ja": "ホーリーパネル"
        },
        "description": {
            "en": "Creates a\nHolyPanl\nin front",
            "ja": "目の前のパネルを\nダメージはんげんの\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "ANU*",
        "mb": 24,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 168,
        "name": {
            "en": "AntiFire",
            "ja": "カキゲンキン"
        },
        "description": {
            "en": "Fire atk\ndamages\nyou",
            "ja": "てきにワナをはる\n炎の攻撃をだすと\n自分がダメージ！"
        },
        "element": "fire",
        "codes": "EKT*",
        "mb": 58,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 169,
        "name": {
            "en": "AntiWatr",
            "ja": "ダイコウズイ"
        },
        "description": {
            "en": "Water atk\ndamages\nyou",
            "ja": "てきにワナをはる\n水の攻撃をだすと\n自分がダメージ！"
        },
        "element": "aqua",
        "codes": "DGQ*",
        "mb": 54,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 170,
        "name": {
            "en": "AntiElec",
            "ja": "ヒライシン"
        },
        "description": {
            "en": "Elec atk\ndamages\nyou",
            "ja": "てきにワナをはる\n電気の攻撃をだすと\n自分がダメージ！"
        },
        "element": "elec",
        "codes": "ANY*",
        "mb": 59,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 171,
        "name": {
            "en": "AntiWood",
            "ja": "マヨイノモリ"
        },
        "description": {
            "en": "Wood atk\ndamages\nyou",
            "ja": "てきにワナをはる\n木の攻撃をだすと\n自分がダメージ！"
        },
        "element": "wood",
        "codes": "MSZ*",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": 200,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 174,
        "name": {
            "en": "AntiNavi",
            "ja": "ナビスカウト"
        },
        "description": {
            "en": "Takes the\nenemy's\nNavi away",
            "ja": "てきにワナをはる\nよびだしたナビを\nねがえらせる"
        },
        "element": "null",
        "codes": "MTV",
        "mb": 44,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 172,
        "name": {
            "en": "AntiDmg",
            "ja": "カワリミ"
        },
        "description": {
            "en": "Sets trap\nand throw\nstars",
            "ja": "てきにワナをはる\n攻撃にあたると\nしゅりけん攻撃！"
        },
        "element": "invisible",
        "codes": "CFM*",
        "mb": 31,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 173,
        "name": {
            "en": "AntiSwrd",
            "ja": "シラハドリ"
        },
        "description": {
            "en": "Retaliate\nfor sword\ndamage",
            "ja": "てきにワナをはる\nソード攻撃をうけ\nながしてはんげき！"
        },
        "element": "sword",
        "codes": "DOR",
        "mb": 43,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 175,
        "name": {
            "en": "AntiRecv",
            "ja": "バッドメディスン"
        },
        "description": {
            "en": "Damages\nenemy in\nrecovery",
            "ja": "てきにワナをはる\nてきのリカバリーが\nぎゃくにダメージに"
        },
        "element": "null",
        "codes": "BJP",
        "mb": 37,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 176,
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
        "index": 178,
        "name": {
            "en": "Attck+10",
            "ja": "アタック+10"
        },
        "description": {
            "en": "+10 for\nselected\natk chip",
            "ja": "攻撃チップのあとに\nえらぶと 攻撃力を\n+10できる"
        },
        "element": "plus",
        "codes": "*",
        "mb": 6,
        "version": null,
        "stars": 1,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 179,
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
        "index": 80,
        "name": {
            "en": "FireHit1",
            "ja": "ファイアパンチ1"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "OPQ",
        "mb": 12,
        "version": null,
        "stars": 1,
        "damage": 60,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 81,
        "name": {
            "en": "FireHit2",
            "ja": "ファイアパンチ2"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "HIJ",
        "mb": 28,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 82,
        "name": {
            "en": "FireHit3",
            "ja": "ファイアパンチ3"
        },
        "description": {
            "en": "Slams\nclosest\nenemy",
            "ja": "前方たて3れつで\n1ばんちかいてきの\nいるれつにパンチ！"
        },
        "element": "fire",
        "codes": "EFG",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 83,
        "name": {
            "en": "HotBody1",
            "ja": "ヒートボディ1"
        },
        "description": {
            "en": "Burns all\nenemies\naround",
            "ja": "じぶんのまわりの\nてきに炎攻撃！\nもえうつっていく！"
        },
        "element": "fire",
        "codes": "AFP",
        "mb": 28,
        "version": null,
        "stars": 1,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 84,
        "name": {
            "en": "HotBody2",
            "ja": "ヒートボディ2"
        },
        "description": {
            "en": "Burns all\nenemies\naround",
            "ja": "じぶんのまわりの\nてきに炎攻撃！\nもえうつっていく！"
        },
        "element": "fire",
        "codes": "CRW",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 85,
        "name": {
            "en": "HotBody3",
            "ja": "ヒートボディ3"
        },
        "description": {
            "en": "Burns all\nenemies\naround",
            "ja": "じぶんのまわりの\nてきに炎攻撃！\nもえうつっていく！"
        },
        "element": "fire",
        "codes": "JMS",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 150,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 74,
        "name": {
            "en": "AqWhirl1",
            "ja": "アクアワール1"
        },
        "description": {
            "en": "Whirlwind\nmakes\nwater sq",
            "ja": "えんをえがいて\nすすむウズマキ！\nじめんを水パネルに"
        },
        "element": "aqua",
        "codes": "BFN",
        "mb": 30,
        "version": null,
        "stars": 1,
        "damage": 70,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 75,
        "name": {
            "en": "AqWhirl2",
            "ja": "アクアワール2"
        },
        "description": {
            "en": "Whirlwind\nmakes\nwater sq",
            "ja": "えんをえがいて\nすすむウズマキ！\nじめんを水パネルに"
        },
        "element": "aqua",
        "codes": "AHO",
        "mb": 42,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 76,
        "name": {
            "en": "AqWhirl3",
            "ja": "アクアワール3"
        },
        "description": {
            "en": "Whirlwind\nmakes\nwater sq",
            "ja": "えんをえがいて\nすすむウズマキ！\nじめんを水パネルに"
        },
        "element": "aqua",
        "codes": "DIR",
        "mb": 54,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 86,
        "name": {
            "en": "SideBub1",
            "ja": "サイドバブル1"
        },
        "description": {
            "en": "Bubbles\nspread in\na big V",
            "ja": "モリの入ったアワを\nりょうななめ前方に\nはっせいさせる"
        },
        "element": "aqua",
        "codes": "DQS",
        "mb": 25,
        "version": null,
        "stars": 1,
        "damage": 90,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 87,
        "name": {
            "en": "SideBub2",
            "ja": "サイドバブル2"
        },
        "description": {
            "en": "Bubbles\nspread in\na big V",
            "ja": "モリの入ったアワを\nりょうななめ前方に\nはっせいさせる"
        },
        "element": "aqua",
        "codes": "HLW",
        "mb": 35,
        "version": null,
        "stars": 2,
        "damage": 110,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 88,
        "name": {
            "en": "SideBub3",
            "ja": "サイドバブル3"
        },
        "description": {
            "en": "Bubbles\nspread in\na big V",
            "ja": "モリの入ったアワを\nりょうななめ前方に\nはっせいさせる"
        },
        "element": "aqua",
        "codes": "ENP",
        "mb": 45,
        "version": null,
        "stars": 3,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 21,
        "name": {
            "en": "ElcReel1",
            "ja": "エレキリール1"
        },
        "description": {
            "en": "Elec wire\nshocks\nenemies",
            "ja": "前方に電気のいと！\nとなりあったてきに\n電気がながれていく"
        },
        "element": "elec",
        "codes": "CVZ",
        "mb": 32,
        "version": null,
        "stars": 1,
        "damage": 80,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 22,
        "name": {
            "en": "ElcReel2",
            "ja": "エレキリール2"
        },
        "description": {
            "en": "Elec wire\nshocks\nenemies",
            "ja": "前方に電気のいと！\nとなりあったてきに\n電気がながれていく"
        },
        "element": "elec",
        "codes": "BQY",
        "mb": 46,
        "version": null,
        "stars": 2,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 23,
        "name": {
            "en": "ElcReel3",
            "ja": "エレキリール3"
        },
        "description": {
            "en": "Elec wire\nshocks\nenemies",
            "ja": "前方に電気のいと！\nとなりあったてきに\n電気がながれていく"
        },
        "element": "elec",
        "codes": "ELR",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 89,
        "name": {
            "en": "CusVolt1",
            "ja": "カスタムボルト1"
        },
        "description": {
            "en": "Consumes\nCustom\nGauge",
            "ja": "ひろがる電撃！\nカスタムゲージを\nしょうひしてはなつ"
        },
        "element": "elec",
        "codes": "AVY*",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 90,
        "name": {
            "en": "CusVolt2",
            "ja": "カスタムボルト2"
        },
        "description": {
            "en": "Consumes\nCustom\nGauge",
            "ja": "ひろがる電撃！\nカスタムゲージを\nしょうひしてはなつ"
        },
        "element": "elec",
        "codes": "CEG",
        "mb": 55,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 91,
        "name": {
            "en": "CusVolt3",
            "ja": "カスタムボルト3"
        },
        "description": {
            "en": "Consumes\nCustom\nGauge",
            "ja": "ひろがる電撃！\nカスタムゲージを\nしょうひしてはなつ"
        },
        "element": "elec",
        "codes": "GMP",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 134,
        "name": {
            "en": "CrsShld1",
            "ja": "カースシールド1"
        },
        "description": {
            "en": "Attacks\neven when\nguarding!",
            "ja": "ガードするとあいて\nにかみつくシールド\nあいてはのろわれる"
        },
        "element": "null",
        "codes": "BFV",
        "mb": 28,
        "version": null,
        "stars": 1,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 135,
        "name": {
            "en": "CrsShld2",
            "ja": "カースシールド2"
        },
        "description": {
            "en": "Attacks\neven when\nguarding!",
            "ja": "ガードするとあいて\nにかみつくシールド\nあいてはのろわれる"
        },
        "element": "null",
        "codes": "CMR",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 136,
        "name": {
            "en": "CrsShld3",
            "ja": "カースシールド3"
        },
        "description": {
            "en": "Attacks\neven when\nguarding!",
            "ja": "ガードするとあいて\nにかみつくシールド\nあいてはのろわれる"
        },
        "element": "null",
        "codes": "DOZ",
        "mb": 52,
        "version": null,
        "stars": 3,
        "damage": 190,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 106,
        "name": {
            "en": "WavePit",
            "ja": "ツナミホール"
        },
        "description": {
            "en": "Wave from\nWater sq",
            "ja": "水パネルから\nツナミがはっせい"
        },
        "element": "aqua",
        "codes": "BEZ",
        "mb": 42,
        "version": null,
        "stars": 2,
        "damage": 160,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 107,
        "name": {
            "en": "RedWave",
            "ja": "アカツナミホール"
        },
        "description": {
            "en": "RedWave\nout of\nLava sq",
            "ja": "マグマパネルから\nアカツナミはっせい"
        },
        "element": "fire",
        "codes": "AFH",
        "mb": 48,
        "version": null,
        "stars": 3,
        "damage": 190,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 108,
        "name": {
            "en": "MudWave",
            "ja": "ドロツナミホール"
        },
        "description": {
            "en": "MudWave\nout of\nhole",
            "ja": "あなパネルから\nドロツナミはっせい"
        },
        "element": "wood",
        "codes": "DNW",
        "mb": 54,
        "version": null,
        "stars": 4,
        "damage": 170,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 24,
        "name": {
            "en": "CactBal1",
            "ja": "サボテンボール1"
        },
        "description": {
            "en": "Jumps\nforward\n4 times",
            "ja": "2マス前にむけて\nサボテンをはなつ\n4回はねすすむ！"
        },
        "element": "wood",
        "codes": "HIJ",
        "mb": 10,
        "version": null,
        "stars": 1,
        "damage": 30,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 25,
        "name": {
            "en": "CactBal2",
            "ja": "サボテンボール2"
        },
        "description": {
            "en": "Jumps\nforward\n4 times",
            "ja": "2マス前にむけて\nサボテンをはなつ\n4回はねすすむ！"
        },
        "element": "wood",
        "codes": "QRS",
        "mb": 30,
        "version": null,
        "stars": 2,
        "damage": 40,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 26,
        "name": {
            "en": "CactBal3",
            "ja": "サボテンボール3"
        },
        "description": {
            "en": "Jumps\nforward\n4 times",
            "ja": "2マス前にむけて\nサボテンをはなつ\n4回はねすすむ！"
        },
        "element": "wood",
        "codes": "LMN",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 102,
        "name": {
            "en": "WoodNos1",
            "ja": "ウッディノーズ1"
        },
        "description": {
            "en": "Branch\ngrows out\nfrom side",
            "ja": "前方にタネをはなつ\n画面そとから2マス\nのえだがのびてくる"
        },
        "element": "wood",
        "codes": "FRW",
        "mb": 27,
        "version": null,
        "stars": 1,
        "damage": 100,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 103,
        "name": {
            "en": "WoodNos2",
            "ja": "ウッディノーズ2"
        },
        "description": {
            "en": "Branch\ngrows out\nfrom side",
            "ja": "前方にタネをはなつ\n画面そとから2マス\nのえだがのびてくる"
        },
        "element": "wood",
        "codes": "JTZ",
        "mb": 40,
        "version": null,
        "stars": 2,
        "damage": 130,
        "class": "standard"
    },
    {
        "section": "standard",
        "index": 104,
        "name": {
            "en": "WoodNos3",
            "ja": "ウッディノーズ3"
        },
        "description": {
            "en": "Branch\ngrows out\nfrom side",
            "ja": "前方にタネをはなつ\n画面そとから2マス\nのえだがのびてくる"
        },
        "element": "wood",
        "codes": "ISV",
        "mb": 53,
        "version": null,
        "stars": 3,
        "damage": 160,
        "class": "standard"
    },
    null,
    null,
    null,
    null,
    null,
    null,
    {
        "section": "dark",
        "index": 3,
        "name": {
            "en": "DarkCirc",
            "ja": "ダークサークル"
        },
        "description": {
            "en": "STOP\nCURSR AND\nATTACK",
            "ja": "エリアノシュウイヲ\nマワルカーソルヲ\nトメテコウゲキセヨ"
        },
        "element": "cursor",
        "codes": "R",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 300,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 1,
        "name": {
            "en": "DrkSword",
            "ja": "ダークソード"
        },
        "description": {
            "en": "USE LARGE\nSWORD AND\nSLICE",
            "ja": "キョダイナソードデ\nゼンポウノアイテヲ\nキリツケルノダ！"
        },
        "element": "sword",
        "codes": "Z",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 400,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 8,
        "name": {
            "en": "DarkInvs",
            "ja": "ダークインビジ"
        },
        "description": {
            "en": "RELEASE\nYOUR\nDARKNESS",
            "ja": "オノレノナカノヤミ\nヲトキハナチ ミヲ\nユダネルノダ！"
        },
        "element": "invisible",
        "codes": "*",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 9,
        "name": {
            "en": "DarkPlus",
            "ja": "ダークプラス"
        },
        "description": {
            "en": "NEXT CHIP\nATK\n+50",
            "ja": "ツギノチップノ\nコウゲキリョクヲ\n+50シテヤロウ！"
        },
        "element": "plus",
        "codes": "*",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 10,
        "name": {
            "en": "DrkLance",
            "ja": "ダークランス"
        },
        "description": {
            "en": "ATK ENMY\nFROM\nBEHIND",
            "ja": "ウシロデアンシン\nシテイルテキヲ\nハイゴカラネラエ"
        },
        "element": "wood",
        "codes": "W",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 400,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 12,
        "name": {
            "en": "DarkWide",
            "ja": "ダークワイド"
        },
        "description": {
            "en": "WIDESHOT\nPIERCES\nTHE ENMY",
            "ja": "タテ3マスノワイド\nショットガアイテヲ\nツラヌイテススム"
        },
        "element": "aqua",
        "codes": "T",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 300,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 5,
        "name": {
            "en": "DarkThnd",
            "ja": "ダークサンダー"
        },
        "description": {
            "en": "CORNER\nENMY BY\nTHUNDER",
            "ja": "マヒコウカヲモッタ\nサンダーボールデ\nジワジワオイツメヨ"
        },
        "element": "elec",
        "codes": "M",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 200,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 6,
        "name": {
            "en": "DrkRecov",
            "ja": "ダークリカバリー"
        },
        "description": {
            "en": "BECOME\nALMOST\nINVINCBLE",
            "ja": "キョウイノカイフク\nノウリョクヲモッテ\nイルノダ・・・"
        },
        "element": "recovery",
        "codes": "H",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 4,
        "name": {
            "en": "DarkMetr",
            "ja": "ダークメテオ"
        },
        "description": {
            "en": "METEOR\nSHOWER\nON ENMY",
            "ja": "メテオノアメガ\nテキヲネラッテ\nフリソソグデアロウ"
        },
        "element": "fire",
        "codes": "F",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 11,
        "name": {
            "en": "DarkDril",
            "ja": "ダークドリル"
        },
        "description": {
            "en": "LETHAL\nDRILL OF\nDARKNESS",
            "ja": "オノレノハカイ\nショウドウヲミタス\nヤミノドリルナリ！"
        },
        "element": "break",
        "codes": "D",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 2,
        "name": {
            "en": "DarkTorn",
            "ja": "ダークトルネード"
        },
        "description": {
            "en": "TORNADO\nEXPANDS\nWHEN HIT",
            "ja": "キズヲオウホドニ\nハンイヲヒロゲル\nニクシミノアラシ"
        },
        "element": "wind",
        "codes": "T",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": 50,
        "class": "dark"
    },
    {
        "section": "dark",
        "index": 7,
        "name": {
            "en": "DrkSonic",
            "ja": "ダークサウンド"
        },
        "description": {
            "en": "PARALYZE\nTHE\nENEMY",
            "ja": "ソノサウンドハ\nキクモノノウゴキヲ\nフウジテシマウノダ"
        },
        "element": "obstacle",
        "codes": "E",
        "mb": 99,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "dark"
    },
    null,
    null,
    {
        "section": "mega",
        "index": 10,
        "name": {
            "en": "LifeAur",
            "ja": "ドリームオーラ"
        },
        "description": {
            "en": "Repel all\nattacks\nunder200",
            "ja": "攻撃力が200より\nひくい攻撃を\nむこうかするオーラ"
        },
        "element": "null",
        "codes": "D",
        "mb": 70,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 14,
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
        "mb": 81,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 5,
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
        "stars": 4,
        "damage": 200,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 15,
        "name": {
            "en": "Anubis",
            "ja": "ポイズンアヌビス"
        },
        "description": {
            "en": "Anubis\npoisons\nenemies",
            "ja": "目の前のマスに\nどくを発生させる\nアヌビスぞうをおく"
        },
        "element": "obstacle",
        "codes": "A",
        "mb": 86,
        "version": null,
        "stars": 5,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 12,
        "name": {
            "en": "Attck+30",
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
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 8,
        "name": {
            "en": "BugFix",
            "ja": "バグシュウセイ"
        },
        "description": {
            "en": "Repairs &\nremoves\nbugs",
            "ja": "ナビに発生している\nバグをしゅうせいし\nとりのぞく"
        },
        "element": "null",
        "codes": "H*",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 13,
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
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 11,
        "name": {
            "en": "Snctuary",
            "ja": "サンクチュアリ"
        },
        "description": {
            "en": "Chng all\nown panel\nto holy",
            "ja": "自分のエリアの\nすべてのマスを\nホーリーパネルに！"
        },
        "element": "null",
        "codes": "S",
        "mb": 62,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 9,
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
        "mb": 45,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 3,
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
        "stars": 4,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 4,
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
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 6,
        "name": {
            "en": "Jealousy",
            "ja": "ジェラシー"
        },
        "description": {
            "en": "More dmg\nif enemy\nhas chip",
            "ja": "チップをもつてきに\n枚数におうじた\nダメージをあたえる"
        },
        "element": "null",
        "codes": "J",
        "mb": 35,
        "version": null,
        "stars": 4,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 7,
        "name": {
            "en": "Poltrgst",
            "ja": "ポルターガイスト"
        },
        "description": {
            "en": "Objects\nthrown at\nenemies!",
            "ja": "フィールド上にある\nぶったいをとばして\nあいてにぶつける！"
        },
        "element": "null",
        "codes": "P",
        "mb": 40,
        "version": null,
        "stars": 4,
        "damage": 150,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 16,
        "name": {
            "en": "BlakWing",
            "ja": "ブラックウイング"
        },
        "description": {
            "en": "Wing atk\nfrom a\ncave",
            "ja": "てきエリアはしに\nどうくつがあらわれ\nくろいツバサ攻撃！"
        },
        "element": "null",
        "codes": "W",
        "mb": 58,
        "version": null,
        "stars": 4,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 19,
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
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 17,
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
        "damage": 280,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 2,
        "name": {
            "en": "NeoVari",
            "ja": "ネオバリアブル"
        },
        "description": {
            "en": "A magical\nshifting\nsword",
            "ja": "へんげんじざいの\nテクニカルソード\nじょうきゅうへん"
        },
        "element": "sword",
        "codes": "V",
        "mb": 74,
        "version": null,
        "stars": 5,
        "damage": 240,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 18,
        "name": {
            "en": "Z Saver",
            "ja": "Zセイバー"
        },
        "description": {
            "en": "Reploid\nswrd cuts\n3 times",
            "ja": "でんせつの あかい\nレプリロイドの\n3だんぎりソード"
        },
        "element": "sword",
        "codes": "Z",
        "mb": 80,
        "version": null,
        "stars": 5,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 20,
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
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 1,
        "name": {
            "en": "SuprVulc",
            "ja": "スーパーバルカン"
        },
        "description": {
            "en": "12-shot\nvulcan\ncannon",
            "ja": "きょういの\n12れんしゃ\nバルカンほう！"
        },
        "element": "null",
        "codes": "S",
        "mb": 75,
        "version": null,
        "stars": 3,
        "damage": 10,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 19,
        "name": {
            "en": "Roll",
            "ja": "ロール"
        },
        "description": {
            "en": "Attack an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 20,
        "version": null,
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 20,
        "name": {
            "en": "RollSP",
            "ja": "ロールSP"
        },
        "description": {
            "en": "Attack an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 21,
        "name": {
            "en": "RollDS",
            "ja": "ロールDS"
        },
        "description": {
            "en": "Attack an\nenmy,then\nheals you",
            "ja": "てき1たいを攻撃\nかいふくのハートで\nいやしてくれる"
        },
        "element": "recovery",
        "codes": "R",
        "mb": 60,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "GyroMan",
            "ja": "ジャイロマン"
        },
        "description": {
            "en": "Bombs the\nfront of\nsame row",
            "ja": "ヘリけいたいになり\nおなじれつの前方に\nばくげき！！"
        },
        "element": "null",
        "codes": "G",
        "mb": 32,
        "version": "protoman",
        "stars": 3,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "GyroManSP",
            "ja": "ジャイロマンSP"
        },
        "description": {
            "en": "Bombs the\nfront of\nsame row",
            "ja": "ヘリけいたいになり\nおなじれつの前方に\nばくげき！！"
        },
        "element": "null",
        "codes": "G",
        "mb": 66,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "GyroManDS",
            "ja": "ジャイロマンDS"
        },
        "description": {
            "en": "Bombs the\nfront of\nsame row",
            "ja": "ヘリけいたいになり\nおなじれつの前方に\nばくげき！！"
        },
        "element": "null",
        "codes": "G",
        "mb": 66,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "NapalmMn",
            "ja": "ナパームマン"
        },
        "description": {
            "en": "Explosion\nspreads\n9 panels",
            "ja": "4マス前方に\n9マス分にひろがる\nナパームボム！"
        },
        "element": "fire",
        "codes": "N",
        "mb": 38,
        "version": "protoman",
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "NaplmMnSP",
            "ja": "ナパームマンSP"
        },
        "description": {
            "en": "Explosion\nspreads\n9 panels",
            "ja": "4マス前方に\n9マス分にひろがる\nナパームボム！"
        },
        "element": "fire",
        "codes": "N",
        "mb": 72,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "NaplmMnDS",
            "ja": "ナパームマンDS"
        },
        "description": {
            "en": "Explosion\nspreads\n9 panels",
            "ja": "4マス前方に\n9マス分にひろがる\nナパームボム！"
        },
        "element": "fire",
        "codes": "N",
        "mb": 72,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "SerchMan",
            "ja": "サーチマン"
        },
        "description": {
            "en": "Aim\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "cursor",
        "codes": "S",
        "mb": 42,
        "version": "protoman",
        "stars": 3,
        "damage": 20,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "SerchMnSP",
            "ja": "サーチマンSP"
        },
        "description": {
            "en": "Aim\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "cursor",
        "codes": "S",
        "mb": 72,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "SerchMnDS",
            "ja": "サーチマンDS"
        },
        "description": {
            "en": "Aim\nand fire\n5 shots",
            "ja": "サイトをボタンで\nとめて 5れんしゃ\nのスコープガン！"
        },
        "element": "cursor",
        "codes": "S",
        "mb": 72,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "MagnetMn",
            "ja": "マグネットマン"
        },
        "description": {
            "en": "NS tackle\nand chrge",
            "ja": "前方へNSタックル\nでとっしんする！"
        },
        "element": "elec",
        "codes": "M",
        "mb": 25,
        "version": "protoman",
        "stars": 3,
        "damage": 90,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "MagntMnSP",
            "ja": "マグネットマンSP"
        },
        "description": {
            "en": "NS tackle\nand chrge",
            "ja": "前方へNSタックル\nでとっしんする！"
        },
        "element": "elec",
        "codes": "M",
        "mb": 75,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "MagntMnDS",
            "ja": "マグネットマンDS"
        },
        "description": {
            "en": "NS tackle\nand chrge",
            "ja": "前方へNSタックル\nでとっしんする！"
        },
        "element": "elec",
        "codes": "M",
        "mb": 75,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 37,
        "name": {
            "en": "Meddy",
            "ja": "メディ"
        },
        "description": {
            "en": "Throw 2\nbombs to\nenmy area",
            "ja": "カプセルボムを2コ\nてきのエリアに\nなげこむ！"
        },
        "element": "null",
        "codes": "M",
        "mb": 36,
        "version": "protoman",
        "stars": 3,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 38,
        "name": {
            "en": "MeddySP",
            "ja": "メディSP"
        },
        "description": {
            "en": "Throw 2\nbombs to\nenmy area",
            "ja": "カプセルボムを2コ\nてきのエリアに\nなげこむ！"
        },
        "element": "null",
        "codes": "M",
        "mb": 63,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 39,
        "name": {
            "en": "MeddyDS",
            "ja": "メディDS"
        },
        "description": {
            "en": "Throw 2\nbombs to\nenmy area",
            "ja": "カプセルボムを2コ\nてきのエリアに\nなげこむ！"
        },
        "element": "null",
        "codes": "M",
        "mb": 63,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "ProtoMan",
            "ja": "ブルース"
        },
        "description": {
            "en": "Move in\nand slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 54,
        "version": "protoman",
        "stars": 3,
        "damage": 130,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
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
        "mb": 79,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "ProtoMnDS",
            "ja": "ブルースDS"
        },
        "description": {
            "en": "Move in\nand slice\nthe enemy",
            "ja": "てきの前にいって\nきりつけてまわる\nいけないばあいも"
        },
        "element": "sword",
        "codes": "B",
        "mb": 79,
        "version": "protoman",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 28,
        "name": {
            "en": "NumbrMan",
            "ja": "ナンバーマン"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "null",
        "codes": "N",
        "mb": 33,
        "version": "colonel",
        "stars": 3,
        "damage": 30,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 29,
        "name": {
            "en": "NumbrMnSP",
            "ja": "ナンバーマンSP"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "null",
        "codes": "N",
        "mb": 66,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 30,
        "name": {
            "en": "NumbrMnDS",
            "ja": "ナンバーマンDS"
        },
        "description": {
            "en": "Bomb 3\nahead!\nHits 9sq",
            "ja": "3マス前方にボム！\n攻撃力は出目しだい\n9マス分にばくはつ"
        },
        "element": "null",
        "codes": "N",
        "mb": 66,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 22,
        "name": {
            "en": "Colonel",
            "ja": "カーネル"
        },
        "description": {
            "en": "Slice\nenemy in\nsame row",
            "ja": "おなじれつ前方の\nてきを 右あがりの\nななめにきりつける"
        },
        "element": "null",
        "codes": "C",
        "mb": 39,
        "version": "colonel",
        "stars": 3,
        "damage": 160,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 23,
        "name": {
            "en": "ColonelSP",
            "ja": "カーネルSP"
        },
        "description": {
            "en": "Slice\nenemy in\nsame row",
            "ja": "おなじれつ前方の\nてきを 右あがりの\nななめにきりつける"
        },
        "element": "null",
        "codes": "C",
        "mb": 75,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 24,
        "name": {
            "en": "ColonelDS",
            "ja": "カーネルDS"
        },
        "description": {
            "en": "Slice\nenemy in\nsame row",
            "ja": "おなじれつ前方の\nてきを 右あがりの\nななめにきりつける"
        },
        "element": "null",
        "codes": "C",
        "mb": 75,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 25,
        "name": {
            "en": "ShadoMan",
            "ja": "シャドーマン"
        },
        "description": {
            "en": "Throw 3\nninja\nstars",
            "ja": "てきのいるマスに\n3まいのしゅりけん\nをなげつける！"
        },
        "element": "null",
        "codes": "S",
        "mb": 50,
        "version": "colonel",
        "stars": 3,
        "damage": 40,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 26,
        "name": {
            "en": "ShadoMnSP",
            "ja": "シャドーマンSP"
        },
        "description": {
            "en": "Throw 3\nninja\nstars",
            "ja": "てきのいるマスに\n3まいのしゅりけん\nをなげつける！"
        },
        "element": "null",
        "codes": "S",
        "mb": 80,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 27,
        "name": {
            "en": "ShadoMnDS",
            "ja": "シャドーマンDS"
        },
        "description": {
            "en": "Throw 3\nninja\nstars",
            "ja": "てきのいるマスに\n3まいのしゅりけん\nをなげつける！"
        },
        "element": "null",
        "codes": "S",
        "mb": 80,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 31,
        "name": {
            "en": "TmhwkMan",
            "ja": "トマホークマン"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3マス\nをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "mb": 41,
        "version": "colonel",
        "stars": 3,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 32,
        "name": {
            "en": "TmhwkMnSP",
            "ja": "トマホークマンSP"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3マス\nをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "mb": 81,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 33,
        "name": {
            "en": "TmhwkMnDS",
            "ja": "トマホークマンDS"
        },
        "description": {
            "en": "Slice 2sq\nside,3sq\nvertical",
            "ja": "よこ2､たて3マス\nをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "mb": 81,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 34,
        "name": {
            "en": "KnightMn",
            "ja": "ナイトマン"
        },
        "description": {
            "en": "Circle\naround\nand atk",
            "ja": "じぶんのしゅういを\nかいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 50,
        "version": "colonel",
        "stars": 3,
        "damage": 170,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "KnigtMnSP",
            "ja": "ナイトマンSP"
        },
        "description": {
            "en": "Circle\naround\nand atk",
            "ja": "じぶんのしゅういを\nかいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 90,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 36,
        "name": {
            "en": "KnigtMnDS",
            "ja": "ナイトマンDS"
        },
        "description": {
            "en": "Circle\naround\nand atk",
            "ja": "じぶんのしゅういを\nかいてんする\nてっきゅう攻撃！"
        },
        "element": "null",
        "codes": "K",
        "mb": 90,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 37,
        "name": {
            "en": "ToadMan",
            "ja": "トードマン"
        },
        "description": {
            "en": "Sing and\nparalyze\nthe enemy",
            "ja": "マヒこうかのある\nうたをはなつ\nついびしてすすむ"
        },
        "element": "elec",
        "codes": "T",
        "mb": 53,
        "version": "colonel",
        "stars": 3,
        "damage": 80,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 38,
        "name": {
            "en": "ToadManSP",
            "ja": "トードマンSP"
        },
        "description": {
            "en": "Sing and\nparalyze\nthe enemy",
            "ja": "マヒこうかのある\nうたをはなつ\nついびしてすすむ"
        },
        "element": "elec",
        "codes": "T",
        "mb": 69,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 39,
        "name": {
            "en": "ToadManDS",
            "ja": "トードマンDS"
        },
        "description": {
            "en": "Sing and\nparalyze\nthe enemy",
            "ja": "マヒこうかのある\nうたをはなつ\nついびしてすすむ"
        },
        "element": "elec",
        "codes": "T",
        "mb": 69,
        "version": "colonel",
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 43,
        "name": {
            "en": "ShadeMan",
            "ja": "シェードマン"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "S",
        "mb": 44,
        "version": null,
        "stars": 3,
        "damage": 120,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 44,
        "name": {
            "en": "ShadeMnSP",
            "ja": "シェードマンSP"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "S",
        "mb": 74,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 45,
        "name": {
            "en": "ShadeMnDS",
            "ja": "シェードマンDS"
        },
        "description": {
            "en": "CrshNoise\nattck all\ndirection",
            "ja": "ほうしゃじょうに\nちょうおんぱ攻撃\nクラッシュノイズ！"
        },
        "element": "null",
        "codes": "S",
        "mb": 74,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 40,
        "name": {
            "en": "BlizMan",
            "ja": "ブリザードマン"
        },
        "description": {
            "en": "Snowball\nexpands\nwhen hit",
            "ja": "前方にゆきだま！\nものにあたると\nまきこんで大きく！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 27,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 41,
        "name": {
            "en": "BlizManSP",
            "ja": "ブリザードマンSP"
        },
        "description": {
            "en": "Snowball\nexpands\nwhen hit",
            "ja": "前方にゆきだま！\nものにあたると\nまきこんで大きく！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 42,
        "name": {
            "en": "BlizManDS",
            "ja": "ブリザードマンDS"
        },
        "description": {
            "en": "Snowball\nexpands\nwhen hit",
            "ja": "前方にゆきだま！\nものにあたると\nまきこんで大きく！"
        },
        "element": "aqua",
        "codes": "B",
        "mb": 55,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 46,
        "name": {
            "en": "CloudMan",
            "ja": "クラウドマン"
        },
        "description": {
            "en": "Thndr atk\nbehind\nthe enmy",
            "ja": "てきのはいごに\nクラウドをうみだし\nカミナリ攻撃！"
        },
        "element": "elec",
        "codes": "C",
        "mb": 60,
        "version": null,
        "stars": 3,
        "damage": 50,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 47,
        "name": {
            "en": "CloudMnSP",
            "ja": "クラウドマンSP"
        },
        "description": {
            "en": "Thndr atk\nbehind\nthe enmy",
            "ja": "てきのはいごに\nクラウドをうみだし\nカミナリ攻撃！"
        },
        "element": "elec",
        "codes": "C",
        "mb": 74,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 48,
        "name": {
            "en": "CloudMnDS",
            "ja": "クラウドマンDS"
        },
        "description": {
            "en": "Thndr atk\nbehind\nthe enmy",
            "ja": "てきのはいごに\nクラウドをうみだし\nカミナリ攻撃！"
        },
        "element": "elec",
        "codes": "C",
        "mb": 74,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 49,
        "name": {
            "en": "CosmoMan",
            "ja": "コスモマン"
        },
        "description": {
            "en": "Meteors\nhit enemy",
            "ja": "そらにあなをあけて\nいんせきをふらせる"
        },
        "element": "null",
        "codes": "C",
        "mb": 50,
        "version": null,
        "stars": 3,
        "damage": 70,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 50,
        "name": {
            "en": "CosmoMnSP",
            "ja": "コスモマンSP"
        },
        "description": {
            "en": "Meteors\nhit enemy",
            "ja": "そらにあなをあけて\nいんせきをふらせる"
        },
        "element": "null",
        "codes": "C",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 51,
        "name": {
            "en": "CosmoMnDS",
            "ja": "コスモマンDS"
        },
        "description": {
            "en": "Meteors\nhit enemy",
            "ja": "そらにあなをあけて\nいんせきをふらせる"
        },
        "element": "null",
        "codes": "C",
        "mb": 80,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 52,
        "name": {
            "en": "LarkMan",
            "ja": "スワローマン"
        },
        "description": {
            "en": "Whirl\nforward\nand atk",
            "ja": "2マス前方をとおる\nルートでせんかいし\nてきを攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": 45,
        "version": null,
        "stars": 3,
        "damage": 140,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 53,
        "name": {
            "en": "LarkManSP",
            "ja": "スワローマンSP"
        },
        "description": {
            "en": "Whirl\nforward\nand atk",
            "ja": "2マス前方をとおる\nルートでせんかいし\nてきを攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": 77,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 54,
        "name": {
            "en": "LarkManDS",
            "ja": "スワローマンDS"
        },
        "description": {
            "en": "Whirl\nforward\nand atk",
            "ja": "2マス前方をとおる\nルートでせんかいし\nてきを攻撃！"
        },
        "element": "null",
        "codes": "S",
        "mb": 77,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 55,
        "name": {
            "en": "GridMan",
            "ja": "フットマン"
        },
        "description": {
            "en": "Explodes\nwhen\ntouchdown",
            "ja": "ななめ上へかけだし\nゴールにたっすると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "F",
        "mb": 46,
        "version": null,
        "stars": 3,
        "damage": 100,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 56,
        "name": {
            "en": "GridManSP",
            "ja": "フットマンSP"
        },
        "description": {
            "en": "Explodes\nwhen\ntouchdown",
            "ja": "ななめ上へかけだし\nゴールにたっすると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "F",
        "mb": 72,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 57,
        "name": {
            "en": "GridManDS",
            "ja": "フットマンDS"
        },
        "description": {
            "en": "Explodes\nwhen\ntouchdown",
            "ja": "ななめ上へかけだし\nゴールにたっすると\n大ばくはつをおこす"
        },
        "element": "null",
        "codes": "F",
        "mb": 72,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 58,
        "name": {
            "en": "Django",
            "ja": "ジャンゴ"
        },
        "description": {
            "en": "Burns\nwith\nsunlight",
            "ja": "前方のてきを\nかんおけにとじこめ\nたいよう光で攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 40,
        "version": null,
        "stars": 3,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 59,
        "name": {
            "en": "DjangoSP",
            "ja": "ジャンゴSP"
        },
        "description": {
            "en": "Burns\nwith\nsunlight",
            "ja": "前方のてきを\nかんおけにとじこめ\nたいよう光で攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 68,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
    },
    {
        "section": "mega",
        "index": 60,
        "name": {
            "en": "DjangoDS",
            "ja": "ジャンゴDS"
        },
        "description": {
            "en": "Burns\nwith\nsunlight",
            "ja": "前方のてきを\nかんおけにとじこめ\nたいよう光で攻撃！"
        },
        "element": "null",
        "codes": "D",
        "mb": 68,
        "version": null,
        "stars": 4,
        "damage": null,
        "class": "mega"
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
    {
        "section": "giga",
        "index": 3,
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
        "version": "protoman",
        "stars": 5,
        "damage": 60,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
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
        "version": "protoman",
        "stars": 5,
        "damage": 220,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "BugCurse",
            "ja": "カースオブバグ"
        },
        "description": {
            "en": "Make\nenemy\nbuggy!",
            "ja": "あいてをひどい\nバグじょうたいに\nしてしまう！"
        },
        "element": "null",
        "codes": "C",
        "mb": 73,
        "version": "protoman",
        "stars": 5,
        "damage": null,
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
        "codes": "M",
        "mb": 90,
        "version": "colonel",
        "stars": 5,
        "damage": 100,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "OmegaRkt",
            "ja": "オメガロケット"
        },
        "description": {
            "en": "A rocket\nmoves\nstraight",
            "ja": "まん中のれつを\nまっすぐすすむ\nきょだいロケット！"
        },
        "element": "null",
        "codes": "R",
        "mb": 89,
        "version": "colonel",
        "stars": 5,
        "damage": 270,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 3,
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
        "version": "colonel",
        "stars": 5,
        "damage": 160,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 4,
        "name": {
            "en": "HolyDrem",
            "ja": "ホーリードリーム"
        },
        "description": {
            "en": "Holy shot\nsucks in\nHolyPanl!",
            "ja": "ホーリーパネルを\nすいこんで前方へ\nホーリーショット！"
        },
        "element": "null",
        "codes": "H",
        "mb": 92,
        "version": "protoman",
        "stars": 5,
        "damage": 50,
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
        "codes": "G",
        "mb": 92,
        "version": "protoman",
        "stars": 5,
        "damage": 240,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 1,
        "name": {
            "en": "CrossDiv",
            "ja": "クロスディバイド"
        },
        "description": {
            "en": "Cross-\nslice!",
            "ja": "前方のてきを\nクロスにきりつける"
        },
        "element": "null",
        "codes": "C",
        "mb": 90,
        "version": "colonel",
        "stars": 5,
        "damage": 220,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 5,
        "name": {
            "en": "BugCharg",
            "ja": "バグチャージ"
        },
        "description": {
            "en": "All your\nbugs will\nattack!",
            "ja": "はっせいしている\nバグの分だけ､バグ\nもろともはっしゃ！"
        },
        "element": "null",
        "codes": "B",
        "mb": 77,
        "version": "colonel",
        "stars": 5,
        "damage": 200,
        "class": "giga"
    },
    {
        "section": "secret",
        "index": 21,
        "name": {
            "en": "LeaderR",
            "ja": "リーダーズレイド"
        },
        "description": {
            "en": "ProtoMan\n& Colonel\ntogether!",
            "ja": "ブルースとカーネル\nリーダーどうしが\nゆめのきょうえん！"
        },
        "element": "null",
        "codes": "L",
        "mb": 99,
        "version": "doubleteam",
        "stars": 5,
        "damage": 200,
        "class": "mega"
    },
    {
        "section": "secret",
        "index": 22,
        "name": {
            "en": "ChaosL",
            "ja": "ロードオブカオス"
        },
        "description": {
            "en": "Hatred\nformed\ninto Bass",
            "ja": "にくしみのパワーが\nフォルテにへんしん\nカオスナイトメア！"
        },
        "element": "null",
        "codes": "X",
        "mb": 99,
        "version": "doubleteam",
        "stars": 5,
        "damage": 500,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 6,
        "name": {
            "en": "Phoenix",
            "ja": "フェニックス"
        },
        "description": {
            "en": "Fire Atk!\nRecover\nHP,too!",
            "ja": "フィールドまん中に\nふりそそぐ火炎！\nさらにHPかいふく"
        },
        "element": "fire",
        "codes": "P",
        "mb": 95,
        "version": "colonel",
        "stars": 5,
        "damage": 150,
        "class": "giga"
    },
    {
        "section": "giga",
        "index": 6,
        "name": {
            "en": "DethPhnx",
            "ja": "デスフェニックス"
        },
        "description": {
            "en": "Fire Atk!\nRecycle\nNavi too",
            "ja": "フィールド中に\nヤミの炎､さらに\nナビをリサイクル！"
        },
        "element": "null",
        "codes": "D",
        "mb": 93,
        "version": "protoman",
        "stars": 5,
        "damage": 150,
        "class": "giga"
    },
    {
        "name": {
            "en": "BatCan1",
            "ja": "バットキャノン1"
        },
        "description": {
            "en": "Dstb Atk!\nAbnormal\nstatus",
            "ja": "あてるとゾクタイに\nステータスいじょう\nのオジャマ攻撃！"
        }
    },
    {
        "name": {
            "en": "BatCan2",
            "ja": "バットキャノン2"
        },
        "description": {
            "en": "Dstb Atk!\nCrows\nflock",
            "ja": "あてるとゾクタイの\n方にカラスがあらわ\nれるオジャマ攻撃！"
        }
    },
    {
        "name": {
            "en": "BatCan3",
            "ja": "バットキャノン3"
        },
        "description": {
            "en": "Recover\nShadeMan\nHP",
            "ja": "あてるとゾクタイの\nシェードマンHPを\nかいふくさせる！"
        }
    },
    {
        "name": {
            "en": "BatCan4",
            "ja": "バットキャノン4"
        },
        "description": {
            "en": "Dstb Atk!\n3 Disturb\nAttacks!",
            "ja": "あてるとゾクタイに\n3しゅるいの\nオジャマ攻撃をする"
        }
    },
    null,
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
        ],
        "damage": 400
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
        ],
        "damage": 500
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
        ],
        "damage": 600
    },
    {
        "section": "pa",
        "index": 4,
        "name": {
            "en": "InfVulc1",
            "ja": "ムゲンバルカン1"
        },
        "description": {
            "en": "20-shot\ndeadly\nmachine!",
            "ja": "前方のてきに\n20れんしゃの\nひっさつバルカン！"
        },
        "pa": [
            [
                {
                    "id": 15,
                    "variant": 0
                },
                {
                    "id": 15,
                    "variant": 1
                },
                {
                    "id": 15,
                    "variant": 2
                }
            ]
        ],
        "damage": 20
    },
    {
        "section": "pa",
        "index": 5,
        "name": {
            "en": "InfVulc2",
            "ja": "ムゲンバルカン2"
        },
        "description": {
            "en": "24-shot\ndeadly\nmachine!",
            "ja": "前方のてきに\n24れんしゃの\nひっさつバルカン！"
        },
        "pa": [
            [
                {
                    "id": 16,
                    "variant": 0
                },
                {
                    "id": 16,
                    "variant": 1
                },
                {
                    "id": 16,
                    "variant": 2
                }
            ]
        ],
        "damage": 20
    },
    {
        "section": "pa",
        "index": 6,
        "name": {
            "en": "InfVulc3",
            "ja": "ムゲンバルカン3"
        },
        "description": {
            "en": "28-shot\ndeadly\nmachine!",
            "ja": "前方のてきに\n28れんしゃの\nひっさつバルカン！"
        },
        "pa": [
            [
                {
                    "id": 17,
                    "variant": 0
                },
                {
                    "id": 17,
                    "variant": 1
                },
                {
                    "id": 17,
                    "variant": 2
                }
            ]
        ],
        "damage": 20
    },
    {
        "section": "pa",
        "index": 7,
        "name": {
            "en": "Boxer1",
            "ja": "マッドボクサー1"
        },
        "description": {
            "en": "Rapid\npunch\nall enemy",
            "ja": "前方のかくれつに\n炎のパンチを\nれんぞくではなつ！"
        },
        "pa": [
            [
                {
                    "id": 151,
                    "variant": 0
                },
                {
                    "id": 151,
                    "variant": 1
                },
                {
                    "id": 151,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 8,
        "name": {
            "en": "Boxer2",
            "ja": "マッドボクサー2"
        },
        "description": {
            "en": "Rapid\npunch\nall enemy",
            "ja": "前方のかくれつに\n炎のパンチを\nれんぞくではなつ！"
        },
        "pa": [
            [
                {
                    "id": 152,
                    "variant": 0
                },
                {
                    "id": 152,
                    "variant": 1
                },
                {
                    "id": 152,
                    "variant": 2
                }
            ]
        ],
        "damage": 150
    },
    {
        "section": "pa",
        "index": 9,
        "name": {
            "en": "Boxer3",
            "ja": "マッドボクサー3"
        },
        "description": {
            "en": "Rapid\npunch\nall enemy",
            "ja": "前方のかくれつに\n炎のパンチを\nれんぞくではなつ！"
        },
        "pa": [
            [
                {
                    "id": 153,
                    "variant": 0
                },
                {
                    "id": 153,
                    "variant": 1
                },
                {
                    "id": 153,
                    "variant": 2
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 10,
        "name": {
            "en": "SuprSpr1",
            "ja": "スーパーワイド1"
        },
        "description": {
            "en": "3-shot\npiercing\nWideSht",
            "ja": "かんつうする\nワイドショットを\n3れんしゃ！"
        },
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
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 11,
        "name": {
            "en": "SuprSpr2",
            "ja": "スーパーワイド2"
        },
        "description": {
            "en": "3-shot\npiercing\nWideSht",
            "ja": "かんつうする\nワイドショットを\n3れんしゃ！"
        },
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
            ]
        ],
        "damage": 120
    },
    {
        "section": "pa",
        "index": 12,
        "name": {
            "en": "SuprSpr3",
            "ja": "スーパーワイド3"
        },
        "description": {
            "en": "3-shot\npiercing\nWideSht",
            "ja": "かんつうする\nワイドショットを\n3れんしゃ！"
        },
        "pa": [
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
        ],
        "damage": 140
    },
    {
        "section": "pa",
        "index": 13,
        "name": {
            "en": "ShakPar1",
            "ja": "ユラパレード1"
        },
        "description": {
            "en": "Shakeys\nParalyze\nthe enmy",
            "ja": "ゆれながらすすむ\nユラのパレード！\nあいてをマヒに！"
        },
        "pa": [
            [
                {
                    "id": 24,
                    "variant": 0
                },
                {
                    "id": 24,
                    "variant": 1
                },
                {
                    "id": 24,
                    "variant": 2
                }
            ]
        ],
        "damage": 80
    },
    {
        "section": "pa",
        "index": 14,
        "name": {
            "en": "ShakPar2",
            "ja": "ユラパレード2"
        },
        "description": {
            "en": "Shakeys\nParalyze\nthe enmy",
            "ja": "ゆれながらすすむ\nユラのパレード！\nあいてをマヒに！"
        },
        "pa": [
            [
                {
                    "id": 25,
                    "variant": 0
                },
                {
                    "id": 25,
                    "variant": 1
                },
                {
                    "id": 25,
                    "variant": 2
                }
            ]
        ],
        "damage": 110
    },
    {
        "section": "pa",
        "index": 15,
        "name": {
            "en": "ShakPar3",
            "ja": "ユラパレード3"
        },
        "description": {
            "en": "Shakeys\nParalyze\nthe enmy",
            "ja": "ゆれながらすすむ\nユラのパレード！\nあいてをマヒに！"
        },
        "pa": [
            [
                {
                    "id": 26,
                    "variant": 0
                },
                {
                    "id": 26,
                    "variant": 1
                },
                {
                    "id": 26,
                    "variant": 2
                }
            ]
        ],
        "damage": 140
    },
    {
        "section": "pa",
        "index": 16,
        "name": {
            "en": "CacDanc1",
            "ja": "サボテンダンス1"
        },
        "description": {
            "en": "Balls of\ncacti atk\nthe enmy",
            "ja": "てきエリアに\nサボテンボールが\nふりそそぎつづける"
        },
        "pa": [
            [
                {
                    "id": 175,
                    "variant": 0
                },
                {
                    "id": 175,
                    "variant": 1
                },
                {
                    "id": 175,
                    "variant": 2
                }
            ]
        ],
        "damage": 30
    },
    {
        "section": "pa",
        "index": 17,
        "name": {
            "en": "CacDanc2",
            "ja": "サボテンダンス2"
        },
        "description": {
            "en": "Balls of\ncacti atk\nthe enmy",
            "ja": "てきエリアに\nサボテンボールが\nふりそそぎつづける"
        },
        "pa": [
            [
                {
                    "id": 176,
                    "variant": 0
                },
                {
                    "id": 176,
                    "variant": 1
                },
                {
                    "id": 176,
                    "variant": 2
                }
            ]
        ],
        "damage": 40
    },
    {
        "section": "pa",
        "index": 18,
        "name": {
            "en": "CacDanc3",
            "ja": "サボテンダンス3"
        },
        "description": {
            "en": "Balls of\ncacti atk\nthe enmy",
            "ja": "てきエリアに\nサボテンボールが\nふりそそぎつづける"
        },
        "pa": [
            [
                {
                    "id": 177,
                    "variant": 0
                },
                {
                    "id": 177,
                    "variant": 1
                },
                {
                    "id": 177,
                    "variant": 2
                }
            ]
        ],
        "damage": 50
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
        "pa": [
            [
                {
                    "id": 18,
                    "variant": 0
                },
                {
                    "id": 18,
                    "variant": 1
                },
                {
                    "id": 18,
                    "variant": 2
                }
            ]
        ],
        "damage": 50
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
        "pa": [
            [
                {
                    "id": 48,
                    "variant": 2
                },
                {
                    "id": 49,
                    "variant": 1
                },
                {
                    "id": 50,
                    "variant": 2
                }
            ],
            [
                {
                    "id": 48,
                    "variant": 1
                },
                {
                    "id": 51,
                    "variant": 1
                },
                {
                    "id": 52,
                    "variant": 1
                }
            ]
        ],
        "damage": 400
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
        "pa": [
            [
                {
                    "id": 82,
                    "variant": 0
                },
                {
                    "id": 82,
                    "variant": 1
                },
                {
                    "id": 82,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
    },
    {
        "section": "pa",
        "index": 22,
        "name": {
            "en": "PitHoky",
            "ja": "ジゴクホッケー"
        },
        "description": {
            "en": "Reflect\nhockey\nattack",
            "ja": "はんしゃしながら\nすすむきょうふの\nホッケー攻撃！"
        },
        "pa": [
            [
                {
                    "id": 5,
                    "variant": 0
                },
                {
                    "id": 5,
                    "variant": 1
                },
                {
                    "id": 5,
                    "variant": 2
                }
            ]
        ],
        "damage": 100
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
        "pa": [
            [
                {
                    "id": 41,
                    "variant": 0
                },
                {
                    "id": 125,
                    "variant": 0
                },
                {
                    "id": 204,
                    "variant": 0
                }
            ]
        ],
        "damage": null
    },
    {
        "section": "pa",
        "index": 24,
        "name": {
            "en": "CsmoPris",
            "ja": "コスモプリズン"
        },
        "description": {
            "en": "Planet\nfrom Csmo\nholes",
            "ja": "コスモホールから\nわくせいをよびだし\n攻撃する！"
        },
        "pa": [
            [
                {
                    "id": 106,
                    "variant": 0
                },
                {
                    "id": 106,
                    "variant": 0
                },
                {
                    "id": 270,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 106,
                    "variant": 0
                },
                {
                    "id": 106,
                    "variant": 0
                },
                {
                    "id": 271,
                    "variant": 0
                }
            ]
        ],
        "damage": 60
    },
    {
        "section": "pa",
        "index": 25,
        "name": {
            "en": "WildBird",
            "ja": "ワイルドスワロー"
        },
        "description": {
            "en": "Ahead 2\nspin 3\nand atk",
            "ja": "2マス前方をとぶ\nきどうで3かいてん\nとびまわり攻撃！"
        },
        "pa": [
            [
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 273,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 60,
                    "variant": 2
                },
                {
                    "id": 274,
                    "variant": 0
                }
            ]
        ],
        "damage": 200
    },
    {
        "section": "pa",
        "index": 26,
        "name": {
            "en": "Football",
            "ja": "フットメガボール"
        },
        "description": {
            "en": "Kick a\nball to\nenmy area",
            "ja": "てきエリアに\n4マスはんい攻撃の\nボールをけりこむ！"
        },
        "pa": [
            [
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 276,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 13,
                    "variant": 1
                },
                {
                    "id": 277,
                    "variant": 0
                }
            ]
        ],
        "damage": 180
    },
    {
        "section": "pa",
        "index": 27,
        "name": {
            "en": "BigNoise",
            "ja": "ビッグノイズ"
        },
        "description": {
            "en": "Generates\nultrasonc\nwaves!",
            "ja": "4マス前方まで\nとどく きょだい\nちょうおんぱ！！"
        },
        "pa": [
            [
                {
                    "id": 23,
                    "variant": 2
                },
                {
                    "id": 23,
                    "variant": 2
                },
                {
                    "id": 261,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 23,
                    "variant": 2
                },
                {
                    "id": 23,
                    "variant": 2
                },
                {
                    "id": 262,
                    "variant": 0
                }
            ]
        ],
        "damage": 400
    },
    {
        "section": "pa",
        "index": 28,
        "name": {
            "en": "TimeBom+",
            "ja": "ギガカウントボム"
        },
        "description": {
            "en": "Set Giga\nTimeBomb\nsomewhere",
            "ja": "てきエリアのどこか\nにギガカウントボム\nをはっせいさせる！"
        },
        "pa": [
            [
                {
                    "id": 75,
                    "variant": 0
                },
                {
                    "id": 76,
                    "variant": 1
                },
                {
                    "id": 77,
                    "variant": 1
                }
            ]
        ],
        "damage": 600
    },
    {
        "section": "pa",
        "index": 29,
        "name": {
            "en": "BodyGrd",
            "ja": "ボディガード"
        },
        "description": {
            "en": "Bodyguard\nthrows\nninjastar",
            "ja": "ようじんぼうが\nしゅりけんをなげ\n攻撃してくれる！"
        },
        "pa": [
            [
                {
                    "id": 145,
                    "variant": 2
                },
                {
                    "id": 144,
                    "variant": 0
                },
                {
                    "id": 202,
                    "variant": 0
                }
            ]
        ],
        "damage": 70
    },
    {
        "section": "pa",
        "index": 30,
        "name": {
            "en": "PileDrvr",
            "ja": "パイルドライバー"
        },
        "description": {
            "en": "Places a\nPileDrvr\nto attack",
            "ja": "目の前のマスに\nパイルドライバーを\nおいて前方を攻撃！"
        },
        "pa": [
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 279,
                    "variant": 0
                }
            ],
            [
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 34,
                    "variant": 0
                },
                {
                    "id": 280,
                    "variant": 0
                }
            ]
        ],
        "damage": 30
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
        "section": "capsule",
        "index": 1,
        "name": {
            "en": "YelCapsl",
            "ja": "イエローカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nConfuse",
            "ja": "1つ前にえらんだ\n攻撃チップに\nこんらんをつける"
        },
        "element": null,
        "codes": "",
        "version": "protoman",
        "damage": null,
        "class": "capsule"
    },
    {
        "section": "capsule",
        "index": 2,
        "name": {
            "en": "BlkCapsl",
            "ja": "ブラックカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nBlind",
            "ja": "1つ前にえらんだ\n攻撃チップに\nもうもくをつける"
        },
        "element": null,
        "codes": "",
        "version": "protoman",
        "damage": null,
        "class": "capsule"
    },
    {
        "section": "capsule",
        "index": 3,
        "name": {
            "en": "WhiCapsl",
            "ja": "ホワイトカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nParalyze",
            "ja": "1つ前にえらんだ\n攻撃チップに\nマヒこうかをつける"
        },
        "element": null,
        "codes": "",
        "version": "protoman",
        "damage": null,
        "class": "capsule"
    },
    {
        "section": "capsule",
        "index": 4,
        "name": {
            "en": "PrpCapsl",
            "ja": "パープルカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nHP Bug",
            "ja": "1つ前にえらんだ\n攻撃チップに\nHPバグをつける"
        },
        "element": null,
        "codes": "",
        "version": "protoman",
        "damage": null,
        "class": "capsule"
    },
    {
        "section": "capsule",
        "index": 5,
        "name": {
            "en": "PnkCapsl",
            "ja": "ピンクカプセル"
        },
        "description": {
            "en": "Add an\neffect:\nRecovery",
            "ja": "1つ前にえらんだ\n攻撃チップに\nリカバリーをつける"
        },
        "element": null,
        "codes": "",
        "version": "protoman",
        "damage": null,
        "class": "capsule"
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
    {
        "section": "special",
        "index": 1,
        "name": {
            "en": "StepSwrd",
            "ja": "フミコミザン"
        },
        "description": {
            "en": "Use\nWideSword\n2sq ahead",
            "ja": "2マス前に\nふみこんで\nワイドソード！"
        },
        "element": "sword",
        "codes": "B",
        "version": "protoman",
        "damage": 120,
        "class": "special"
    },
    {
        "section": "special",
        "index": 3,
        "name": {
            "en": "Airforce",
            "ja": "Gエアフォース"
        },
        "description": {
            "en": "Helicoptr\nstrafes\na row",
            "ja": "ヘリにへんけいして\nそのれつをとび\nばくげきしていく！"
        },
        "element": "null",
        "codes": "G",
        "version": "protoman",
        "damage": 70,
        "class": "special"
    },
    null,
    null,
    {
        "section": "special",
        "index": 5,
        "name": {
            "en": "Satelity",
            "ja": "サテライトレイ"
        },
        "description": {
            "en": "Stp cursr\nfor laser\nattack",
            "ja": "カーソルをとめて\nそのマスにクロスに\nひろがるレーザー！"
        },
        "element": "cursor",
        "codes": "S",
        "version": "protoman",
        "damage": 100,
        "class": "special"
    },
    {
        "section": "special",
        "index": 4,
        "name": {
            "en": "Napalm",
            "ja": "ナパームボム"
        },
        "description": {
            "en": "9-panel\ncross\nexplosion",
            "ja": "4マス前方のマスに\n9マス分にひろがる\nナパームボム！"
        },
        "element": "fire",
        "codes": "N",
        "version": "protoman",
        "damage": 120,
        "class": "special"
    },
    null,
    {
        "section": "special",
        "index": 2,
        "name": {
            "en": "NSTackle",
            "ja": "NSタックル"
        },
        "description": {
            "en": "NS tackle\nand chrge",
            "ja": "前方へNSタックル\nでとっしんする！"
        },
        "element": "elec",
        "codes": "M",
        "version": "protoman",
        "damage": 120,
        "class": "special"
    },
    null,
    {
        "section": "special",
        "index": 6,
        "name": {
            "en": "MeddyCap",
            "ja": "メディカプセル"
        },
        "description": {
            "en": "Throw a\nparalyzer\ncapsule",
            "ja": "マヒこうかのある\nカプセルを\n3マス前になげる！"
        },
        "element": "null",
        "codes": "M",
        "version": "protoman",
        "damage": 100,
        "class": "special"
    },
    null,
    null,
    {
        "section": "special",
        "index": 1,
        "name": {
            "en": "C-Cannon",
            "ja": "カーネルキャノン"
        },
        "description": {
            "en": "3sq blast\nif hits\nend row",
            "ja": "前方にキャノンほう\n画面はしにとどくと\nたて3マスばくふう"
        },
        "element": "null",
        "codes": "C",
        "version": "colonel",
        "damage": 120,
        "class": "special"
    },
    {
        "section": "special",
        "index": 3,
        "name": {
            "en": "SplitUp",
            "ja": "ブンシンギリ"
        },
        "description": {
            "en": "Your\nshadow\nattacks",
            "ja": "ブンシンがあらわれ\nちかいてきに\nロングソード！"
        },
        "element": "sword",
        "codes": "S",
        "version": "colonel",
        "damage": 100,
        "class": "special"
    },
    null,
    null,
    {
        "section": "special",
        "index": 5,
        "name": {
            "en": "NumTrap",
            "ja": "ナンバートラップ"
        },
        "description": {
            "en": "Set a\ntrap 2 sq\nahead",
            "ja": "2マス前方に\nナンバートラップ！\nふむとワナはつどう"
        },
        "element": "null",
        "codes": "N",
        "version": "colonel",
        "damage": 140,
        "class": "special"
    },
    {
        "section": "special",
        "index": 4,
        "name": {
            "en": "T-Swing",
            "ja": "Tスイング"
        },
        "description": {
            "en": "Slices 2\nsq side 3\nsq vrticl",
            "ja": "よこ2､たて3マス\nをきりつける\nトマホークスイング"
        },
        "element": "wood",
        "codes": "T",
        "version": "colonel",
        "damage": 120,
        "class": "special"
    },
    null,
    null,
    {
        "section": "special",
        "index": 2,
        "name": {
            "en": "KCrusher",
            "ja": "Kクラッシャー"
        },
        "description": {
            "en": "Throw an\niron ball\nahead",
            "ja": "前方へむけて\nかんつうする\nてっきゅうをはなつ"
        },
        "element": "break",
        "codes": "K",
        "version": "colonel",
        "damage": 120,
        "class": "special"
    },
    {
        "section": "special",
        "index": 6,
        "name": {
            "en": "S-Melody",
            "ja": "Sメロディー"
        },
        "description": {
            "en": "Sing and\nparalyze\nthe enemy",
            "ja": "マヒこうかのある\nうたをはなつ\nついびしてすすむ"
        },
        "element": "elec",
        "codes": "T",
        "version": "colonel",
        "damage": 80,
        "class": "special"
    }
]
;