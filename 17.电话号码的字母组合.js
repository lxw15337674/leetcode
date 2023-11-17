/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return []
  }
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  const res = []
  const dfs = (str, i) => {
    if (i === digits.length) {
      res.push(str)
      return
    }
    const chars = map[digits[i]]
    for (let char of chars) {
      dfs(str + char, i + 1)
    }
  }
  dfs('', 0)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end