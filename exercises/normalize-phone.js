/**
 * Imperative
 * 
 */
export const normalizePhone = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, ""); //?
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    value; //?
    previousValue; //?
    if (onlyNums.length === 3) {
      return onlyNums + "-";
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3) + "-";
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3);
  }
  return (
    onlyNums.slice(0, 3) +
    "-" +
    onlyNums.slice(3, 6) +
    "-" +
    onlyNums.slice(6, 10)
  );
};
normalizePhone("12341234"); //?

/** 
 * Functional version 
 * 
 * */
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)
const onlyNums = x => x.replace(/[^\d]/g, "");
const iflteq3 = x => x.length <= 3;
const iflteq6 = x => x.length <= 6;
const prepNumGt6 = x =>
  x.slice(0, 3) + "-" + x.slice(3, 6) + "-" + x.slice(6, 10);
const prepNumlteq6 = x => x.slice(0, 3) + "-" + x.slice(3);
const condCheck2 = n => iflteq6(n) ? prepNumlteq6(n) : prepNumGt6(n);
const condCheck1 = n => iflteq3(n) ? n : condCheck2(n);
const NormalizePhone = n => compose(condCheck1, onlyNums)(n);

NormalizePhone("6334234234"); //?