/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
  const stack = []
  for (let char of s) {
    if (pairs.has(char)) {
      stack.push(char)
    } else {
      const matchParis = stack.pop()
      if (char !== pairs.get(matchParis)) {
        return false
      }
    }
  }
  return !stack.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end