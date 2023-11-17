/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let currentLen = 1
  let maxLen = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] === nums[i - 1] + 1) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end