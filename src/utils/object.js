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

export default {
  clearEmptyParams,
  setDefaultParams,
  replaceKeys,
  jsonClone,
  deepClone,
  mergeParams,
  pickParams,
};
