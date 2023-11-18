/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 先排序，然后循环
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let currentLen = 1
  let maxLen = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] === nums[i - 1] + 1) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
  }
  return maxLen


  // 哈希表，每个都假设是最小的起点，然后往后找连续
  // let num_set = new Set();
  // for (const num of nums) {
  //   num_set.add(num);
  // }
  // let longestStreak = 0;
  // for (const num of num_set) {
  //   if (!num_set.has(num - 1)) {
  //     let currentNum = num;
  //     let currentStreak = 1;
  //     while (num_set.has(currentNum + 1)) {
  //       currentNum += 1;
  //       currentStreak += 1;
  //     }

  //     longestStreak = Math.max(longestStreak, currentStreak);
  //   }
  // }
  // return longestStreak;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestConsecutive;
// @after-stub-for-debug-end