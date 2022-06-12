var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var x = lines.shift().split(' ')

var A = parseFloat(x.shift())
var B = parseFloat(x.shift())
var C = parseFloat(x.shift())

let delta = Math.pow(B, 2) - 4 * A * C

if (delta < 0) {
  console.log('Impossivel calcular')
} else if (A === 0) {
  console.log('Impossivel calcular')
} else {
  let R1 = (-B + Math.sqrt(delta)) / (2 * A)
  let R2 = (-B - Math.sqrt(delta)) / (2 * A)

  console.log(`R1 = ${R1.toFixed(5)}`)
  console.log(`R2 = ${R2.toFixed(5)}`)
}
