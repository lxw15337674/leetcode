# 思路:数组循环判断val出现的个数,然后运行对应次数的删除方法.
def removeElement(nums, val):
    num = 0;
    for a in nums:
        if a == val:
            num+=1
    for a in range(num):
        nums.remove(val)
    return len(nums)


if __name__ == '__main__':
    nums = [3,2,2,3]
    a = removeElement(nums, 3)
    print(a)
