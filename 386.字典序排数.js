/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  // 深度遍历+剪枝
  const res = []
  const dfs = (str) => {
    for (let i = 0; i < 10; i++) {
      if (str === '' && i === 0){
        continue
      }
      const numStr = str + i
      if (Number(numStr) > n ) {
        return
      }
      res.push(Number(numStr))
      dfs(numStr)
    }
  }
  dfs('')
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lexicalOrder;
// @after-stub-for-debug-end