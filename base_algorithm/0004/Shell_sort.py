# 希尔排序
list = [9, 5, 3, 8, 6, 4, 2, 0, 10, 4, 1, 8, 7]


def sort():
    length = len(list)
    inc = 0
    while inc <= length / 3:
        inc = inc * 3 + 1
    print(inc)
    while inc >= 1:
        for i in range(inc, length):
            tmp = list[i]
            for j in range(i, 0, -inc):
                if tmp < list[j - inc]:
                    list[j] = list[j - inc]
                else:
                    j += inc
                    break
            list[j - inc] = tmp
        inc //= 3
        print(list)


if __name__ == '__main__':
    sort()
