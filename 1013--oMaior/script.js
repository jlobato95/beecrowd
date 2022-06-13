const input = require('fs').readFileSync('stdin', 'utf8')

const [A, B, C] = input.split(' ').map(item => parseInt(item))

const maiorAB = (A + B + Math.abs(A - B)) / 2
const maiorX = (C + maiorAB + Math.abs(C - maiorAB)) / 2

console.log(maiorX + ' eh o maior')
