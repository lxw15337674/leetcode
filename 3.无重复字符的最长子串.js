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
  // 滑动窗口，收缩规则是当出现重复字符
  let map = new Map()
  let left = 0;
  let right = 0;
  let maxLen = 0
  while (right < s.length) {
    while (map.get(s[right])) {
      map.set(s[left], 0)
      left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
    map.set(s[right], 1)
    right++
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end