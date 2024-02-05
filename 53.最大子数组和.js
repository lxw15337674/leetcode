/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 滑动窗口
  // let right = 0,
  //   count = 0,
  //   max = nums[0]; // 初始化 max 为数组第一个元素的值

  // while (right < nums.length) {
  //   // 扩大窗口并更新窗口内的元素和
  //   count += nums[right];
  //   right++;

  //   // 更新答案
  //   if (count > max) {
  //     max = count; // 更新最大子数组和
  //   }

  //   // 判断窗口是否要收缩
  //   if (count < 0) {
  //     count = 0; // 如果窗口内的元素和小于 0，则将 count 重置为 0，表示重新开始计算子数组和
  //   }
  // }
  // return max; // 返回最大子数组和

  // 方法2：动态规划:遍历一遍，每次比较前面最大值和当前值与最大值相加，然后找到最大值
  let pre = 0; // 用于存储当前子数组的最大和
  let maxAns = nums[0]; // 用于存储全局的最大子数组和，初始值为数组的第一个元素
  nums.forEach((x) => {
    pre = Math.max(pre + x, x); // 更新当前子数组的最大和，如果加上当前元素的和更大，则更新为加上当前元素的和，否则保持不变
    maxAns = Math.max(maxAns, pre); // 更新全局的最大子数组和，如果当前子数组的最大和更大，则更新为当前子数组的最大和，否则保持不变
  });

  return maxAns; // 返回全局的最大子数组和

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end