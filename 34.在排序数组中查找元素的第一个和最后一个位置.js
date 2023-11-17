/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 二分搜索
  let left = 0;
  let right = nums.length - 1
  let index = -1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) {
      index = mid
      break
    }
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (index === -1) {
    return [-1, -1]
  }
  left = index
  right = index
  for (i = left; i >= 0; i--) {
    if (nums[i] === target) {
      left = i
    } else {
      break
    }
  }
  for (i = right; i < nums.length; i++) {
    if (nums[i] === target) {
      right = i
    } else {
      break
    }
  }
  return [left, right]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end