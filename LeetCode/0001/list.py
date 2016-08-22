# 时间复杂度为o(n^2)，空间复杂度为o(1)
class Solution(object):
    def twoSum(self, nums, target):
        list = nums
        a = 0
        while a <= len(list)-2:
            c = a + 1
            while c <= len(list)-1:
                if list[a] + list[c] == target:
                    return [a, c]
                c += 1
            a += 1
