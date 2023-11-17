https://leetcode.cn/problems/jump-game/solutions/2289245/tan-xin-jsban-ben-by-silly-almeidajbk-wfwr/?envType=study-plan-v2&envId=top-100-liked
/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 贪心算法，按最大索引进行跳，超过最大索引，说明就能到
  // let maxJumpIndex = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (maxJumpIndex >= i) {
  //     maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i)
  //   }
  //   if (maxJumpIndex >= nums.length - 1) {
  //     return true
  //   }
  // }
  // return false

  // 动态规划，从后往前看能否到起点为止
  let end = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (end - i <= nums[i]) {
      end = i;
    }
  }

  return end === 0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end