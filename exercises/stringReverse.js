// function => string => string
const stringReverse = ([head, ...tail]) => {
    this.val = `${head}${this.val||''}`
    return tail.length > 0 ? stringReverse(tail) : this.val
}

stringReverse('hello') //?