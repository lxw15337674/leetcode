/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let left = 0
  let right = 0
  while (left < g.length && right < s.length) {
    // 满足条件：够孩子吃的饼干
    if (g[left] <= s[right]) {
      left++
    }
    right++
  }
  return left
};
// @lc code=end

