// // Custom Obj Iterator
// // Imperative Approach
const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};
// // Using Generator Approach
const objGen = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) yield this[key];
  },
};


