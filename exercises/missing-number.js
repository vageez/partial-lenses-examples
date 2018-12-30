
/**
 *  Find a single missing number in an array
 */
    
const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]

const missingNum = a => a.reduce((x, c, i) => {

    a.indexOf(i+1) === -1 ?
        x = i+1
        :
        x = x
    
    return x
}, undefined)

missingNum(array) //?