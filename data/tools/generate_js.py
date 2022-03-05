#!/usr/bin/env python3

import os
import shutil

OUTPUT_DIR = os.environ.get("DATA_OUTPUT_DIR", "public")

for game_id in ["1", "2", "3", "4", "5", "6"]:
    for fn in os.listdir(game_id):
        name, ext = os.path.splitext(fn)
        if ext != ".json":
            continue

        try:
            os.makedirs(os.path.join(OUTPUT_DIR, game_id))
        except FileExistsError:
            pass

        with open(os.path.join(OUTPUT_DIR, game_id, name + ".js"), "w") as f:
            print("generating " + game_id + "/" + name + ".js")
            f.write("const DATA_" + game_id + "_" + name + " = ")
            with open(os.path.join(game_id, fn)) as f2:
                shutil.copyfileobj(f2, f)
            f.write(";")
