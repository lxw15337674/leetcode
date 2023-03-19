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
  let res = []
  const tra = (list, start) => {
    res.push([...list])
    for (let i = start; i < nums.length; i++) {
      list.push(nums[i])
      tra(list, i + 1)
      list.pop()
    }
  }

  tra([], 0)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end