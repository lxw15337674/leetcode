/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 从前往后,动态规划
  // const list = [0, 1, 2]
  // for (let i = 3; i <= n; i++) {
  //   list[i] = list[i - 1] + list[i - 2]
  // }
  // return list[n]

  // 从后往前
  // 递归
  const list = [0, 1, 2]
  const tra = (n) => {
    if (list[n] !== undefined) {
      return list[n]
    } else {
      const count = tra(n - 1) + tra(n - 2)
      list[n] = count
      return count
    }
  }
  return tra(n)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end