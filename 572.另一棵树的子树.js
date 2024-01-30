/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let match = false
  const compare = (r, s) => {
    if (!r && !s) {
      return true
    }
    if (r?.val !== s?.val) {
      return false
    }
    return compare(r.left, s.left) && compare(r.right, s.right)
  }

  const tra = (r, s) => {
    if (r.val === s.val) {
      const res = compare(r, s)
      if(res){
        match=true
        return match 
      }
    }
    if (!r) {
      return
    }
    if (r.left) {
      tra(r.left, s)
    }
    if (r.right) {
      tra(r.right, s)
    }

  }
  tra(root, subRoot)
  return match
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSubtree;
// @after-stub-for-debug-end