import sys


def maybe_flip(xs, le):
    if le:
        return reversed(xs)
    return xs


def join_by_stride(xs, stride, le):
    fmted = ['{:02x}'.format(x) for x in xs]
    return ' '.join(
        ''.join(maybe_flip(fmted[i:i+stride], le))
        for i in range(0, len(fmted), stride)
    )


def print_chunk(chunk):
    i, ls, rs = chunk
    print('{} @ [0x{:04x}, 0x{:04x})'.format(len(ls), i, i + len(ls)))
    print('<', join_by_stride(ls, stride, le))
    print('>', join_by_stride(rs, stride, le))
    print('')


f1 = open(sys.argv[1], 'rb')
f2 = open(sys.argv[2], 'rb')

stride = 1
le = True
if len(sys.argv) > 3:
    stride = int(sys.argv[3])
    if stride < 0:
        stride = -stride
        le = False

start = 0
if len(sys.argv) > 4:
    start = eval(sys.argv[4])

f1.seek(0, 2)
end = f1.tell()
f1.seek(0, 0)
if len(sys.argv) > 5:
    end = eval(sys.argv[5])

print('stride: {} ({} endian), range: [0x{:04x}, 0x{:04x})'.format(stride, 'LITTLE' if le else 'BIG', start, end))
if start % stride != 0:
    print('WARNING: unaligned!')
print('')

f1.seek(start)
f2.seek(start)

last_chunk = None

for i in range(start, end, stride):
    l = f1.read(stride)
    r = f2.read(stride)

    if l != r:
        if last_chunk is None or last_chunk[0] + len(last_chunk[1]) != i:
            if last_chunk is not None:
                print_chunk(last_chunk)
            last_chunk = (i, bytearray(l), bytearray(r))
        else:
            _, ls, rs = last_chunk
            ls.extend(l)
            rs.extend(r)

if last_chunk is not None:
    print_chunk(last_chunk)
