/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快速排序，然后前k个
  const quickSort = (array, left, right) => {
    if (left >= right) {
      return
    }
    let l = left, r = right
    const mid = Math.floor((right + left) / 2)
    const baseVal = array[mid];
    while (l <= r) {
      while (array[l] < baseVal) {
        l++
      }
      while (array[r] > baseVal) {
        r--
      }
      if (l <= r) {
        [array[l], array[r]] = [array[r], array[l]]
        l++
        r--
      }
    }
    quickSort(array, left, r)
    quickSort(array, l, right)
  }
  quickSort(nums, 0, nums.length - 1)
  return nums[nums.length - k]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end