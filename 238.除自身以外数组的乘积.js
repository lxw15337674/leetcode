/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 暴力循环
  // const res = []
  // for (let i = 0; i < nums.length; i++) {
  //   let count = 1
  //   for (let index = 0; index < nums.length; index++) {
  //     if (index !== i) {
  //       count = count * nums[index]
  //     }
  //   }
  //   res.push(count)
  // }
  // return res
  // 缓存
  const n = nums.length
  const left = new Array(n)
  const right = new Array(n)
  const res = []
  left[0] = 1
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }
  right[n - 1] = 1
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }
  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i]
  }
  return res
};
// @lc code=end

