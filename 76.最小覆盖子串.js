/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//  ADOBECODEBANC
var minWindow = function (s, t) {
  let left = 0,
    right = 0,
    res = '',
    need = {}, // 存储目标字符串 t 中每个字符的出现次数
    neededCount = t.length; // 记录还需要匹配的字符数量

  for (let char of t) {
    need[char] = (need[char] ?? 0) + 1;
  }

  while (right < s.length) {
    const char = s[right];
    if (need[char] !== undefined) {
      if (need[char] > 0) {
        neededCount--; // 匹配到一个需要的字符，neededCount 减一
      }
      need[char]--; // 更新 need 对象中字符的出现次数
    }

    while (neededCount === 0) {
      const windowSize = right - left + 1;
      if (res === '' || windowSize < res.length) {
        res = s.slice(left, right + 1); // 更新最小窗口
      }
      const leftChar = s[left];
      if (need[leftChar] !== undefined) {
        need[leftChar]++; // 将左边界字符放回窗口
        if (need[leftChar] > 0) {
          neededCount++; // 窗口缩小后，需要匹配的字符数量增加
        }
      }
      left++; // 缩小窗口的左边界
    }

    right++; // 扩大窗口的右边界
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end