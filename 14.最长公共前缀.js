/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 思路1：两个两个比较
  // let minPublic = strs[0]
  // const tra = (str1, str2) => {
  //   const len = Math.min(str1.length, str2.length)
  //   let public = ''
  //   i = 0
  //   while (i < len) {
  //     if (str1[i] !== str2[i]) {
  //       break
  //     } else {
  //       public += str1[i]
  //     }
  //     i++
  //   }
  //   minPublic = public
  // }
  // for (let str of strs) {
  //   tra(minPublic, str)
  // }
  // return minPublic


  // 思路2：循环比较
  let i = 0
  let public = ''
  while (true) {
    const char = strs[0][i]
    for (let str of strs) {
      if (str[i] !== char || str[i] === undefined) {
        return public
      }
    }
    public += char
    i++
    // 终止条件：当遍历到某个字符串的结尾时
    if (i >= strs[0].length) {
      return public;
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end