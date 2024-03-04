console.log(require)
let models = require.context("../utils", false, /\.js$/);
let exportModels = {};
models.keys().forEach((item) => {
  let startNum = item.indexOf("/") + 1,
    endNum = item.lastIndexOf("."),
    name = item.slice(startNum, endNum);
  if (name != "index") {
    exportModels = {
      ...exportModels,
      ...models(item).default,
    };
  }
});
console.log(exportModels)
export default exportModels;
