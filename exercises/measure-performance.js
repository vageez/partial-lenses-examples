const array = [1, 2, 3, 4, 5, 6, 7, 9, 10]

const missingNum = a => a.reduce((x, c, i) => {

    a.indexOf(i+1) === -1 ?
        x = i+1
        :
        x = x
    
    return x
}, undefined)


/**
 * 
 *  Measure performance
 *  Run in Browser snippet.
 */

let t1 = performance.now()

missingNum(array)

let t2 = performance.now()

console.log(`Time elapsed: ${(t1 - t2) / 1000} seconds`) //?