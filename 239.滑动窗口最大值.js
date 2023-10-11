/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 滑动算法，但每次都要比较，复杂度较高
  // let left = 0, right = k - 1
  // const res = []
  // const maxIndex = []
  // const max = (left, right) => {
  //   let max = nums[left]
  //   for (let i = left; i <= right; i++) {
  //     if(nums[i]>max){
  //       maxIndex=i
  //     }
  //   }
  //   return max
  // }
  // while (right < nums.length) {
  //   res.push(max(left, right))
  //   left++
  //   right++
  // }
  // return res

  // 初始化一个空的双端队列 deque，用于存储当前窗口的最大值的索引。
  // 初始化一个空的结果数组 res。
  // 遍历数组 nums，对于每个位置 i：
  //   如果队首元素的索引已经不在当前窗口范围内（小于等于 i - k），将其从队首移除。
  //   从队尾开始比较，如果当前元素大于队尾元素，则将队尾元素移除，因为当前元素更大且在后面的窗口中，不可能成为最大值。
  //   将当前元素的索引加入队列。
  //   当窗口已经形成时（即 i 大于等于 k - 1），将队首元素对应的值加入结果数组 res。
  //   遍历结束后，返回结果数组 res。

  const deque = []; // 双端队列用于存储当前窗口的最大值的索引
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    // 如果队首元素的索引已经不在当前窗口范围内，将其从队首移除
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // 从队尾开始比较，如果当前元素大于队尾元素，则将队尾元素移除，
    // 因为当前元素更大且在后面的窗口中，不可能成为最大值
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    // 将当前元素的索引加入队列
    deque.push(i);

    // 当窗口已经形成时，将队首元素加入结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end