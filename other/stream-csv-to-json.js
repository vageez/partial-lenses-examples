const csv = require('csvtojson')
var { createWriteStream } = require('fs')
var { stringify } = require('JSONStream')


const csvFile = `./fixtures/cities.csv`
const destFile = `./cities.1.json`

var transformStream = stringify()
var outPutStream = createWriteStream(destFile)
transformStream.pipe(outPutStream)

csv()
  .fromFile(csvFile)
  .subscribe(
    (json, _) => new Promise((resolve, reject) => {
        // const data = processData(json)
        console.log(json) //?
        transformStream.write(json)
        resolve()
    }),
    err => {
      throw new Error(`Something is not right ${err}`)
    },
    () => {
      transformStream.end()
    }
  )