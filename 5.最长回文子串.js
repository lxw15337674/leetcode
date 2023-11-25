/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 以每个字符为中心，向两边扩展寻找回文子串。然后比较找到的回文子串的长度，更新最长回文子串。
  // 需要考虑偶数和奇数的回文情况
  let max = ''
  const find = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > max.length) {
        max = s.slice(left, right + 1)
      }
      left--
      right++
    }
  }
  for (let i = 0; i < s.length; i++) {
    find(i, i)
    find(i, i + 1)
  }
  return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end