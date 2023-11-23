/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // 思路：先补0，然后从后往前相加，通过carry记录是否进位。
  let res = ''
  const DLength = num1.length - num2.length
  if (DLength > 0) {
    for (let i = 0; i < DLength; i++) {
      num2 = `0${num2}`
    }
  } else {
    for (let i = 0; i < -DLength; i++) {
      num1 = `0${num1}`
    }
  }
  const len = num1.length
  let carry = 0
  for (let i = len - 1; i >= 0; i--) {
    const n1 = Number(num1[i])
    const n2 = Number(num2[i])
    let count = n1 + n2 + carry
    if (count >= 10) {
      carry = 1
      count -= 10
    } else {
      carry = 0
    }
    res = `${count}${res}`
  }
  if (carry === 1) {
    res = `1${res}`
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end