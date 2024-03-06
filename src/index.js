import {
  add,
  subtract,
  divide,
  multiply,
  padLeft,
  htmlEscape,
  textHighlight,
  clearEmptyParams,
  setDefaultParams,
  replaceKeys,
  deepClone,
  mergeParams,
  pickParams,
  dedupeArr,
  dedupeArrByKey,
  flatArr,
  findIntersection,
  findPeak,
  findPeakByKey,
  chunkArr,
  sortArr,
  sortArrByKey,
  arrMax,
  arrMin,
  arrMaxByKey,
  arrMinByKey,
  findParentKey,
  findNode,
  flatTree,
  arrayToObject,
  objectToArray,
  jsonToFormData,
  consoleFormData,
  formDataToJson,
  isEmptyStorage,
  setCookie,
  getCookie,
  removeCookie,
  isEmptyCookie,
  isEmptyCookieAsync,
} from "./utils.js";

// require("path");
// const res = floor(6.96);
// console.log(res);

// const date = dateFormat("YYYY-MM-DD HH:mm:ss");
// console.log(date);
// console.log(dateAdd(1, "days"));
// console.log(dateSubtract(1, "days"));
// console.log(dateStartOf(1, "days"));
// console.log(dateEndOf(1, "days"));

console.log(add(1, 2, 3, 4)); // 10
// console.log(subtract(10, 2, 3)); // 5
// console.log(divide(12, 3, 2)); // 2
// console.log(multiply(1, 2, 3)); // 6
// console.log(padLeft("名"));
// console.log(padLeft("2"));
// console.log(padLeft(1));

// const div = `<div>hello</div>`;
// const divStr = htmlEscape(div)
// document.querySelector("body").append(divStr);

// const text = "utils 支持多种下载方式。";
// const style = `fontWeight: bold ;color: #333;`;
// const res = textHighlight(text, "支持", style); // 'utils <span  class="highlight" style="">支持</span>多种下载方式。';
// console.log(res);

const obj = { name: "王花花", age: 18, gender: 0 };
// const res = clearEmptyParams(obj, "effect");
// console.log(res, obj);
const defaultObj = { name: "黎明花", age: 20, like: "code" };
// const res = setDefaultParams(obj, defaultObj);

// const res = replaceKeys(obj, { name: "userName", gender: "sex" });

// const res = deepClone(obj);
// console.log(obj, res, obj == res);

// const res = mergeParams(obj, defaultObj);
// console.log(obj, res);

// const res = pickParams(obj, ["name", "age"]); // {name: '', age: 18}
// console.log(res);

// const arr = [1, 2, 1, 3, 4, 1, 2, [22, 23]];
// const arr2 = [{ name: "王花花", age: 18 }, { name: "黎明花" }, { name: "王花花", age: 20 }];
// const res = dedupeArr(arr);
// console.log(arr, res);

// const res2 = dedupeArrByKey(arr2, "name");
// console.log(arr2, res2);

// const arr = [1, 2, 3, [22, 23, [5, 6]]];

// const res = flatArr(arr);
// console.log(res);

// const arr1 = [1, 27, 3, 4, 5, 12, 21];
// const arr2 = [1, 3, 6];
// const arr3 = [2, 3, 7];
// const arr4 = [{ age: 12 }, { age: 23 }, { age: 20 }];
// // const res = findIntersection(arr1, arr2, arr3);

// // const res = findPeak(arr1);

// const res = findPeakByKey(arr4, "age");
// console.log(res); // [{ age: 23 }, { age: 28 }];

// const arr = ["a", "b", "c", "d", "e", "f",'g'];

// const res = chunkArr(arr, 2);
// console.log(res); // [Array(2), Array(2), Array(2), Array(1)]

// const res1 = sortArr(arr1);
// const res2 = sortArrByKey(arr4, "age");
// console.log(res1);
// console.log(res2);

// console.log(arrMax(arr1)); // 27
// console.log(arrMin(arr1)); // 1

// console.log(arrMaxByKey(arr4, "age")); // {age: 23}
// console.log(arrMinByKey(arr4, "age")); // {age: 12}

// const res = findParentKey(tree, "0-0-0-0", "key");
// console.log(res);

// const res2 = findNode(tree, "0-1-0", "key");
// console.log(res2);

// const res3 = flatTree(tree, "children");
// console.log("res3", res3); // [{…}, {…}, {…}, {…}, {…}, {…}]

// const res = arrayToObject([
//   { a: 14, b: 22 },
//   { a: 21, b: 31 },
// ]);

// console.log(res);

// console.log(objectToArray(res));

// const f = new File(["text1", "text2"], "text.txt", { type: "text/plain" });
// const jsonObj = {
//   name: "王花花",
//   file: f,
// };
// const res = jsonToFormData(jsonObj);
// console.log(res);
// // consoleFormData(res)
// const res2 = formDataToJson(res);
// console.log(res2);

localStorage.setItem("username", "王花花");
const res1 = isEmptyStorage("username");
const res2 = isEmptyStorage("username", "session");
console.log(res1); // false
console.log(res2); // true

setCookie("token", "admin-123", 1);
const token = getCookie("token");
console.log(token);
removeCookie("token");
console.log(isEmptyCookie("token"));
console.log();
isEmptyCookieAsync("token").then((res) => console.log(res));
console.log(1);
