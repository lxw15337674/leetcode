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
  // 切分版本，然后从前往后对比
  const version1List = version1.split('.')
  const version2List = version2.split('.')
  const maxLen = version1List.length > version2List.length ? version1List.length : version2List.length

  for (let i = 0; i < maxLen; i++) {
    const v1 = version1List[i] ?? '0'
    const v2 = version2List[i] ?? '0'
    if (Number(v1) === Number(v2)) {
      continue
    }
    return Number(v1) > Number(v2) ? 1 : -1
  }
  return 0
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end