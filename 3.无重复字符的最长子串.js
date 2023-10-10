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
  const map = new Map()
  let left = 0, right = 0, res = 0
  while (right < s.length) {
    const rightChar = s[right]
    right++
    // 进行窗口内数据的一系列更新
    map.set(rightChar, (map.get(rightChar) || 0) + 1)
    // 判断左侧窗口是否要收缩
    while (map.get(rightChar) > 1) {
      const leftChar = s[left]
      left++
      // 进行窗口内数据的一系列更新
      map.set(leftChar, map.get(leftChar) - 1)
    }
    res = Math.max(res, right - left)
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end