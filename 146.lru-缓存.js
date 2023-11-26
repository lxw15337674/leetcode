/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// https://leetcode.cn/problems/lru-cache/solutions/2456294/tu-jie-yi-zhang-tu-miao-dong-lrupythonja-czgt/
// https://leetcode.cn/problems/lru-cache/solutions/260362/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/

// 数据被读取了，就是被使用了，所在的位置要刷新，浮到“顶部”。
// 写入数据时：
// 之前就存在的：更新数据，刷新位置。
// 之前不存在的：有位置就直接写入，没有位置，就删掉最久没有使用的条目，再写入。
// 要求 get 和 put 为 O(1)，这俩操作都可能导致条目的移动(有删除操作)，所以删除操作也要是 O(1)。

class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dummy = new Node(); // 哨兵节点
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.keyToNode = new Map();
  }

  getNode(key) {
    if (!this.keyToNode.has(key)) { // 没有这本书
      return null;
    }
    const node = this.keyToNode.get(key); // 有这本书
    this.remove(node); // 把这本书抽出来
    this.pushFront(node); // 放在最上面
    return node;
  }

  get(key) {
    const node = this.getNode(key);
    return node ? node.value : -1;
  }

  put(key, value) {
    let node = this.getNode(key);
    if (node) { // 有这本书
      node.value = value; // 更新 value
      return;
    }
    node = new Node(key, value) // 新书
    this.keyToNode.set(key, node);
    this.pushFront(node); // 放在最上面
    if (this.keyToNode.size > this.capacity) { // 书太多了
      const backNode = this.dummy.prev;
      this.keyToNode.delete(backNode.key);
      this.remove(backNode); // 去掉最后一本书
    }
  }

  // 删除一个节点（抽出一本书）
  remove(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
  }

  // 在链表头添加一个节点（把一本书放在最上面）
  pushFront(x) {
    x.prev = this.dummy;
    x.next = this.dummy.next;
    x.prev.next = x;
    x.next.prev = x;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

