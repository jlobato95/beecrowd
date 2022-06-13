const input = require('fs').readFileSync('stdin', 'utf8')

let wholeSeconds = parseInt(input)

let hours = parseInt(wholeSeconds / 3600)
wholeSeconds = wholeSeconds % 3600
let minutes = parseInt(wholeSeconds / 60)
wholeSeconds = wholeSeconds % 60

console.log(`${hours}:${minutes}:${wholeSeconds}`)
