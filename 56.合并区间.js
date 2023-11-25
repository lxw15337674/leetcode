/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 排序+双指针
  // 先进行排序，然后通过指针记录最小值和最大值，如果包含，则归并，
  // 直到区间断开，
  const res = []
  intervals.sort((a, b) => a[0] - b[0])
  let start = intervals[0][0], end = intervals[0][1]
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    // 断开
    if (interval[0] > end) {
      res.push([start, end])
      start = interval[0]
      end = interval[1]
      continue
    }
    // 右合并
    if (interval[1] > end) {
      end = interval[1]
    }
  }
  res.push([start, end])
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end