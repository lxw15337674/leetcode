// 社团共有 m*2 位男女参与破冰游戏。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字n，从 0 号成员起开始计数1，计数到n时，该成员离开圆桌，且成员离开后从下一个成员开始计数。执行n次，离开的成员都是女生，给出男女的座位顺序，男为B，女为G。
// 示例 1：
// m = 4, n = 2
// 输出：'BGBGBBBB'
// m = 12,n = 5
// 输出：GBBBGBBBBGBBBBGBBBBGBBBB


let iceBreakingGame = function (m, n) {
  const res = new Array(m * 2).fill('B'); // 创建一个长度为 m*2 的数组，初始填充为 'B'
  let index = 0; // 当前位置的索引
  let curIndex = 0; // 当前计数的索引
  let count = n; // 剩余计数次数

  const indexPlus = () => {
    if (index === res.length - 1) {
      index = 0; // 如果已经到达数组末尾，则将索引重置为 0
    } else {
      index++; // 否则，移动到下一个位置
    }
  };

  while (count > 0) {
    if (res[index] === 'G') {
      indexPlus(); // 如果当前位置是 'G'，则跳过并移动到下一个位置
      continue; // 继续下一次循环
    }

    if ((curIndex + 1) % n === 0) {
      res[index] = 'G'; // 如果当前计数索引加一后能被 n 整除，说明该位置需要离开，将其设为 'G'
      count--; // 计数次数减一
    }

    indexPlus(); // 移动到下一个位置
    curIndex++; // 当前计数索引加一
  }

  return res.join('').toString(); // 将数组转换为字符串，并返回
};

iceBreakingGame(4, 2) // BGBGBBBB
iceBreakingGame(12, 5)// GBBBGBBBBGBBBBGBBBBGBBBB
