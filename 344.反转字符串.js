/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let leftValue = s[left]
    s[left] = s[right]
    s[right] = leftValue
    left++
    right--
  }
  return s
};
// @lc code=end

