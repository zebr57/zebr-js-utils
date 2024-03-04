import dayjs from "dayjs";

export function dateFormat(format, date) {
  return dayjs(date).format(format);
}
export function dateAdd(num, type, date) {
  return dayjs(date).add(num, type);
}
export function dateSubtract(num, type, date) {
  return dayjs(date).subtract(num, type);
}
export function dateEndOf(type, date) {
  return dayjs(date).endOf(type);
}

export default {
  dateFormat,
  dateAdd,
  dateSubtract,
  dateEndOf,
};
