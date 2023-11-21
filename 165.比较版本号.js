/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1List = version1.split('.')
  const v2List = version2.split('.')
  const compare = (v1, v2) => {
    if (Number(v1) === Number(v2)) {
      return 0
    }
    if (Number(v1) > Number(v2)) {
      return 1
    } else {
      return -1
    }
  }
  for (let v = 0; v < 4; v++) {
    const res = compare(v1List[v] || 0, v2List[v] || 0)
    if (res) {
      return res
    }
  }
  return 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end