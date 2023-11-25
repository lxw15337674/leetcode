/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口
  let min = Infinity
  let left = 0
  let right = 0
  let count = 0
  while (right < nums.length) {
    count += nums[right]
    while (count >= target) {
      min = Math.min(right - left + 1, min);
      count -= nums[left]
      left++
    }
    right++
  }
  return min === Infinity ? 0 : min
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minSubArrayLen;
// @after-stub-for-debug-end