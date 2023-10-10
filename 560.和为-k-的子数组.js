/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 解题思路：

// 使用前缀和的概念来解决该问题。定义一个变量 sum 表示当前位置之前的子数组的和。
// 使用一个哈希表 map 来记录每个前缀和出现的次数。初始时，将前缀和为 0 的次数设置为 1。
// 通过该算法，我们可以在线性时间复杂度内解决该问题，并得到和为 k 的连续子数组的个数。
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  // 遍历数组 nums，对于每个位置 i，更新前缀和 sum，并判断 sum - k 是否存在于 map 中。
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 如果存在，说明存在一个子数组的和为 k，则将 count 增加对应的次数。
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    // 更新当前前缀和 sum 在 map 中的次数，如果已存在则增加 1，否则设置为 1。
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subarraySum;
// @after-stub-for-debug-end