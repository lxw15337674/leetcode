/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // 归类为动态规划，因为我们需要基于前一行来构造每一行。
  if (numRows === 0) return [];
  let triangle = [[1]];
  for (let row = 1; row < numRows; row++) {
    let arr = [1]
    prevRow = row - 1
    for (let j = 1; j < row; j++) {
      arr[j] = triangle[prevRow][j - 1] + triangle[prevRow][j]
    }
    arr.push(1)
    triangle.push(arr)
  }
  return triangle
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generate;
// @after-stub-for-debug-end