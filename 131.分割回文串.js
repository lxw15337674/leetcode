/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const isPali = (str, l, r) => {
    while (l < r) {
      if (str[l] !== str[r]) {
        return false
      }
      l++
      r++
    }
    return true
  }
  const res = []
  const dfs = (temp, start) => {
    if (start == s.length) {
      res.push(temp)
      return
    }
    for (let i = start; i < s.length; i++) {
      if (isPali(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        dfs(temp, i + 1);
        temp.pop();
      }
    }
  }
  dfs([], 0)
  return res
};
// @lc code=end

