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
  let max = ''
  let i = 0
  const find = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    const str = s.slice(left + 1, right)
    max = max.length > str.length ? max : str
  }
  while (i < s.length) {
    find(i, i)
    find(i, i + 1)
    i++
  }
  return max

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end