/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  // 先移除所有 0，然后把最后的元素都置为 0，就相当于移动 0 的效果。
  // https://leetcode.cn/problems/move-zeroes/solutions/90229/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/?envType=study-plan-v2&envId=top-100-liked
  let low = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[low] = nums[fast]
      low++
    }
    fast++
  }
  while (low < fast) {
    nums[low] = 0
    low++
  }
  return nums
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end