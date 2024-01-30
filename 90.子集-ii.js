/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b); // 首先对 nums 进行排序，以确保相同元素相邻
  const tra = (index, list) => {
    res.push([...list]);
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue; // 跳过重复的元素，以避免生成重复的子集
      }
      list.push(nums[i]);
      tra(i + 1, list);
      list.pop();
    }
  };
  tra(0, []);
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsetsWithDup;
// @after-stub-for-debug-end