/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  function plusOne(str, index) {
    let strArr = str.split('')
    const char = strArr[index]
    if (char === '9') {
      strArr[index] = '0'
    } else {
      strArr[index] = String(Number(char) + 1)
    }
    return strArr.join('')
  }

  function minusOne(str, index) {
    let strArr = str.split('')
    const char = strArr[index]
    if (char === '0') {
      strArr[index] = '9'
    } else {
      strArr[index] = String(Number(char) - 1)
    }
    return strArr.join('')
  }

  const deads = new Set()
  for (const ds of deadends) {
    deads.add(ds)
  }
  const queue = new Queue()
  const visited = new Set()
  // 从起点开始广度优先搜索
  let step = 0
  queue.enqueue('0000')
  visited.add('0000')

  while (!queue.isEmpty()) {
    let size = queue.size()
    // 遍历当前节点后的所有可能转法
    for (let i = 0; i < size; i++) {
      const curr = queue.dequeue()

      // 跳过死亡数字
      if (deads.has(curr)) {
        continue
      }
      if (curr === target) {
        return step
      }

      // 开转
      for (let j = 0; j < 4; j++) {
        const plus = plusOne(curr, j)
        if (!visited.has(plus)) {
          queue.enqueue(plus)
          visited.add(plus)
        }

        const minus = minusOne(curr, j)
        if (!visited.has(minus)) {
          queue.enqueue(minus)
          visited.add(minus)
        }
      }
    }
    step++
  }
  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = openLock;
// @after-stub-for-debug-end