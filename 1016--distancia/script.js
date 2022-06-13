var input = require('fs').readFileSync('stdin', 'utf8')

const minutos = (60 * input) / 30

console.log(minutos + ' minutos')
