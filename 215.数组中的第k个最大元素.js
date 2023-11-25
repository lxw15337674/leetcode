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
// https://leetcode.cn/problems/kth-largest-element-in-an-array/solutions/282238/javascriptsi-chong-fang-shi-jie-topkwen-ti-by-user/
// 整体排序：O(nlogn)
// 局部排序：只冒泡排序前k个最大值，O(nk)
// 堆：O(nlogk)
// 计数或桶排序：计数排序用于前k个最值，时间复杂度为O(n + m)，其中 m 表示数据范围；桶排序用于最高频k个，时间复杂度为O(n)； 但这两者都要求输入数据必须是有确定范围的整数
// 快速选择（quickselect）算法：平均O(n)，最坏O(n2)
// 中位数的中位数（bfprt）算法：最坏O(n)
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