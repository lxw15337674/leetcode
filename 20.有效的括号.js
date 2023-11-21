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
  // 思路：栈保存左括号，碰到右括号则出栈进行匹配
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
      if (pairs.get(stack.pop()) !== char) {
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