var input = require('fs').readFileSync('stdin', 'utf8')

var valores = input.split('\n')

var [x1, y1] = valores[0].split(' ')
var [x2, y2] = valores[1].split(' ')

var distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

console.log(distancia.toFixed(4))

// TESTE DE SAIDA
console.log('o valor de P1 é: ' + [x1, y1])
console.log('o valor de P2 é: ' + [x2, y2])
