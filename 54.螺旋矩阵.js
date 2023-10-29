/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x = 0, y = 0
  let yLength = matrix.length - 1
  let xLength = matrix[0].length - 1
  let direction = 0
  const res = []
  while (true) {
    while (x <= xLength - direction) {  // 修改边界条件
      res.push(matrix[y][x]);
      x++;
    }
    x--;
    y++;
    if (y > yLength - direction) break;  // 修改边界条件
    while (y <= yLength - direction) {
      res.push(matrix[y][x]);
      y++;
    }
    y--;
    x--;
    if (x < direction) break;  // 修改边界条件
    while (x >= direction) {
      res.push(matrix[y][x]);
      x--;
    }
    x++;
    y--;
    if (y < direction + 1) break;  // 修改边界条件
    while (y >= direction + 1) {
      res.push(matrix[y][x]);
      y--;
    }
    y++;
    x++;
    direction++;
    if (xLength - direction * 2 < 0 || yLength - direction * 2 < 0) {
      break;
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end