list = []


def huiwen(n):
    for a in range(n + 1):
        lol = True  # 默认是回文
        a = str(a)
        length = len(a)
        if length > 1:
            for b in range(int(length / 2)):
                if a[b] != a[-b - 1]:
                    lol = False
                    break
        if lol == True:
            list.append(a)


huiwen(100000)
print(list)
