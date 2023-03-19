/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = []
  const stack = []
  const tra = (nums, start) => {
    res.push([...stack])
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      stack.push(nums[i])
      tra(nums, i + 1)
      stack.pop()
    }
  }
  tra(nums.sort(), 0)
  return res

};
// @lc code=end

