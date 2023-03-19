/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const list = []
  const stack = []
  const tra = (target, start) => {
    if (target === 0) {
      list.push([...stack])
      return
    }
    if (target < 0) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      stack.push(candidates[i])
      tra(target - candidates[i], i)
      stack.pop()
    }
  }
  tra(target, 0)
  return list
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end