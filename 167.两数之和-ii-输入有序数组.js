/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 一左一右两个指针相向而行
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let total = numbers[left] + numbers[right]
    if (total === target) {
      return [left + 1, right + 1]
    }
    if (total >= target) {
      right--
    } else {
      left++
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end