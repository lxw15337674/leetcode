/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 暴力解法
  // let water = 0
  // for (let i = 0; i < height.length - 1; i++) {
  //   let leftMax = Math.max(...height.slice(0, i))
  //   let rightMax = Math.max(...height.slice(i + 1, height.length))
  //   maxHeight = Math.min(rightMax, leftMax)
  //   if (maxHeight > height[i]) {
  //     water += maxHeight - height[i]
  //   }
  // }
  // return water

  // 备忘录优化
  // 暴力解法缺点是每次都会计算左右最大高度
  // 增加备忘录来缓存每次计算
  // let water = 0;
  // let leftMaxArray = [height[0]];
  // let rightMaxArray = new Array(height.length - 1).fill(0);
  // rightMaxArray[height.length - 1] = height[height.length - 1];

  // for (let i = 1; i < height.length - 1; i++) {
  //   leftMaxArray[i] = Math.max(leftMaxArray[i - 1], height[i]);
  // }

  // for (let i = height.length - 2; i >= 0; i--) {
  //   rightMaxArray[i] = Math.max(rightMaxArray[i + 1], height[i]);
  // }

  // for (let i = 1; i < height.length - 1; i++) {
  //   let maxHeight = Math.min(leftMaxArray[i], rightMaxArray[i]);
  //   if (maxHeight > height[i]) {
  //     water += maxHeight - height[i];
  //   }
  // }
  // return water;


  // 双指针解法
  // 边走边算
  let water = 0;
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      water += leftMax - height[left]
      left++
    } else {
      water += rightMax - height[right]
      right--
    }
  };
  return water
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end