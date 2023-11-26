/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 递归，性能会有问题，Time Limit Exceeded
  // let count = 0
  // const move = (y, x) => {
  //   if (y === m - 1 && x === n - 1) {
  //     count++;
  //     return;
  //   }
  //   if (y < m - 1) {
  //     move(y + 1, x);
  //   }
  //   if (x < n - 1) {
  //     move(y, x + 1);
  //   }
  // }
  // move(0, 0)
  // return count
  // 动态规划
  // https://leetcode.cn/problems/unique-paths/solutions/514311/bu-tong-lu-jing-by-leetcode-solution-hzjf/
  const dp = new Array(m).fill(new Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePaths;
// @after-stub-for-debug-end