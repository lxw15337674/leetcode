/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 思路：回溯，然后通过map记录已经用到的key，进行剪枝
  const res = []
  const map = new Map()
  const tra = (paths) => {
    if (paths.length === nums.length) {
      res.push(paths.map(index => nums[index]))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (map.get(i)) {
        continue
      }
      paths.push(i)
      map.set(i, true)
      tra(paths)
      paths.pop()
      map.set(i, false)
    }
  }
  tra([])
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end