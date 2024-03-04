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

export default {
  findParent,
  findChild,
  flatTree,
  toTree,
};
