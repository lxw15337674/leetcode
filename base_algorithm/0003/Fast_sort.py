
list = [9, 5, 3, 6, 2, 10, 0, 4, 1, 8, 7]


def Sort(low, high):
    i = low
    j = high
    if i >= j:
        return
    key = list[i]
    while i < j:
        while i < j and list[j] >= key:
            j -=1
        list[i] = list[j]
        while i < j and list[i] <= key:
            i +=1
        list[j] = list[i]
    list[i] = key
    Sort(low, i-1)
    Sort(j+1, high)

if __name__ == '__main__':
    Sort(0, len(list) - 1)
    print(list)
