/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */
// 使用四个变量 top、bottom、left 和 right 来跟踪当前螺旋矩阵的边界，并在遍历过程中逐步收缩边界。
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const numRows = matrix.length;
  if (numRows === 0) {
    return [];
  }
  const numCols = matrix[0].length;

  let top = 0;
  let bottom = numRows - 1;
  let left = 0;
  let right = numCols - 1;

  const res = [];

  while (top <= bottom && left <= right) {
    // Traverse right
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    top++;

    // Traverse down
    for (let row = top; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    right--;

    // Check if there are remaining rows and traverse left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Check if there are remaining columns and traverse up
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
    }
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end