/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = []
  const map = {}
  for (let char of p) {
    map[char] = (map?.[char] ?? 0) + 1
  }
  const allow = () => {
    for (let char in map) {
      if (map[char]) {
        return false
      }
    }
    return true
  }
  let left = 0, right = 0;
  while (right < s.length) {
    const rightChar = s[right]
    if (map?.[rightChar] !== undefined) {
      map[rightChar]--
    }
    right++
    while (right - left >= p.length) {
      const leftChar = s[left]
      if (right - left === p.length && allow()) {
        res.push(left)
      }
      left++
      if (map?.[leftChar] !== undefined) {
        map[leftChar]++
      }
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end