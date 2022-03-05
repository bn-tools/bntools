import json
import sys

blocks = [None]

it = iter(sys.stdin)

while True:
    try:
        names, colors, typ = next(it).rstrip().split(' ')
    except StopIteration:
        break

    colors = colors.split(',')
    name_en, name_ja = names.split('/')

    lines = []
    while True:
        line = next(it, '').rstrip()
        if not line: break
        lines.append(line)

    squares = [0] * 25
    if len(lines) != 5:
        raise Exception(name_en)
    for i in range(5):
        for j in range(5):
            if len(lines[j]) != 5:
                raise Exception(name_en)
            squares[i * 5 + j] = '.#X'.index(lines[i][j])

    blocks.append({
        'name': {'en': name_en, 'ja': name_ja},
        'colors': colors,
        'isSolid': typ == 'solid',
        'squares': squares,
    })

json.dump(blocks, sys.stdout, indent='    ', ensure_ascii=False)
