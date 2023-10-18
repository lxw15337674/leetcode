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
  const len = nums.length;
  // dp[i]: 以第i位结尾时的最长递增子序列的长度(第i位必选), 初始值为1
  const dp = new Array(len).fill(1);
  let ans = 1;

  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // 将第i位与前面所有比较，找到最长的上升子序列
      // 如果第j位的数字比nums[i]小，dp[j]加上nums[i]就是一种以nums[i]结尾的上升子序列，就取dp[j]+1与dp[i]的较大者
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 更新答案
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLIS;
// @after-stub-for-debug-end