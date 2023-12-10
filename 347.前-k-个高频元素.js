/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 思路：先用map记录次数，然后次数作为index插入队列里，最后从后往前找就是频率最高的。
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  // 插入桶里
  const list = []
  for (let [key, value] of map.entries()) {
    if (!list[value]) {
      list[value] = []
    }
    list[value].push(key)
  }
  const res = []
  for (let i = list.length; i > 0; i--) {
    for (let item of list[i]??[]) {
      res.push(item)
      k--
      if (k === 0)
        return res
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end