# 逐个元素判断,与后一个元素是否相同,相同则弹出,不相同则判断下一个元素
def removeDuplicates(nums):
    a = 0
    while a <= len(nums) - 2:
        if nums[a] == nums[a + 1]:
            nums.pop(a)
        else:
            a += 1
    print(nums)


if __name__ == '__main__':
    list = [1, 2, 2, 3, 3, 4, 5, 5, 6]
    # removeDuplicates(list)
    print(list[::])