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
  let count = 0
  const searchGrid = (x, y) => {
    if (grid?.[y]?.[x] === "1") {
      grid[y][x] = "0"
      searchGrid(x - 1, y)
      searchGrid(x + 1, y)
      searchGrid(x, y - 1)
      searchGrid(x, y + 1)
    }
  }
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "1") {
        searchGrid(x, y)
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