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
  // 滑动窗口
  const map = new Map()
  const len = s.length
  let left = 0; right = 0; maxLen = 0
  while (right < len) {
    const rightChar = s[right]
    while (map.get(rightChar)) {
      const leftChar = s[left]
      map.set(leftChar, map.get(leftChar) - 1)
      left++
    }
    map.set(rightChar,1)
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end