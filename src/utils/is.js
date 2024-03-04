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
  if (!isObject()) return false;
  return !Object.keys(obj).length;
}
/**
 * @description: 是否为空数组
 */
export function isEmptyArray(arr) {
  if (!isArray()) return false;
  return !Object.keys(arr).length;
}

// 统一默认导出
export default {
  typeOf,
  isObject,
  isArray,
  isString,
  isNumber,
  isJson,
  typeOf,
  isEmptyObject,
  isEmptyArray,
};
