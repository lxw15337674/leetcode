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
  // 从后往前，并记录
  // const array = new Array(n)
  // array[0] = 0
  // array[1] = 1
  // array[2] = 2
  // const tra = (n) => {
  //   if (array[n] !== undefined) {
  //     return array[n]
  //   }
  //   array[n] = tra(n - 2) + tra(n - 1)
  //   return array[n]
  // }
  // tra(n)
  // return array[n]

  // 从前往后
  const array = new Array(n)
  const tra = (n) => {
    for (let i = 0; i <= n; i++) {
      if (i <= 2) {
        array[i] = i
      } else {
        array[i] = array[i - 1] + array[i - 2]
      }
    }
    return array[n]
  }
  return tra(n)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end