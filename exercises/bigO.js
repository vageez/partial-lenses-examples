
// https://medium.com/@bretcameron/ace-your-coding-interview-by-understanding-big-o-notation-and-write-faster-code-6b60bd498040
// Logarithms
// Logarithms are useful for a number of reasons, but here’s a very simple example. 
// Say we didn’t know what the number x was: 2ˣ = 512
// x = log₂(512) = 9
// O(2**9) ==> Array length 2, nested loops 9

// Type that into a calculator, and we’ll get the answer 9. And, true enough, 2⁹ does equal 512.

a = [1, 2, 3]

// O(N)
function logArray(array) {
    let bigO = 0
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        bigO++
    }
    return bigO
}

// O(N^2)
function logArray2(array) {
    let bigO = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            bigO++
            console.log(array[j]);
        }
    }
    return bigO
}

// O(3**1)
logArray(a)//?

// O(3**2)
logArray2(a) //?

// Bubble sort
const b = [6, 5, 3, 1, 8, 7, 2, 4]

function bubbleSort(array) {
    let length = array.length;
    let bigO = 0
    // This loop handles the passes
    for (let i = 0; i < length; i++) {
        // This loop handles the swapping during a single pass
        for (let j = 0; j < (length - i - 1); j++) {
            bigO++
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            console.log(array)
        }
    }
    return { array, bigO }
}

//0(8**2)
bubbleSort(b) //?

// BigO O(N^3)
function logArray3(array) {
    let bigO = 0
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {

            for (let k = 0; k < array.length; k++) {
                bigO++
            }
        }
    }
    return bigO
}

// 8**3 //?
// Max loggarythm of 512, bubble sort completes in 27
logArray3(a) //?


// Big0 O(N^4)
function logArray4(array){
    let bigO = 0
    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array.length; j++){
        for (let k = 0; k < array.length; k++){
          for (let l = 0; l< array.length; l++){
            bigO++
          }
        }
      }
    }
    return bigO
  }

logArray4(a) //?