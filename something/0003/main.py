n = '7 4  5  6  3  2  2'
n = raw_input()
n = n.split()
n = [int(a) for a in n]
a1 = n[0]
a2 = n[2:]
b = 7
answer = 0
for a in a2:
    if b <a:
        answer += 1
        b = 7
    b -= a

print(answer)
