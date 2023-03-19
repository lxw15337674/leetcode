/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const allow = (path) => {
    const cell = [path.length - 1, path[path.length - 1]]
    for (let row = 0; row < path.length - 1; row++) {
      const col = path[row]
      if (cell[1] === col || cell[0] + cell[1] === row + col || cell[0] - cell[1] === row - col) {
        return false
      }
    }
    return true
  }
  const tra = (path) => {
    if (!allow(path)) {
      return
    }
    if (path.length === n) {
      const list = []
      for (let col of path) {
        row = new Array(n).fill('.')
        row[col] = 'Q'
        list.push(row.join(''))
      }
      res.push(list)
    }
    for (let i = 0; i < n; i++) {
      path.push(i)
      tra(path)
      path.pop()
    }
  }
  tra([])
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end