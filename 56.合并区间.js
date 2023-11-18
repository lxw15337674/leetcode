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
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) { // 有重合
      prev[1] = Math.max(cur[1], prev[1]);
    } else {       // 不重合，prev推入res数组 
      res.push(prev);
      prev = cur;  // 更新 prev
    }
  }
  res.push(prev);
  return res;
};
// @lc code=end

