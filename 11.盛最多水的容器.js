/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; right = height.length - 1;
  let max = 0;
  while (left <= right) {
    const cur_area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, cur_area);
    // 双指针技巧，移动较低的一边
    // 其实也好理解，因为矩形的高度是由 min(height[left], height[right]) 即较低的一边决定的：
    // 你如果移动较低的那一边，那条边可能会变高，使得矩形的高度变大，进而就「有可能」使得矩形的面积变大；相反，如果你去移动较高的那一边，矩形的高度是无论如何都不会变大的，所以不可能使矩形的面积变得更大。
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max
};
// @lc code=end

