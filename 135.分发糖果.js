/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const n = ratings.length;
  const res = new Array(n).fill(1); // 初始化每个孩子分配一个糖果

  // 从左到右遍历，保证右边高评分的孩子获得更多糖果
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1;
    }
  }

  // 从右到左遍历，保证左边高评分的孩子获得更多糖果
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      res[i] = Math.max(res[i], res[i + 1] + 1);
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    count += res[i];
  }

  return count;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = candy;
// @after-stub-for-debug-end