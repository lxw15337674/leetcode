/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const res = []
  for(let i=0;i<=n;i++){
    let count = 0
    for (let char of i.toString(2)){
      if(char==='1'){
        count++
      }
    }
    res[i] = count
  }
  return res
};
// @lc code=end

