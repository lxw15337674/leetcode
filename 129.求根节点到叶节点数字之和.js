/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let count = 0
  const dfs = (str, node) => {
    if (!node) {
      return;
    }
    if (!node?.left && !node?.right) {
      count += Number(str + node?.val)
      return
    }
    dfs(str + node.val, node.left)
    dfs(str + node.val, node.right)
  }
  dfs('', root)
  return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sumNumbers;
// @after-stub-for-debug-end