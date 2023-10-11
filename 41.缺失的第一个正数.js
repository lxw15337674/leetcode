/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  //  O(n^2)
  // const map = new Map()
  // let min = 1
  // for (let num of nums) {
  //   map.set(num, 1)
  // }
  // while (true) {
  //   if (map.get(min)) {
  //     min++
  //   } else {
  //     return min
  //   }
  // }


  const n = nums.length;
  // 将非正数和大于数组长度的元素置为 0
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 0;
    }
  }

  // 将正数 x 放到索引 x-1 的位置上
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    while (x > 0 && x <= n && nums[x - 1] !== x) {
      [nums[x - 1], x] = [x, nums[x - 1]];
    }
  }

  // 找到第一个不满足条件的位置
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = firstMissingPositive;
// @after-stub-for-debug-end 