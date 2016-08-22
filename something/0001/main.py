def xipai(n, argslist):
    list = []
    for a in range(1,n+1):
        list.append(argslist[2 * n - a])
        list.append(argslist[n - a])
    list = list[::-1]
    return list


def cishu(n, k, argslist):
    for a in range(k):
        argslist = xipai(n, argslist)
    print(argslist)


if __name__ == '__main__':
    T = 3
    n1, k1 = 3, 1
    list1 = [1, 2, 3, 4, 5, 6]
    n2, k2 = 3, 2
    list2 = [1, 2, 3, 4, 5, 6]
    n3, k3 = 2, 2
    list3 = [1, 1, 1, 1]
    cishu(n1, k1, list1)
    cishu(n2, k2, list2)
    cishu(n3, k3, list3)
