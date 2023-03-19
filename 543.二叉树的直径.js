/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let depth = 0
  const maxDepth = (node) => {
    if (!node) {
      return 0
    }
    let leftMax = maxDepth(node.left)
    let rightMax = maxDepth(node.right)
    depth = Math.max(depth, leftMax + rightMax)
    return Math.max(leftMax, rightMax) + 1
  }
  maxDepth(root)
  return depth
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = diameterOfBinaryTree;
// @after-stub-for-debug-end