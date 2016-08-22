class Solution(object):
    def twoSum(self, nums, target):
        n = len(nums)
        for i in range(n):
            m = target - nums[i]
            if m in nums:
                q = nums.index(m)
                if i != q:
                    break
        return [i, q]


