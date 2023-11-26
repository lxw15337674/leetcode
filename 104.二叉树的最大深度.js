/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let max = 0
  const tra = (node, level) => {
    if (!node) {
      max = Math.max(level, max)
      return
    }
    tra(node?.left, level + 1)
    tra(node?.right, level + 1)
  }
  tra(root, 1)
  return max

};
// @lc code=end

