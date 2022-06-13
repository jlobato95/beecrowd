const input = require('fs').readFileSync('stdin', 'utf8')

const [tempoGasto, velocidadeMedia] = input.split('\n')

const totalPercorrido = tempoGasto * velocidadeMedia

const qtdLitros = totalPercorrido / 12

console.log(qtdLitros.toFixed(3))
