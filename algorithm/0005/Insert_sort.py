# 插入排序
list = [9, 5, 3, 8, 6, 4,2, 0,10, 4, 1, 8, 7]


def sort():
    for a in range(1, len(list)):
        for b in range(a):
            if list[a] < list[b]:
                c = list[a]
                list.pop(a)
                list.insert(b, c)
                break
        print(a, list)



if __name__ == '__main__':
    sort()

