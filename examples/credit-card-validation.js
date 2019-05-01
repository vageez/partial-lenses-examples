/**
 *  16 digit credit card numner
 *  Last digit is the checksum
 *  4929248144006777
 *  https://www.dcode.fr/luhn-algorithm
 */

const compose = f => g => h => i => x => y => z => f(g(h(i(x(y(z))))))

const ccToArray = ccnum => ccnum.toString().split('')

const isEven = i => i % 2 == 0

const gt9 = n => ((a) => +a[0] + +a[1])(n.toString().split(''))

const calculation = n =>  ((num) => (num > 9) ? gt9(num) : num )(n*2)

const generateStructure = ccArray => ((pop) => ({ number: ccArray, checksum : pop, converted: []}))(ccArray.pop())

const convertCCNumber = structure => structure.number.reduce((acc, c, i) => {
        c = isEven(i) ? calculation(c) : c
        acc.converted.push(c)
        return acc
    }, structure)

const addConvertedCCNumber = structure =>  structure.converted.reduce((acc, c) => {
    acc.total = acc.total + +c
    return acc
}, { ...structure, total: 0} )

const checkSum = structure => ({ ...structure, calculatedChecksum: (10 - (structure.total % 10) % 10)})

const isValid = ({calculatedChecksum, checksum}) => +calculatedChecksum === +checksum

export default compose(isValid)(checkSum)(addConvertedCCNumber)(convertCCNumber)(generateStructure)(ccToArray)