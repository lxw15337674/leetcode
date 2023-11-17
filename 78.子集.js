/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const bfs = (arr, start) => {
    res.push([...arr])
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i])
      bfs(arr, i + 1)
      arr.pop()
    }
  }
  bfs([], 0)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end