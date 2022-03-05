import sys

f1 = open(sys.argv[1], 'rb')

f1.seek(0, 2)
end = f1.tell()
f1.seek(0, 0)

stride = 1
le = True
if len(sys.argv) > 3:
    stride = int(sys.argv[3])
    if stride < 0:
        stride = -stride
        le = False


to_find = int.to_bytes(eval(sys.argv[2]), stride, 'little' if le else 'big')

print('looking for {} (stride: {}, {} endian)'.format(''.join('{:02x}'.format(x) for x in to_find), stride, 'LITTLE' if le else 'BIG'), file=sys.stderr)

intersects = None
if len(sys.argv) > 4:
    print('using intersects from {}'.format(sys.argv[4]), file=sys.stderr)
    with open(sys.argv[4], 'r') as f:
        intersects = {int(l) for l in f}

n = 0
for i in range(0, end, stride):
    v = f1.read(stride)
    if v == to_find and (intersects is None or i in intersects):
        print(i)
        n += 1

print('found {} positions'.format(n), file=sys.stderr)
