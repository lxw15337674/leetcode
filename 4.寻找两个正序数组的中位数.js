/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const res = []
  let i1 = 0, i2 = 0
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      res.push(nums1[i1])
      i1++
    } else {
      res.push(nums2[i2])
      i2++
    }
  }
  while (nums1.length > i1) {
    res.push(nums1[i1])
    i1++
  }
  while (nums2.length > i2) {
    res.push(nums2[i2])
    i2++
  }
  if (res.length % 2) {
    return res[Math.floor(res.length / 2)]
  } else {
    return (res[Math.floor(res.length / 2)] + res[Math.floor(res.length / 2)-1]) / 2
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end