# 简单选择排序
list = [9, 5, 3, 8, 6, 2, 0,10, 4, 1, 8, 7,5]


def sort():
    for a in range(len(list)-1):
        min = a
        for b in range(a+1,len(list)):
            if list[min] > list[b]:
                min = b
        list[a],list[min] = list[min], list[a]
        print(list)


if __name__ == '__main__':
    sort()

