/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const xIndex = new Map()
  const yIndex = new Map()
  // 先找出所有0
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === 0) {
        xIndex.set(x, 1)
        yIndex.set(y, 1)
      }
    }
  }
  // 修改对应的行列，为0
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (xIndex.get(x) || yIndex.get(y)) {
        matrix[x][y] = 0
      }
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = setZeroes;
// @after-stub-for-debug-end