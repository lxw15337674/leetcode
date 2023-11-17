/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let res = null
  const dfs = (node) => {
    if (!node || res) return
    if (node.val === val) {
      res = node
      return
    }
    if (node.val > val) {
      dfs(node.left)
    } else {
      dfs(node.right)
    }
  }
  dfs(root)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchBST;
// @after-stub-for-debug-end