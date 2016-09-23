# n = raw_input()
n = '4 EIGHT TWO ZEROTWOONE OHWETENRTEO'
n = n.split()
n = [a for a in n]
b = n[1:]
for c in b:
    e = ''
    for a in c:
        if a == 'Z':
            if 'E' and 'R' and 'O' in c:
                e += '0'
                continue
        if a == 'O':
            if 'N' and 'E' in c:
                e += '1'
                continue
        if a == 'T':
            if 'H' and 'R' and 'E' in c:
                n = 0
                for a in c[f:]:
                    if a == 'E':
                        n += 1
                if n >= 2:
                    e += '3'
                    continue
            if 'W' and 'O' in c:
                e += '2'
                continue
        if a == 'F':
            if 'O' and 'U' and 'R' in c:
                e += '4'
                continue
            if 'i' and 'V' and 'E' in c:
                e += ' 5'
                continue
        if a == 'S':
            if 'N' and 'V' and 'E' in c:
                n = 0
                for a in c[f:]:
                    if a == 'E':
                        n += 1
                if n >= 2:
                    e += '7'
                    continue
            if 'I' and 'X' in c:
                e += '6'
                continue
        if a == 'E':
            if 'I' and 'G' and 'H' and 'T' in c:
                e += '8'
                continue
        if a == 'N':
            if 'I' and 'E' in c:
                n = 0
                for a in c:
                    if a == 'N':
                        n += 1
                if n >= 2:
                    e += '9'
    d = ''
    for a in e:
        a = int(a)
        if a < 8:
            a += 10
        a -= 8
        d += str(a)
    print(int(d))
