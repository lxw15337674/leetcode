/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// https://leetcode.cn/problems/reverse-integer/solutions/1079139/qiang-xing-fan-zhuan-wei-yun-suan-2chong-1sex/
var reverse = function (x) {
  // 思路1：强行翻转
  const res = x.toString().split('')
  let left = res[0] === '-' ? 1 : 0; right = res.length - 1
  while (left < right) {
    [res[left], res[right]] = [res[right], res[left]]
    left++
    right--
  }
  const reversed = Number(res.join(''))
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversed;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end