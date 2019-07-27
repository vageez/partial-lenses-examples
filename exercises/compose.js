
// Left to right composition
// x is your accumulator and initial state
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

// Right to left composition
// x is your accumulator and initial state
const composePipe = (...fns) => x => fns.reduce((v, f) => f(v), x)


const add1 = num => num + 1
const add2 = num => num + 2
const add3 = num => num + 3
const add4 = num => num + 4

const h = s => s + 'h'
const e = s => s + 'e'
const l = s => s + 'l'
const o = s => s + 'o'

compose(add1, add2, add3, add4)(0) //?

composePipe(h,e,l,l,o)('') //?
