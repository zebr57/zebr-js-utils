/* ===================================== 数字 or 字符串 ===================================== */
/**
 * @description: 单位数字前面补O
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

export default {
  padleft,
  htmlEscape,
  textHighlight,
};
