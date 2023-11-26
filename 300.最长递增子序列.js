/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划，dp[i]含义：从0到下标为i的序列的最长子序列长度
  const len = nums.length
  dp = new Array(nums.length).fill(1)//默认前面都比当前元素大，则为1
  let max = 0
  for (let i = 0; i < len; i++) {
    // i与i前面的元素比较
    for (let j = 0; j < i; j++) {
      // 找比i小的元素，找到一个，就让当前序列的最长子序列长度加1
      if (nums[j] < nums[i]) {
  // 是否存在
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max)
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLIS;
// @after-stub-for-debug-end