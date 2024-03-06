const eagerImportModules = import.meta.glob("../utils/*.js", { eager: true });

// 对批量导入存放模块的对象进行处理
// 先获取其全部属性
const keys = Object.keys(eagerImportModules);
// 执行批量替换操作
for (let path of keys) {
  // 裁剪字符串方式得到路径中的文件名（无扩展名）
  let name = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".js"));
  // 对原对象执行添加新的属性并删除旧属性达到处理效果
  eagerImportModules[name] = eagerImportModules[path].default;
  delete eagerImportModules[path];
}

const values = Object.values(eagerImportModules);
let utils = {};
for (let item of values) {
  utils = { ...utils, ...item };
}

export default utils;

// webpack ...
// let models = require.context("../utils", false, /\.js$/);
// let exportModels = {};
// models.keys().forEach((item) => {
//   let startNum = item.indexOf("/") + 1,
//     endNum = item.lastIndexOf("."),
//     name = item.slice(startNum, endNum);
//   if (name != "index") {
//     exportModels = {
//       ...exportModels,
//       ...models(item).default,
//     };
//   }
// });
// console.log(exportModels);
// export default exportModels;
