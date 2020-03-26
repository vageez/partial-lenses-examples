
/**
 * Run Length
 * 
 * input aaaabbbccccca
 * output a4b3c5a1
 */


const input = 'aaaabbbccccca'

const runLength = (s) => {
  const s_array = s.split('')
  let output = ''
  let char = null
  let count = 1
  for (let i = 0; i <= s_array.length; i++) {
    if (char === null) {
      char = s_array[i]
    } else {
      if (char != s_array[i]) {
        output = output + char + count
        char = s_array[i]
        count = 1
      } else {
        count++
      }
    }
  }
  return output //?
}

runLength(input) //?
