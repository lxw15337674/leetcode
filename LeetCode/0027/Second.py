# 思路:循环判断出不等于val的个数.
def removeElement(nums, val):
    Result = 0
    for a in nums:
        if a != val:
            Result += 1
    return Result


if __name__ == '__main__':
    nums = [3, 2, 2, 3]
    a = removeElement(nums, 3)
    print(a)
