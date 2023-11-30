/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0, fast = 0, count = 0
  while (fast < nums.length) {
    if (nums[fast] === nums[fast - 1]) {
      count++
    } else {
      count = 1
    }
    if (count <= 2) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end