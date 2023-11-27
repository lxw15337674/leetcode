/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = Infinity
  const length = nums.length
  for (let i = 0; i < length; i++) {
    let left = i + 1, right = length - 1
    while (left < right) {
      const count = nums[right] + nums[left] + nums[i]
      if (count === target) {
        return count
      }
      if (Math.abs(count - target) < Math.abs(res - target)) {
        res = count
      }
      if (count > target) {
        right--
      } else {
        left++
      }
    }
  }
  return res
};
// @lc code=end

