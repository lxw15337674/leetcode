/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
const minDepth = function (root) {
  // 广度优先遍历算法 
  if (root === null) return 0;
  const q = []
  q.push(root)
  let depth = 1
  while (q.length) {
    let length = q.length
    for (let i = 0; i < length; i++) {
      let node = q.shift()
      if (!node?.left && !node?.right) {
        return depth
      }
      if (node?.left) {
        q.push(node.left)
      }
      if (node?.right) {
        q.push(node.right)
      }
    }
    depth++
  }
  return depth
};
// @lc code=end

// var minDepth = function (root) {
//   let min = Infinity
//   if (!root) {
//     return 0
//   }
//   const dfs = (node, depth) => {
//     if (node?.left) {
//       dfs(node.left, depth + 1)
//     }
//     if (node?.right) {
//       dfs(node.right, depth + 1)
//     }
//     if (!node?.left && !node?.right) {
//       min = Math.min(depth, min)
//       return
//     }
//   }

//   dfs(root, 1)
//   return min
// };


// @after-stub-for-debug-begin
module.exports = minDepth;
// @after-stub-for-debug-end