/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  // 快慢指针，维护 nums[0..slow] 为结果子数组
  let slow = 0, fast = 0;
  // 记录一个元素重复的次数
  let count = 0;
  while (fast < nums.length) {
    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    } else if (slow < fast && count < 2) {
      // 当一个元素重复次数不到 2 次时，也
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
    count++;
    if (fast < nums.length && nums[fast] != nums[fast - 1]) {
      // 遇到不同的元素
      count = 0;
    }
  }
  // 数组长度为索引 + 1
  return slow + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end