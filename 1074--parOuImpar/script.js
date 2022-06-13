const input = require('fs')
  .readFileSync('stdin', 'utf-8')
  .split('\n')
  .map(x => Number(x))

n = input.shift()

for (i = 0; i < n; i++) {
  x = input.shift()

  if (x === 0) {
    exit = 'NULL'
  } else {
    exit = x % 2 === 0 ? 'EVEN' : 'ODD'

    if (x > 0) {
      exit += ' POSITIVE'
    } else {
      exit += ' NEGATIVE'
    }
  }

  console.log(exit)
}
