/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 快速排序
  const sort = (start, end) => {
    if (start >= end) {
      return
    }
    let left = start
    let right = end
    let mid = Math.floor((start + end) / 2)
    let val = nums[mid]
    while (left <= right) {
      while (nums[left] < val) {
        left++
      }
      while (nums[right] > val) {
        right--
      }
      while (left <= right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++
        right--
      }
    }
    sort(start, right)
    sort(left, end)
  }
  sort(0, nums.length - 1)
  return nums
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortArray;
// @after-stub-for-debug-end