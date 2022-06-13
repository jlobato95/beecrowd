var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input

var x = parseInt(lines.shift())

x += x % 2 === 0 ? 2 : 1

console.log(x)
