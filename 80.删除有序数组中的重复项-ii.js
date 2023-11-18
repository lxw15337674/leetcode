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
  if (nums.length == 0) {
    return 0;
  }
  let left = 0, right = 1, count = 1
  while (right < nums.length) {
    const leftChar = nums[left]
    const rightChar = nums[right]
    if (leftChar !== rightChar) {
      count = 1
      left++
      nums[left] = nums[right]
    } else {
      count++
      if (count <= 2) {
        left++
        nums[left] = nums[right]
      } 
    }
    right++
  }
  return left + 1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end