/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let max = 0
  let maxStr = text1
  let minStr = text2
  let left= 0
  let right =0
  if (text1.length < text2.length) {
    maxStr = text2
    minStr = text1
  }
  while(right<minStr.length){
    while(!maxStr.includes(minStr.slice(left,right+1))){
      left++
    }
    right++
    max = Math.max(max,right-left)
  }
  return max
};
// @lc code=end

