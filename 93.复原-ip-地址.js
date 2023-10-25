/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  const len = s.length
  const match = (left, right) => {
    const str = s.slice(left, right)
    if (str[0] === '0' && str.length > 1) {
      return -1
    }
    if (parseInt(str) > 255) {
      return -1
    }
    return str
  }
  const dfs = (ipArray, start) => {
    if (ipArray.length === 4 && start === len) {
      res.push(ipArray.join('.'));
      return;
    }
    for (let i = 0; i < 3; i++) {
      const end = start + i + 1
      if (end > len) {
        return
      }
      const ipFragment = match(start, end)
      if (ipFragment === -1) {
        return
      }
      ipArray.push(ipFragment);
      dfs(ipArray, end)
      ipArray.pop();
    }
  }
  dfs([], 0)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = restoreIpAddresses;
// @after-stub-for-debug-end