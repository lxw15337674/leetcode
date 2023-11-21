/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0, left = 0, right = 0, map = new Map()
  while (right < s.length) {
    while (map.get(s[right])) {
      map.set(s[left], map.get(s[left]) - 1)
      left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
    map.set(s[right], (map.get(s[right]) || 0) + 1)
    right++
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end