/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 暴力循环，Time Limit Exceeded
  // let max = -Infinity
  // for (let buy = 0; buy < prices.length; buy++) {
  //   for (let sell =buy; sell < prices.length; sell++) {
  //     max = Math.max(max, prices[sell] - prices[buy])
  //   }
  // }
  // return max

  // 贪心算法：一次遍历，记录最小购买价格
  let buy = Infinity
  let max = -Infinity
  for (let price of prices) {
    buy = Math.min(buy, price)
    max = Math.max(max, price - buy)
  }
  return max
};
// @lc code=end

