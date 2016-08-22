#冒泡排序
list = [9, 5, 3, 6, 2,7,0, 5, 4, 1, 8, 7]


def sort():
    for a in range(len(list)):  # 逐元素进行循环判断
        for b in range(len(list) - a - 1):  # 逐元素对选定的元素进行判断
            if list[b] > list[b + 1]:
                list[b], list[b + 1] = list[b + 1], list[b]
                # print(a+1,list)
        print(a, list)


if __name__ == '__main__':
    sort()
