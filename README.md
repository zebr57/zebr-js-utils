# js-utils 工作中常用的一些数据操作

支持按需引入

文档说明、注释清晰

## is 判断

1. 类型判断 `typeOf`
2. 是否为对象 `isObject`
3. 是否为数组 `isArray`
4. 是否为数组 `isString`
5. 是否为数字 `isNumber`
6. 是否为 json `isJson`
7. 是否为空对象 `isEmptyObject`
8. 是否为空数组 `isEmptyArray`

## 计算

1. 递增 `add`
2. 递减 `subtract`
3. 递除 `divide`
4. 递乘 `multiply`

## 字符串

1. 单位数补 0 `padLeft`
2. 显示 HTML 标签 `htmlEscape`
3. 文本高亮 `textHighlight`
4. 字符串分段 `sliceStr`

## 对象 {}

1. 清除值为'' 或 null 的字段 `clearEmptyParams`
2. 设置所需的字段值 `setDefaultParams`
3. 替换键名 `replaceKeys`
4. 通过 JSON 拷贝 `jsonClone`
5. 对象深拷贝 `deepClone`
6. 选出指定字段值 `pickParams`
7. 合并对象 `mergeParams`

## 数组 []

1. 数组去重 `dedupeArr`
2. 数组对象通过键值去重 `dedupeArrByKey`
3. 扁平化普通数组 `flatArr`
4. 获取多个数组的交集 `getIntersection`
5. 找出数组中的峰值（正反） `findPeak`
6. 通过键值找出数组中的峰值（正反） `findPeakByKey`
7. 数组分段 `chunkArr`
8. 数组排序 `sortArr`,
9. 数组对象通过键值排序 `sortArrByKey`,
10. 数组中最大值 `arrMax`
11. 数组中最小值 `arrMin`
12. 数组中键值最大的一项 `arrMaxByKey`
13. 数组中键值最小的一项 `arrMinByKey`

## 树结构 [{children}]

1. 查找所有父节点 id(key) `findParentKey`
2. 查找子节点 `findNode`
3. 扁平化树结构 `flatTree`

## 格式转化

1. 统计数组对象中每一项的属性值 `arrayToObject`,
2. 以对象属性值的数组索引关系，转换成数组对象 `objectToArray`,
3. json 对象转 FormData `jsonToFormData`,
4. FormData 转 json 对象 `formDataToJson`,
5. 控制台打印 FormData `consoleFormData`,

## 本地存储

1. localStorage 和 sessionStorage 判空`isEmptyStorage`,
2. 获取 cookie `getCookie`,
3. 设置 cookie `setCookie`,
4. 删除 cookie `removeCookie`,
5. 判断 cookie 是否为空`isEmptyCookie`,

## 代码

本仓库 src/utils.js

## 文档

https://shen-linqiang.gitee.io/blog-vitepress/frontend/utils-lib/
