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
  // 从后往前
  // const array = [0, 1, 2]
  // const tra = (n) => {
  //   if (array[n]) {
  //     return array[n]
  //   }
  //   const res = tra(n - 2) + tra(n - 1)
  //   array[n] = res
  //   return res
  // }
  // return tra(n)

  // 从前往后
  const array = [0, 1, 2]
  const tra = (n) => {
    for (let i = 0; i <= n; i++) {
      if (!array[i]) {
        array[i] = array[i - 2] + array[i - 1]
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