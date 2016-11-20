def removeDuplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    a = 0
    while a <= len(nums) - 2:
        if nums[a] == nums[a + 1]:
            nums.pop(a)
        else:
            a += 1
    print(nums)
