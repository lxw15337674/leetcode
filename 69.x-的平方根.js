/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 遍历
  // let root = 1
  // while (root * root <= x) root++
  // return root - 1

  // 二分
  let left = 0
  let right = x
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (mid * mid === x) {
      return mid
    }
    if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    return left - 1
  }
};
// @lc code=end

