/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const traversal = (node, res) => {
    if (!node) return
    traversal(node.left, res) //左节点
    res.push(node.val) //根节点
    traversal(node.right, res) //右节点
  }
  const res = []
  traversal(root, res)
  return res
};
// @lc code=end

