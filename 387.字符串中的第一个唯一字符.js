/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 方法1：使用哈希表存储频数
  const map = new Map()
  for(let i=0;i<s.length;i++){
    map.set(s[i],(map.get(s[i])??0)+1)
  }
  for(let i=0;i<s.length;i++){
    if(map.get(s[i])===1){
      return i
    }
  }
  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = firstUniqChar;
// @after-stub-for-debug-end