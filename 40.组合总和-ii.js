/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  const stack = []
  candidates.sort()
  const tra = (target, start) => {
    // 减枝
    if (target < 0) {
      return
    }
    if (target === 0) {
      res.push([...stack])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }
      stack.push(candidates[i])
      tra(target - candidates[i], i + 1)
      stack.pop()
    }
  }
  tra(target, 0)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum2;
// @after-stub-for-debug-end