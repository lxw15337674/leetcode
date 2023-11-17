/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let exist = false
  const dfs = (str, index) => {
    if (str == word) {
      exist = true
      return
    }
    if (exist || index[0] >= board.length || index[1] >= board.length) {
      return
    }
    let next = [index[0] + 1, index[1]]
    dfs(str + board[next], next)
    next = [index[0] + 1, index[1]]
    dfs(str + board[next], next)
  }
  dfs('', [0, 0])
  return exist
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = exist;
// @after-stub-for-debug-end