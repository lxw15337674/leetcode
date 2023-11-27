/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/240096/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
  // 后序遍历， 遇见p，返回p，遇见q返回q。 判断单层循环里left和right，都是null返回null，都不为null节点就是祖先。

  // 空节点直接返回
  if (root === null) {
    return null
  }
  // 只要当前根节点是p和q中的任意一个，就返回（因为不能比这个更深了，再深p和q中的一个就没了）
  if (root === p || root === q) {
    return root
  }
  //根节点不是p和q中的任意一个，那么就继续分别往左子树和右子树找p和q
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // 左右子树都找到p和q了，那就说明p和q分别在左右两个子树上，所以此时的最近公共祖先就是root
  if (left && right) {
    return root
  }
  // 左边有就返回左边，右边有就返回右边
  if (left) {
    return left
  }
  if (right) {
    return right
  }

  // 方法2：
  // 找到两个节点路径，再求出 2 条路径上从根节点开始的最后一个重叠节点即可。
  // 缺点，性能很差
  // const dfs = (paths, node, target) => {
  //   if (!node) {
  //     return
  //   }
  //   if (node === target) {
  //     return paths
  //   }
  //   if (node.left) {
  //     paths.push(node.left)
  //     const result = dfs(paths, node.left, target)
  //     if (result) {
  //       return paths
  //     } else {
  //       paths.pop()
  //     }
  //   }
  //   if (node.right) {
  //     paths.push(node.right)
  //     const result = dfs(paths, node.right, target)
  //     if (result) {
  //       return paths
  //     } else {
  //       paths.pop()
  //     }
  //   }
  //   return
  // }
  // const pPaths = dfs([root], root, p)
  // const qPaths = dfs([root], root, q)
  // const map = new Map()
  // for (let node of pPaths) {
  //   map.set(node, 1)
  // }
  // // 从后往前找匹配的节点，就是最近的祖先节点
  // for (let i = qPaths.length - 1; i >= 0; i--) {
  //   const node = qPaths[i]
  //   if (map.has(node)) {
  //     return node
  //   }
  // }
  // return null
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lowestCommonAncestor;
// @after-stub-for-debug-end


const tree = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
};

const p = tree.left;
const q = tree.right;

const lastCommonNode = lowestCommonAncestor(tree, p, q);
console.log(lastCommonNode.val); // 输出 3