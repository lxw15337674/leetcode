/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  // 两次遍历，第一次找到每个  左边最近的 c，第二次找到每个 右边最近的 c。
  // const res = new Array(s.length)
  // let index = -1
  // for (let i = 0; i <= s.length - 1; i++) {
  //   const char = s[i]
  //   if (char === c) {
  //     index = i
  //   }
  //   if (index > -1) {
  //     res[i] = i - index
  //   }
  // }
  // index = -1
  // for (let i = s.length - 1; i >= 0; i--) {
  //   const char = s[i]
  //   if (char === c) {
  //     index = i
  //   }
  //   if (index > -1) {
  //     res[i] = Math.min(res[i] ?? Infinity, index - i)
  //   }
  // }
  // return res



};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = shortestToChar;
// @after-stub-for-debug-end