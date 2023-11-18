/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  let queue = [root]
  let isOrderLeft = true
  const nodes = []
  while (queue.length) {
    const length = queue.length
    const levelNodes = []
    const nextNodes = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (isOrderLeft) {
        levelNodes.push(node.val);
      } else {
        levelNodes.unshift(node.val); // 将左子节点插入到数组头部
      }
      if (node?.left !== null) {
        nextNodes.push(node.left)
      }
      if (node?.right !== null) {
        nextNodes.push(node.right)
      }
    }
    isOrderLeft = !isOrderLeft
    queue = nextNodes
    nodes.push(levelNodes)
  }
  return nodes
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = zigzagLevelOrder;
// @after-stub-for-debug-end