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
  const currentMap = {}
  for (let char of p) {
    map[char] = (map?.[char] ?? 0) + 1
    currentMap[char] = 0
  }
  let left = 0, right = 0
  const match = () => {
    for (let key in currentMap) {
      if (currentMap[key] !== map[key] ?? 0) {
        return false
      }
    }
    return true
  }
  while (right < s.length) {
    const rightChar = s[right]
    if (right - left + 1 <= p.length) {
      currentMap[rightChar] = (currentMap[rightChar] ?? 0) + 1;
      right++;
    } else {
      currentMap[s[left]]--;
      left++;
    }
    if (match()) {
      res.push(left)
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end