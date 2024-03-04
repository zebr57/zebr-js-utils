/* ===================================== is判断 ===================================== */
/**
 * @description: 类型判断
 */
export function typeOf(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
/**
 * @description: 是否为对象
 */
export function isObject(target) {
  return typeOf(target) == "Object";
}
/**
 * @description: 是否为数组
 */
export function isArray(target) {
  return typeOf(target) == "Array";
}
/**
 * @description: 是否为字符串
 */
export function isString(target) {
  return typeOf(target) == "String";
}
/**
 * @description: 是否为数字
 */
export function isNumber(target) {
  return typeOf(target) == "Number";
}
/**
 * 是否为json
 * @param {*} data
 * @returns {Boolean}
 */
export function isJson(data = null) {
  try {
    if (typeof data !== "string") return false;
    let jsonObj = JSON.parse(data);
    return !!(jsonObj && typeof jsonObj === "object");
  } catch (error) {
    console.log(error);
    return false;
  }
}
/**
 * @description: 是否为空对象
 */
export function isEmptyObject(obj) {
  if (!isObject(obj)) return false;
  return !Object.keys(obj).length;
}
/**
 * @description: 是否为空数组
 */
export function isEmptyArray(arr) {
  if (!isArray(arr)) return false;
  return !Object.keys(arr).length;
}
/* ===================================== 数学计算 ===================================== */
/**
 * @description: 计算多数之和
 * @param {number} arguments 数值
 * @return {number|string} 结果
 */
export function add() {
  try {
    let sum = 0;
    if (!arguments.length) return 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeOf(arguments[i]) !== "Number") throw `arguments, ${arguments[i]} type is not Number`;
      const item = arguments[i];
      sum += item;
    }
    return sum;
  } catch (error) {
    console.error(error);
  }
}
/**
 * @description: 多数相减
 * @param {number} arguments 第一个参数为被减数，剩余参数为减数
 * @return {number} 相减结果
 */
export function subtract() {
  try {
    if (arguments.length < 2) throw "subtract() params without minuend or subtrahend";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result - argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description: 多数相除
 * @param {number} arguments 第一个参数为被除数，剩余参数为除数
 * @return {number}
 */
export function divide(dividend, divisor) {
  try {
    if (arguments.length < 2) throw "divide() params without dividend or divisor";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result / argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
/**
 * @description: 多数相乘
 * @param {number} arguments 第一个参数为被乘数，剩余参数为乘数
 * @return {number}
 */
export function multiply() {
  try {
    if (arguments.length < 2) throw "multiply() params without multiplicand or multiplier";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result * argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
/**
 * @description: 向下精确小数位数
 * @param {number} number 向下取整的数字
 * @param {number} toFixed 精确位数
 * @return {*}
 */
export function floor(number, precision = 0) {
  return number.toFixed(precision);
}
export function round(number, precision = 0) {}

/* ===================================== 数字 or 字符串 ===================================== */
/**
 * @description: 单位数字前面补0
 * @param {*} num 数字
 * @return {*} padleft(8) => 08
 */
export function padleft(num) {
  return (String(num)[1] && String(num)) || "0" + num;
}

/**
 * @description: 转译html字符
 * @param {string} htmlStr html内容
 * @return {string} 转译结果
 */
export function htmlEscape(htmlStr) {
  let reg = /(<|>)/g;
  return htmlStr.replace(reg, (match) => {
    if (match === "<") {
      return "&lt;";
    } else if (match === ">") {
      return "&gt;";
    }
  });
}

/**
 * @description: 文本给匹配内容添加标签样式|类名
 * @param {string} text 文本
 * @param {string} content 匹配内容
 * @param {string} style 样式字符串
 * @param {string} className 类名
 * @return {string} 匹配修改结果
 * @example 
 *  const text = "utils 支持多种下载方式。"
    const style = `fontWeight: bold ;color: #333;`
    const res = textHtmlTag(text, '支持', style)
    res => 'utils <span  class="highlight" style="">支持</span>多种下载方式。'
 */
export function textHighlight(text, content, style = "", className = "highlight") {
  const regExp = new RegExp(content, "g");
  const result = text.replace(regExp, `<span  class="${className}" style="${style}">${content}</span>`);
  return result;
}

/**
 * @description: 将字符串按照指定长度分割成数组
 * @param {string} str
 * @param {number} num
 * @return {array}
 * divideStr(’abcdef‘, 2) // [’ab','cd','ef‘]
 */
export function divideStr(str, len) {
  let arr = [];
  let index = 0;
  while (index < str.length) {
    arr.push(str.slice(index, (index += len)));
  }
  return arr;
}
/* ===================================== 对象 ===================================== */

/**
 * @description: 清除值为'' 或 null的字段
 * @param {object} params 参数对象.
 * @param {string} fnType pure（纯）| effect（虚），默认pure.
 * @param {boolean} isIncludeNull  是否清除null，默认true.
 * @return {object} params 处理好的参数对象
 */
export function clearEmptyParams(params, fnType = "pure", isIncludeNull = true) {
  if (!(params instanceof Object)) {
    throw Error("传入参数必须是Object");
  }
  if (Object.keys(params).length === 0) {
    throw Error("传入参数对象不能为空");
  }

  if (fnType == "pure") params = JSON.parse(JSON.stringify(params));
  const paramsKeys = Object.keys(params);
  for (let i = 0; i < paramsKeys.length; i++) {
    let key = paramsKeys[i];
    let value = params[key];
    console.log(key, value);
    if ((!value && typeof value == "string") || (value == null && isIncludeNull)) {
      delete params[key];
    }
  }
  return params;
}

/**
 * @description: 设置需要的字段值
 * @param {object} params 设置对象.
 * @param {object} data 获取对象.
 * @param {string} fnType pure（纯）| effect（虚），默认pure.
 * @return {object} params 处理好的参数对象
 */
export function setDefaultParams(params, data, fnType = "pure") {
  if (!(data instanceof Object)) {
    throw Error("传入参数必须是Object");
  }
  if (Object.keys(data).length === 0) {
    throw Error("传入参数对象不能为空");
  }

  if (fnType == "pure") params = JSON.parse(JSON.stringify(params));
  const paramsKeys = Object.keys(params);
  const dataKeys = Object.keys(data);
  for (let i = 0; i < dataKeys.length; i++) {
    let key = dataKeys[i];
    let value = data[key];
    if (paramsKeys.includes(key)) {
      if (value == null) {
        // todo: 给为空时候的值 or 不处理就按原来的
      } else {
        params[key] = value; // 赋值
      }
    }
  }
  console.log("setDefaultParams", params);
  return params;
}

/**
 * @description: 传入需要更换的对象和一个字段对应的 map，返回替换结果
 * @param {object} params 替换对象.
 * @param {object} keysMap 键名映射.
 * @param {string} fnType pure（纯）| effect（虚），默认pure.
 * @return {object} params 处理好的参数对象
 */
export function replaceKeys(params, keysMap = {}, fnType = "pure") {
  if (!(params instanceof Object)) {
    throw Error("传入参数必须是Object");
  }
  if (Object.keys(params).length === 0) {
    throw Error("传入参数对象不能为空");
  }

  if (fnType == "pure") params = JSON.parse(JSON.stringify(params));
  const paramsKeys = Object.keys(params);
  for (let i = 0; i < paramsKeys.length; i++) {
    let key = paramsKeys[i];
    let value = params[key];
    if (keysMap[key]) {
      params[keysMap[key]] = value;
      delete params[key];
    }
  }
  return params;
}

/**
//  * @description: JSON拷贝
 * @param {*} target 目标对象
 * @return {*} 拷贝结果
 */
export function jsonClone(target) {
  return JSON.parse(JSON.stringify(target));
}

/**
 * @description: 深拷贝
 * @param {object|array} target 目标对象
 * @param {string} type 'obj' or 'arr'
 * @return {*} 拷贝结果对象
 */
export function deepClone(target, type) {
  let result = type == "obj" ? {} : [];
  if (target instanceof Object) {
    let toStr = Object.prototype.toString;
    let arrType = "[object Array]";
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const item = target[key];
        if (typeof item == "object" && item != null) {
          let type = toStr.call(item) === arrType ? "arr" : "obj";
          result[key] = deepClone(item, type);
        } else {
          result[key] = item;
        }
      }
    }
  } else {
    return;
  }
  return result;
}

/**
 * @description: 合并两个对象
 * @param {*} tar1 对象1
 * @param {*} tar2 对象2
 * @return {*} 合并结果
 */
export function mergeParams(tar, tar2) {
  return Object.assign(tar, tar2);
}

/**
 * @description: 选出指定字段值
 * @param {object} data 目标对象
 * @param {array} keyArr 键值数组
 * @return {object} 结果对象
 */
export function pickParams(data, keyArr) {
  let result = {};
  for (let i = 0; i < keyArr.length; i++) {
    const key = keyArr[i];
    result[key] = data[key];
  }
  return result;
}

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
 * @description: 排序数组
 * @param {array} arr 数组
 * @param {boolean} sortAsc true(升序)从小到大 | false (降序)从大到小
 * @return {array}
 * @example
 * const arr = [1,3,5,4,2]
 * sortArr(arr, false) // [1,2,3,4,5]
 */
export function sortArr(arr, sortAsc) {
  let sortArr = [];
  sortArr = arr.sort((a, b) => {
    if (sortAsc) {
      return a - b;
    } else {
      return b - a;
    }
  });
  return sortArr;
}
/**
 * @description: 通过键值大小排序数组
 * @param {array} arr 数组
 * @param {sting} key 键名
 * @param {boolean} sortAsc true(升序)从小到大 | false (降序)从大到小
 * @return {array}
 * @example
 * const arr = [{ name: '小李', age: 15 }, { name: '小红', age: 25 }, { name: '小明', age: 19 }]
 * sortByKey(arr, 'age') // [{ name: '小李', age: 15 }, { name: '小明', age: 19 }, { name: '小红', age: 25 }]
 */
export function sortArrByKey(arr, key, sortAsc = true) {
  let sortArr = [];
  sortArr = arr.sort((a, b) => {
    if (sortAsc) {
      return a[key] - b[key];
    } else {
      return b[key] - a[key];
    }
  });
  return sortArr;
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
/* ===================================== 树结构 ===================================== */
/**
 * @description: 查找所有父节点的id(key)
 * @param {*} array 目标对象
 * @param {*} value 查找值
 * @param {*} valueKey 查找值对应的key
 * @param {*} childrenKey 目标对象中子级的的key
 * @return {*} 父节点键值集合
 */
export function findParent(array, value, valueKey = "value", childrenKey = "children") {
  if (!array || !Array.isArray(array)) return;
  const result = [];
  let valid = false;
  const loop = (array, value) => {
    let parentValue = "";
    const loopUp = (array, value, lastValue) => {
      array.forEach((v) => {
        let val = v[valueKey];
        let child = v[childrenKey];
        if (val == value) {
          valid = true; // 验证存在匹配的子节点
          parentValue = lastValue; // 当找到匹配的后，证明传进来的这个节点就是 原来节点的上一级节点
          return;
        } else {
          child && child.length && loopUp(child, value, val);
        }
      });
    };
    loopUp(array, value);
    if (parentValue) {
      result.shift(parentValue);
      loop(array, parentValue);
    }
  };
  loop(array, value);
  return valid ? [...result, value] : [];
}
/**
 * @description: 查找所有子节点的id(key)
 * @param {*} array 目标对象
 * @param {*} value 查找值
 * @param {*} valueKey 查找值对应的key
 * @param {*} childrenKey 目标对象中子级的的key * @return {*} 子节点键值集合
 */
export function findChild(array, value, valueKey = "value", childrenKey = "children") {
  let node = null;
  const loop = (array, value) => {
    array.forEach((v) => {
      if (v[valueKey] == value) {
        node = v;
      } else {
        if (v[childrenKey] && v[childrenKey].length) loop(v[childrenKey], value);
      }
    });
  };
  loop(array, value);
  return node;
}

/**
 * @description: 扁平化数组
 * @param {array} arr 目标对象
 * @param {string} key 键名
 * @return {array} 扁平后的结果
 */
export function flatTree(arr, key) {
  let result = [];
  arr.forEach((v) => {
    result = result.concat(v);
    if (Array.isArray(v[key]) && v[key].length) {
      result = result.concat(flatArr(v[key], key));
    }
  });
  return result;
}
/**
 * @description: 将扁平化的数组转化为树结构
 * @param {*} arr 数组
 * @param {*} parentIdKey 父级Id键名
 * @param {*} parentId 父级Id
 * @return {*}
 */
export function toTree(arr, parentIdKey, parentId = null) {
  const tree = [];

  arr.forEach((item) => {
    if (item[parentIdKey] === parentId) {
      const children = arrayToTree(arr, parentIdKey, item.id);
      if (children.length) {
        item.children = children;
      }
      tree.push(item);
    }
  });

  return tree;
}
/* ===================================== 格式转换 ===================================== */

/**
 * @description: 数组转对象
 * @param {*} arr 目标数组[{a: 14, b: 22}, {a: 21, b: 31}]
 * @return {*} {a: [14, 21], b: [22, 31]}
 */
export function arrayToObject(arr) {
  let result = {};
  arr.forEach((item) => {
    Object.entries(item).forEach((v) => {
      const key = v[0];
      const value = v[1];
      result.push({ [key]: [] });
      if (result[key] && result[key].length) {
        result[key].push(value);
      } else {
        result[key] = [];
        result[key].push(value);
      }
    });
  });
  return result;
}

export function objectToArray(obj) {
  let result = [];
  let keyArr = [];
  let valueArr = [];
  Object.entries(obj).forEach((item, index) => {
    const key = item[0];
    const value = item[1];
    keyArr.push(key);
    valueArr.push(value);
  });
  const len = valueArr[0].length;
  for (let i = 0; i < len; i++) {
    result[i] = {};
    for (let j = 0; j < valueArr.length; j++) {
      if (valueArr[j]) {
        result[i][keyArr[j]] = valueArr[j][i];
      }
    }
  }
  return result;
}
/**
 * @description: json对象转FormData
 * @param {object} obj 对象
 * @param {*} oldFormData 已有的formData
 * @return {*}
 */
export function jsonToFormData(obj, oldFormData) {
  let formData = oldFormData || new FormData();
  if (obj) {
    for (let k in obj) {
      formData.append(k, obj[k]);
    }
  }
  return formData;
}
/**
 * @description: formData转成json对象
 * @param {formData} formData
 * @return {object} {...}
 */
export function formDataToJson(formData) {
  let res = {};
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
    res[key] = value;
  }
  return res;
}
/**
 * 控制台打印formData键对值
 */
export function consoleFormData() {
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
}
/* ===================================== 本地存储 ===================================== */

/**
 * @description: localStorage和sessionStorage 根据键名判断是否存在
 * @param {string} name 键名
 * @param {string} type local | session
 * @return {boolean} true | false
 */
export function isEmptyStorage(name, type = "local") {
  if (type == "local") return !localStorage.getItem(name);
  if (type == "session") return !sessionStorage.getItem(name);
}

/**
 * @description: 获取cookies
 * @param {*} name 键
 * @return {*} value值
 */
export function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(";");
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split("=");
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return null;
}
/**
 * @description: 设置cookies
 * @param {string} name 键
 * @param {string} value 值
 * @param {number} days 有效期单位（天）
 * @return {*}
 */
export function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date;
}
/**
 * @description: 移除cookies
 * @param {string} name cookies name值
 * @return {*}
 */
export function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  this.setCookie(name, "1", -1);
}
/**
 * @description: 根据name判断cookie是否为空
 * @param {string} name 键名
 * @return {boolean}
 */
export function isEmptyCookie(name) {
  return !getCookie(name);
}

// 异步cookies操作，存在兼容性
export function getCookieAsync(name) {
  return cookieStore.get(name);
}
export function setCookieAsync(name, value) {
  return cookieStore.set(name, value);
}
export function removeCookieAsync(name) {
  return cookieStore.delete(name);
}
export async function isEmptyCookieAsync(name) {
  let res = await cookieStore.get(name);
  return !res;
}
/* ===================================== 测试 ===================================== */

export default {
  padleft,
  htmlEscape,
  /* ===================================== 对象 ===================================== */
  isEmptyObject,
  clearEmptyParams,
  setDefaultParams,
  replaceKeys,
  jsonClone,
  deepClone,
  mergeParams,
  pickParams,
  /* ===================================== 数组 ===================================== */
  dedupeArr,
  dedupeArrByKey,
  flatArr,
  getIntersection,
  findPeak,
  findPeakByKey,
  chunkArr,
  arrMax,
  arrMin,
  arrMaxByKey,
  arrMinByKey,
  /* ===================================== 数组对象 ===================================== */
  arrayToObject,
  objectToArray,
  findParent,
  findChild,
  flatTree,
  /* ===================================== 存储 ===================================== */
  isEmptyStorage,
  getCookie,
  setCookie,
  removeCookie,
  isEmptyCookie,
  getCookieAsync,
  setCookieAsync,
  removeCookieAsync,
  isEmptyCookieAsync,
};
