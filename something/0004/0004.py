n = raw_input()
n = n.split()
n = [int(a) for a in n]
a = n[0]
b = 0
while 1:
    c = 2**b
    if a < c:
        print(b)
        break
    else:
        b+=1