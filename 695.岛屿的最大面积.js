/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  const searchMaxArea = (x, y) => {
    if (!grid?.[x]?.[y]) {
      return 0
    }
    let count = 1
    // 将当前位置标记为已访问
    grid[x][y] = 0;
    count += searchMaxArea(x, y - 1)
    count += searchMaxArea(x, y + 1)
    count += searchMaxArea(x + 1, y)
    count += searchMaxArea(x - 1, y)
    return count
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        maxArea = Math.max(searchMaxArea(y, x), maxArea);
      }
    }
  }
  return maxArea
};
// @lc code=end

