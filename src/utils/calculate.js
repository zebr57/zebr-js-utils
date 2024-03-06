/* ===================================== 数学计算 ===================================== */
/**
 * @description: 计算多数之和
 * @param {number} arguments 数值
 * @return {number|string} 结果
 */
export function add() {
  try {
    let sum = 0;
    if (!arguments.length) return 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeOf(arguments[i]) !== "Number") throw `arguments, ${arguments[i]} type is not Number`;
      const item = arguments[i];
      sum += item;
    }
    return sum;
  } catch (error) {
    console.error(error);
  }
}
/**
 * @description: 多数相减
 * @param {number} arguments 第一个参数为被减数，剩余参数为减数
 * @return {number} 相减结果
 */
export function subtract() {
  try {
    if (arguments.length < 2) throw "subtract() params without minuend or subtrahend";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result - argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description: 多数相除
 * @param {number} arguments 第一个参数为被除数，剩余参数为除数
 * @return {number}
 */
export function divide() {
  try {
    if (arguments.length < 2) throw "divide() params without dividend or divisor";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result / argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
/**
 * @description: 多数相乘
 * @param {number} arguments 第一个参数为被乘数，剩余参数为乘数
 * @return {number}
 */
export function multiply() {
  try {
    if (arguments.length < 2) throw "multiply() params without multiplicand or multiplier";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      const argument = arguments[i];
      if (typeOf(argument) !== "Number") throw `argument: ${argument} type is not Number`;
      result = result * argument;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}

// 统一默认导出
export default {
  add,
  subtract,
  divide,
  multiply,
};
