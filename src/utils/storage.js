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

export default {
  isEmptyStorage,
  getCookie,
  setCookie,
  removeCookie,
  isEmptyCookie,
  /* ===================================== async ===================================== */
  getCookieAsync,
  setCookieAsync,
  removeCookieAsync,
  isEmptyCookieAsync,
};
