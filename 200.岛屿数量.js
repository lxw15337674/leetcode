/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 思路：从左上角开始遍历，找到岛屿，就count+1，然后把相邻的陆地都重置为0，
  let count = 0
  const tra = (row, col) => {
    if (grid?.[row]?.[col] === '1') {
      grid[row][col] = '0'
      tra(row + 1, col)
      tra(row - 1, col)
      tra(row, col + 1)
      tra(row, col - 1)
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        tra(row, col)
        count++
      }
    }
  }

  return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numIslands;
// @after-stub-for-debug-end