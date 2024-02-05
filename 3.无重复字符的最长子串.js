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
  let map = new Map()
  let left = 0
  let right = 0
  let maxLen = 0
  while (right < s.length) {
    while (map.get(s[right])) {
      map.set(s[left], 0)
      left++
    }
    map.set(s[right], 1)
    maxLen = Math.max(right - left+1, maxLen)
    right++
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end