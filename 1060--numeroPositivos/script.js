var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let X = 0

for (let i = 0; i <= 6; i++) {
  if (Number(lines[i] > 0)) {
    X = X + 1
  }
}

console.log(`${X} valores positivos`)
