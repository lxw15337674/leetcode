/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 暴力解法，会超时
  // for (let xArray of matrix) {
  //   for (let item of xArray) {
  //     if (target === item) {
  //       return true
  //     }
  //   }
  // }
  // return false

  // 二分查找
  const search = (array, target) => {
    let left = 0; right = array.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (target === array[mid]) {
        return true
      }
      if (target > array[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return false
  }
  for (let array of matrix) {
    if (search(array, target)) {
      return true
    }
  }
  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end