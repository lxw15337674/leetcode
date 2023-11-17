/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  const dfs = (str, num) => {
    if (num === n) {
      res.push(str)
    }
    dfs(str + '()', num + 1)
    dfs(str + ')(', num + 1)
  }
  dfs('', 0)
};
// @lc code=end

