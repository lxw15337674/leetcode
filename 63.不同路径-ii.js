/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid.length) {
    return 0
  }
  // row 记录二维数组的行数
  // col 记录二维数组的列数
  let row = obstacleGrid.length;
  let col = obstacleGrid[0].length
  // 用一个op数组记录 从左上角位置 到达 当前遍历行的每个列位置的走法
  // 这里 设置第一行第一列的位置默认值是1，即走法为1
  let op = new Array(col).fill(0);
  op[0] = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 如果当前位置的值为1，那么说明有障碍物，就把这个位置的走法设置为0
      if (obstacleGrid[i][j]) {
        op[j] = 0;
        continue;
      }
      // 如果是每一行最左边的位置，那么就它的走法不变，
      // 否则等于它当前行的前一列位置的走法 + 同列前一行的位置的走法
      op[j] = j === 0 ? op[j] : op[j - 1] + op[j]
    }
  }
  return op[op.length - 1];
};
// @lc code=end

