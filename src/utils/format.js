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

export default {
  arrayToObject,
  objectToArray,
  jsonToFormData,
  formDataToJson,
  consoleFormData,
};
