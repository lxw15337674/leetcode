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
  // 回溯
  if (!root) {
    return []
  }
  // 第一种写法：遍历
  const res = []
  let queue = [root]
  while (queue.length) {
    const len = queue.length
    const levelNodes = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      levelNodes.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(levelNodes)
  }
  return res

  // 第二种写法: 递归
  // const res = []
  // const tra = (nodes) => {
  //   if (!nodes.length) {
  //     return
  //   }
  //   const levelNodes = []
  //   const nextNodes = []
  //   while (nodes.length) {
  //     const node = nodes.shift()
  //     levelNodes.push(node.val)
  //     if (node.left) {
  //       nextNodes.push(node.left)
  //     }
  //     if (node.right) {
  //       nextNodes.push(node.right)
  //     }
  //   }
  //   res.push(levelNodes)
  //   tra(nextNodes)
  // }
  // tra([root])
  // return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end
