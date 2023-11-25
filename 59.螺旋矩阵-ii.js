/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = new Array(n).fill().map(() => new Array(n));
  let count = 0;
  let left = 0, right = n - 1, top = 0, bottom = n - 1
  const setNum = (row, col) => {
    count++
    res[row][col] = count
  }
  while (left <= right || top <= bottom) {
    // 左上到右上
    for (let i = left; i <= right; i++) {
      setNum(top, i)
    }
    top++
    // 右上到右下
    for (let i = top; i <= bottom; i++) {
      setNum(i, right)
    }
    right--
    // 右下到左下
    for (let i = right; i >= left; i--) {
      setNum(bottom, i)
    }
    bottom--
    // 左下到左上
    for (let i = bottom; i >= top; i--) {
      setNum(i, left)
    }
    left++
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateMatrix;
// @after-stub-for-debug-end