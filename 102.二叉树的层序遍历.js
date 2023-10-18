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
  if (!root) {
    return []
  }
  const res = []
  let queue = [root]
  //  第一种写法
  // while (queue.length) {
  //   const levelNodes = []
  //   res.push([])
  //   for (let item of queue) {
  //     res[res.length - 1].push(item.val)
  //     if (item.left) {
  //       levelNodes.push(item.left)
  //     }
  //     if (item.right) {
  //       levelNodes.push(item.right)
  //     }
  //   }
  //   queue = levelNodes
  // }
  // 第二种写法
  while (queue.length) {
    const length = queue.length
    const levelNodes = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      levelNodes.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(levelNodes);
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end
