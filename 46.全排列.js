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
  const res = [];
  const map = {}
  const tra = (path) => {
    if (nums.length === path.length) {
      const item = []
      for (let index of path) {
        item.push(nums[index])
      }
      res.push(item)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (map[i]) {
        continue
      }

      path.push(i)
      map[i] = true
      tra(path)
      map[i] = false
      path.pop()
    }
  }
  tra([])
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end