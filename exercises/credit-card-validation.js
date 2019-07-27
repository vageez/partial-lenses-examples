/**
 *  16 digit credit card numner
 *  Last digit is the checksum
 *  4929248144006777
 *  https://www.dcode.fr/luhn-algorithm
 */

 // Compose from left to right.
const compose = (...fns) => x => fns.reduceRight((g, f) => f(g) ,x)

const ccToArray = ccnum => ccnum.toString().split('').reverse()

const isEven = i => i % 2 == 0

const gt9 = n => (a => +a[0] + +a[1])(n.toString().split(''))

const calculation = n => (num => (num > 9 ? gt9(num) : num))(n * 2)

const convertCcno = ccno => ccno.map((c, i) => isEven(i+1) ? calculation(c) : c)

const sum = ccno => ccno.reduce((acc, c) => +acc + +c, 0 )

const checkSum = sum => sum % 10 //?

const isValid = sum => sum === 0 //?
  
const luhn = num => compose(isValid, checkSum, sum, convertCcno, ccToArray)(num)

// Test
const ccNos = [79927398713, 5555555555554444, 4012888888881881, 5105105105105100, 4916737743057301, 5235848633343692, 6011812456115007]
ccNos.map(luhn).filter(x => !x).length === 0
//?
