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
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let max = 1
  let count = 1
  for (let i = 0; i < nums.length - 1; i++) {
    let cur = i, next = i + 1
    if (nums[cur] === nums[next]) continue // 相同就跳过本次循环
    if (nums[cur] + 1 === nums[next]) { // 发现连续项 count++
      count++
    } else { // 否则，count重置1
      count = 1
    }
    max = Math.max(max, count)
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end