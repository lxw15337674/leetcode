/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const track = []
  const tra = (start, n, k) => {
    if (track.length === k) {
      res.push([...track])
      return
    }
    for (let i = start; i <= n; i++) {
      track.push(i)
      tra(i + 1, n, k)
      track.pop()
    }
  }
  tra(1, n, k)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end