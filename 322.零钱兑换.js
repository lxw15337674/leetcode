/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//  dp[i] 代表金额i的最优解，即最小使用张数
//  coins = [1, 2, 5], amount = 11
//  dp[11] = Math.min(dp[10] + 1， dp[9] + 1, dp[6] + 1)
// 可以看做是‘爬楼梯’ coin相当于一次可爬楼梯的阶数
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end