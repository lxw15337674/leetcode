/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  //思路 您可以使用一个变量来跟踪当前连续递增序列的长度，并使用另一个变量来跟踪最长连续递增序列的长度。遍历数组，如果当前元素大于前一个元素，则将当前连续递增序列的长度加1，否则将当前连续递增序列的长度重置为1。在遍历过程中持续更新最长连续递增序列的长度。
  if (nums.length < 2) {
    return nums.length
  }

  let maxLength = 1;
  let currentLength = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++
      maxLength = Math.max(maxLength, currentLength)
    } else {
      currentLength = 1
    }
  }
  return maxLength;
};
// @lc code=end

