##此为列表，不是链表
def addTwoNumbers(l1, l2):
    l3 = []
    for a in range(len(l1)):
        result = l1[a] + l2[a]
        l3.append(result)
    for a in range(len(l1)):
        if l3[a] >= 10:
            l3[a] -= 10
            l3[a + 1] += 1
    return l3



