/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0;  // 需要被保留的数量
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {// 不相等需要被保留
      nums[slow] = nums[fast]// 把需要保留的重新按照顺序写入到数组里面
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end