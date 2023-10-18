/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.tree = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cursor = this.tree
  for (let item of word) {
    if (!cursor[item]) {
      cursor[item] = {}
    }
    cursor = cursor[item]
  }
  cursor.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cursor = this.tree
  for (let item of word) {
    if (!cursor[item]) {
      return false
    }
    cursor = cursor[item]
  }
  return cursor.isWord === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cursor = this.tree
  for (let item of prefix) {
    if (!cursor[item]) {
      return false
    }
    cursor = cursor[item]
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = Trie;
// @after-stub-for-debug-end