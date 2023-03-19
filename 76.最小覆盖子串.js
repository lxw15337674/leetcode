/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//  ADOBECODEBANC
var minWindow = function (s, t) {
  let left = 0, right = 0, res = s, need = {}, isFound = false
  for (let char of t) {
    need[char] = (need[char] ?? 0) + 1
  }
  const isEmpty = () => {
    for (let key in need) {
      if (need[key] > 0) {
        return false
      }
    }
    return true
  }
  while (right < s.length) {
    const char = s[right]
    right++
    if (need[char] !== undefined) {
      need[char] = need[char] - 1
    }
    while (isEmpty()) {
      if (res.length >= right - left) {
        isFound = true
        res = s.slice(left, right)
      }
      const leftChar = s[left]
      if (need[leftChar] !== undefined) {
        need[leftChar] = need[leftChar] + 1
      }
      left++
    }
  }
  return isFound ? res : ''
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end