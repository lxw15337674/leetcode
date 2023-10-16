/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 正向把所有星号转成左括号，反向把所有星号转成右括号,统计左括号和右括号的数量，只要有一个小于0，说明不匹配，也就不是一个有效字符串
var checkValidString = function (s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === '(') {
      leftStack.push(i);
    } else if (c === '*') {
      asteriskStack.push(i);
    } else {
      if (leftStack.length) {
        leftStack.pop();
      } else if (asteriskStack.length) {
        asteriskStack.pop();
      } else {
        return false;
      }
    }
  }
  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();
    if (leftIndex > asteriskIndex) {
      return false;
    }
  }
  return leftStack.length === 0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkValidString;
// @after-stub-for-debug-end