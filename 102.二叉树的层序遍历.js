/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  var res = []
  helper(root, 0)
  function helper(node, level) {
    if (!node) return
    if (!res[level]) {
      res[level] = [node.val]
    } else {
      res[level].push(node.val)
    }
    var left = node.left
    var right = node.right
    helper(left, level + 1)
    helper(right, level + 1)
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end