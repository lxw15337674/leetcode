/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
// https://leetcode.cn/problems/trapping-rain-water/solutions/9112/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
// https://labuladong.github.io/algo/di-san-zha-24031/jing-dian--a94a0/ru-he-gao--0d5eb/
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 基本公式：当前列可以承载的雨滴数= min(当前列左右两侧的最大值)-当前列的大小

  // 暴力解法,按列求，遍历每一列，找到左右最大高度，找出较矮的一端，和当前列的高度比较就是该列能接的雨水
  // 缺点：时间复杂度高，为O(n²）
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

  // 备忘录优化（动态规划）
  // 暴力解法缺点是每次都会计算左右最大高度
  // 增加备忘录，首先用两个数组，max_left [i] 代表第 i 列左边最高的墙的高度，max_right[i] 代表第 i 列右边最高的墙的高度。
  // 时间复杂度：O(3n)，空间复杂度：O(n)，用来保存每一列左边最高的墙和右边最高的墙。
  // let water = 0
  // let leftMaxArray = [], rightMaxArray = []
  // for (let i = 0; i < height.length; i++) {
  //   leftMaxArray[i] = Math.max(leftMaxArray[i - 1] || 0, height[i - 1] || 0)
  // }
  // for (let i = height.length - 1; i >= 0; i--) {
  //   rightMaxArray[i] = Math.max(rightMaxArray[i + 1] || 0, height[i + 1] || 0)
  // }
  // for (let i = 0; i < height.length; i++) {
  //   let min = Math.min(leftMaxArray[i], rightMaxArray[i]);
  //   if (min > height[i]) {
  //     water += min - height[i]
  //   }
  // }
  // return water;


  // 双指针解法
  // 边走边算,通过双指针收缩，不用额外的数组保存最大值。
  // 我们只在乎 min(l_max, r_max)，重要的是 height[i] 能够装的水只和较低的 l_max 之差有关：
  // 时间复杂度： O(n)。
  // 空间复杂度： O(1)。
  let water = 0;
  let left = 0;
  let right = height.length - 1
  let leftMax = 0;  // height[0..left] 最大高度
  let rightMax = 0; // height[right..end] 最大高度
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax) {
      water += leftMax - height[left];
      left++;
    } else {
      water += rightMax - height[right];
      right--;
    }
  };
  return water;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end