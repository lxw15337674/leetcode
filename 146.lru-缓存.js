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


class LRUCache {
  constructor(capacity) {
    this.cache = new Map()  //初始化map数据结构
    this.capacity = capacity  //容量
  }

  get(key) {
    if (this.cache.has(key)) {   //map中有这个元素
      let value = this.cache.get(key);  //调用map的get方法获取元素
      //更新key=>value
      this.cache.delete(key);  //删除之前的元素
      this.cache.set(key, value);  //将新获取的相同的元素以键值对推入map中
      return value   //返回关键字的值
    }
    return -1  //map中没有这个元素返回-1
  }

  put(key, value) {
    if (this.cache.has(key)) {  //有这个元素
      this.cache.delete(key);  //删除
    }
    //判断有没有达到存储的阈值
    if (this.cache.size >= this.capacity) {
      //移除谁 再放新值  
      //m.keys().next()拿到首位的键值对
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value);
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}