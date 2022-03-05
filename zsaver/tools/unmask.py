import sys

for filename in sys.argv[1:]:
    with open(filename, 'rb') as f:
        sav = f.read()

    if len(sav) != 0x10000:
        print('{}: already unmasked?'.format(filename))
        continue

    sav = sav[0x0100:0x6810]
    mask = sav[0x1068]
    print('{}: mask: 0x{:02x}'.format(filename, mask))

    sav = bytes(b ^ mask  for b in sav)

    with open(filename, 'wb') as f:
        f.write(sav)
