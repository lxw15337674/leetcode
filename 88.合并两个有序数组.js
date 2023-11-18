/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */


// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 方法1：最简单的方法，把两个数组合并，然后进行排序
  // let rightChar = 0
  // for (let i = m; i < nums1.length; i++) {
  //   nums1[i] = nums2[rightChar++]
  // }
  // nums1.sort((a, b) => a - b)


  // 方法2：从后往前进行比较，谁大移动谁，指针往前
  // 从后往前遍历两个有序数组。通过比较两个指针所指向的元素大小，将较大的元素放入 nums1 数组的末尾，并逐步向前移动指针。
  // 最后，如果 nums2 数组还有剩余元素，将其依次放入 nums1 数组的前面。这样就可以避免创建额外的数组，并且直接在 nums1 数组上进行原地修改
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }
  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end 