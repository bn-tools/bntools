#!/usr/bin/env python3

import os
import shutil
import json
from mako.lookup import TemplateLookup
from fluent.runtime import FluentLocalization, FluentResourceLoader

BASE_URL = os.environ.get("CHIPLIBRARY_BASE_URL", "/chiplibrary")
OUTPUT_DIR = os.environ.get("CHIPLIBRARY_OUTPUT_DIR", "public")


mylookup = TemplateLookup(
    directories=["templates"],
    strict_undefined=True,
    default_filters=["h"],
    imports=["from filters import nl2br"],
)

try:
    shutil.rmtree(OUTPUT_DIR)
except FileNotFoundError:
    pass

os.makedirs(OUTPUT_DIR)
shutil.copytree("images", os.path.join(OUTPUT_DIR, "images"))
shutil.copy("style.css", os.path.join(OUTPUT_DIR, "style.css"))

GAME_IDS = ["1", "2", "3", "4", "5", "6"]

CODE_ORDER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*"

SECTION_ORDER = ["standard", "mega", "giga", "secret", "dark", "special", "capsule"]

LANG_ORDER = ["en", "ja"]
LANG_PREFIXES = {
    "en": "bn",
    "ja": "exe",
}


def open_output(filename):
    try:
        os.makedirs(os.path.join(OUTPUT_DIR, os.path.dirname(filename)))
    except FileExistsError:
        pass
    output_filename = os.path.join(OUTPUT_DIR, filename)
    print("generating:", output_filename)
    return open(output_filename, "w")


l10ns = [
    FluentLocalization([lang], ["main.ftl"], FluentResourceLoader("locale/{locale}"))
    for lang in LANG_ORDER
]

vars = {
    "L10NS": l10ns,
    "SITE_NAME": "chiplibrary",
    "BASE_URL": BASE_URL,
    "CHIP_PREFIXES": {
        "standard": "s",
        "mega": "m",
        "giga": "g",
        "secret": "z",
        "dark": "d",
        "special": "k",
        "capsule": "c",
    },
    "SECTION_ORDER": SECTION_ORDER,
    "CODE_ORDER": CODE_ORDER,
}

metas = {}

for game_id in GAME_IDS:
    with open(os.path.join("data", game_id, "meta.json"), "r") as f:
        meta = json.load(f)
    metas[game_id] = meta

    vars = {
        **vars,
        "META": meta,
    }

    version_order = [version["id"] for version in meta.get("versions", [])]

    with open(os.path.join("data", game_id, "chips.json"), "r") as f:
        chips = json.load(f)

    sorted_chips1 = sorted(
        (
            chip
            for chip in chips
            if chip is not None
            and chip.get("index") is not None
            and chip.get("section") != "pa"
        ),
        key=lambda c: (
            SECTION_ORDER.index(c["section"]),
            c["index"],
            version_order.index(c["version"])
            if c["version"] is not None
            else float("inf"),
        ),
    )

    sorted_chips = []
    versiongroup = {}
    for chip in sorted_chips1:
        if chip["version"] is not None or any(
            c["index"] == chip["index"] and c["section"] == chip["section"]
            for cs in versiongroup.values()
            for c in cs
        ):
            versiongroup.setdefault(chip["version"], []).append(chip)
            continue

        if versiongroup:
            for _, g in sorted(
                versiongroup.items(),
                key=lambda kv: version_order.index(kv[0])
                if kv[0] is not None
                else float("inf"),
            ):
                sorted_chips.extend(g)
            versiongroup = {}

        sorted_chips.append(chip)

    if versiongroup:
        for _, g in sorted(
            versiongroup.items(),
            key=lambda kv: version_order.index(kv[0])
            if kv[0] is not None
            else float("inf"),
        ):
            sorted_chips.extend(g)
        versiongroup = {}

    pas = sorted(
        (chip for chip in chips if chip is not None and chip.get("section") == "pa"),
        key=lambda c: c["index"],
    )

    chips_by_section = {}
    for chip in sorted_chips:
        chips_by_section.setdefault(chip["section"], []).append(chip)

    with open_output(os.path.join(game_id, "index.html")) as f:
        f.write(
            mylookup.get_template("[game]/index.html.mako").render(
                **{
                    **vars,
                    "game_id": game_id,
                    "versions": {v["id"]: v for v in meta.get("versions", [])},
                    "all_chips": chips,
                    "chips_by_section": chips_by_section,
                    "pas": pas,
                }
            )
        )

    chips_by_code = {}
    for chip in sorted_chips:
        for code in chip["codes"]:
            chips_by_code.setdefault(code, []).append(chip)

    with open_output(os.path.join(game_id, "by-code", "index.html")) as f:
        f.write(
            mylookup.get_template("[game]/by-code/index.html.mako").render(
                **{
                    **vars,
                    "game_id": game_id,
                    "versions": {v["id"]: v for v in meta.get("versions", [])},
                    "chips_by_code": chips_by_code,
                }
            )
        )

    chips_by_element = {}
    for chip in sorted_chips:
        if chip["element"] is None:
            continue
        chips_by_element.setdefault(chip["element"], []).append(chip)

    with open_output(os.path.join(game_id, "by-element", "index.html")) as f:
        f.write(
            mylookup.get_template("[game]/by-element/index.html.mako").render(
                **{
                    **vars,
                    "game_id": game_id,
                    "versions": {v["id"]: v for v in meta.get("versions", [])},
                    "chips_by_element": chips_by_element,
                }
            )
        )

with open_output("index.html") as f:
    f.write(
        mylookup.get_template("index.html.mako").render(
            **{
                **vars,
                "games": GAME_IDS,
                "metas": metas,
            }
        )
    )
