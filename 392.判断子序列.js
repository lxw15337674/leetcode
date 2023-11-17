/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0; right = 0
  while (right < t.length && left < s.length) {
    const leftChar = s[left]
    const rightChar = t[right]
    if (leftChar === rightChar) {
      left++
    }
    right++
  }
  return left === s.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSubsequence;
// @after-stub-for-debug-end