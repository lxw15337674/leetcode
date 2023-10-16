/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const list = [0, 1]
  for (let i = 2; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2]
  }
  return list[n]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = fib;
// @after-stub-for-debug-end