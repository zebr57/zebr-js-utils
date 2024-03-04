/* ===================================== 数组 ===================================== */

/**
 * @description: 数组去重
 * @param {array}  目标对象.
 * @return {array} 去重后的数组
 */
export function dedupeArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * @description: 数组对象通过键值去重
 * @param {array}  目标对象.
 * @param {string}  键.
 * @return {array} 去重后的数组
 */
export function dedupeArrByKey(arr, key) {
  const res = new Map();
  return arr.filter((a) => !res.has(a[key]) && res.set(a[key], 1));
}

/**
 * 推荐使用Es6 API：arr.flat(Infinity) 参数Infinity表示完全展开，使用起来非常方便、快捷。
 * @description: 扁平化普通数组;
 * @param {array} arr 目标数组
 * @return {array} 扁平后数组
 */
export const flatArr = function (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
  }, []);
};

/**
 * @description: 获取多个数组的交集
 * @param {array} arr
 * @param {array} ...arrs
 * @return {array}
 */
export function getIntersection(arr, ...arrs) {
  return [...new Set(arr)].filter((item) => {
    return arrs.every((v) => {
      return v.includes(item);
    });
  });
}

/**
 * @description: 找出数组中的峰值
 * @param {array} arr 目标对象
 * @param {string} type 峰值朝向 up | down
 * @return {array}  返回峰值
 */
export function findPeak(arr, type = "up") {
  let prev, peak, next;
  let peakArr = [];

  for (let i = 0; i < arr.length; i++) {
    prev = arr[i - 2];
    peak = arr[i - 1];
    next = arr[i];
    if (i >= 2) {
      if (type == "up") {
        if (peak > prev && peak > next) peakArr.push(peak);
      } else if (type == "down") {
        if (peak < prev && peak < next) peakArr.push(peak);
      }
    }
  }

  return peakArr;
}
/**
 * @description: 根据键值找出数组中的峰值
 * @param {array} arr 目标对象
 * @param {string} arr 键名
 * @param {string} type 峰值朝向 up | down
 * @return {array} []
 */
export function findPeakByKey(arr, key, type = "up") {
  let prev, peak, next;
  let peakArr = [];

  for (let i = 0; i < arr.length; i++) {
    prev = arr[i - 2] ? arr[i - 2][key] : 0;
    peak = arr[i - 1] ? arr[i - 1][key] : 0;
    next = arr[i][key];
    if (i >= 2) {
      if (type == "up") {
        if (peak > prev && peak > next) peakArr.push(arr[i - 1]);
      } else if (type == "down") {
        if (peak < prev && peak < next) peakArr.push(arr[i - 1]);
      }
    }
  }

  return peakArr;
}

/**
 * @Author: Jia sen
 * @description: 数组分段函数
 * @param {Array} arr 原数组
 * @param {Number} len 拆分长度
 * @return {*}
 */
export function chunkArr(arr, len) {
  const result = [];
  for (var i = 0; i < arr.length; i += len) {
    result.push(arr.slice(i, i + len));
  }
  return result;
}

/**
 * @description: 数组中最大的数
 */
export function arrMax(arr) {
  return arr.reduce((pre, cur) => {
    return cur > pre ? cur : pre;
  }, 0);
}
/**
 * @description: 数组中最小的数
 */
export function arrMin(arr) {
  return arr.reduce((pre, cur) => {
    return cur < pre ? cur : pre;
  }, 0);
}

/**
 * @description: 数组中键值最大的一项
 * @param {Array} arr 数组
 * @param {string} key 键名
 * @return {*} 第一个最大值的一项
 */
export function arrMaxByKey(arr, key) {
  return arr.reduce((pre, cur) => {
    return cur[key] < pre.age ? cur : pre;
  }, arr[0]);
}
/**
 * @description: 数组中键值最小的一项
 * @param {Array} arr 数组
 * @param {string} key 键名
 * @return {*} 第一个最小值的一项
 */
export function arrMinByKey(arr, key) {
  return arr.reduce((pre, cur) => {
    return cur[key] < pre.age ? cur : pre;
  }, arr[0]);
}

export default {
  dedupeArr,
  dedupeArrByKey,
  getIntersection,
  findPeak,
  findPeakByKey,
  chunkArr,
  arrMax,
  arrMin,
  arrMaxByKey,
  arrMinByKey,
};
