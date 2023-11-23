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
  // 思路：使用四个变量 top、bottom、left 和 right 来跟踪当前螺旋矩阵的边界，并在遍历过程中逐步收缩边界。
  const numRows = matrix.length;
  if (numRows === 0) {
    return [];
  }
  const numCols = matrix[0].length;

  const res = []
  let top = 0, bottom = numRows - 1, left = 0, right = numCols - 1;
  while (top <= bottom && left <= right) {
    // 左上到右上
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    top++;
    if (top > bottom) {
      break;
    }

    // 右上到右下
    for (let row = top; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    right--;
    if (left > right) {
      break;
    }

    // 右下到左下
    for (let col = right; col >= left; col--) {
      res.push(matrix[bottom][col]);
    }
    bottom--;
    if (top > bottom) {
      break;
    }

    // 左下到左上
    for (let row = bottom; row >= top; row--) {
      res.push(matrix[row][left]);
    }
    left++;
    if (left > right) {
      break;
    }
  }

  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end