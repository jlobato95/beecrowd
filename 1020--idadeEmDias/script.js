var input = require('fs').readFileSync('stdin', 'utf8')

let ageInDays = parseInt(input)

let years = parseInt(ageInDays / 365)
ageInDays = ageInDays % 365
let months = parseInt(ageInDays / 30)
ageInDays = ageInDays % 30

let result = `${years} ano(s)
${months} mes(es)
${ageInDays} dia(s)`

console.log(result)
