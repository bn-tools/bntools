#!/bin/bash

rm -rf public
mkdir -p public
cp -r CNAME index.html fullcust common zsaver public

chiplibrary_output_dir="$(pwd)/public/chiplibrary"
pushd chiplibrary || exit 1
pip3 install -r requirements.txt
CHIPLIBRARY_OUTPUT_DIR="${chiplibrary_output_dir}" ./generate.py
popd || exit 1

data_output_dir="$(pwd)/public/data"
pushd data || exit 1
DATA_OUTPUT_DIR="${data_output_dir}" ./tools/generate_js.py
popd || exit 1
