


function sumA(a) {
  return function (b) {
    if (b)
      return sumA(a + b)
    else
      return a
  }
}

const sumB = a => b => b ? sumB(a + b) : a

sumA(3)(4)(3)(5)() //?

sumB(3)(4)(3)(5)() //?