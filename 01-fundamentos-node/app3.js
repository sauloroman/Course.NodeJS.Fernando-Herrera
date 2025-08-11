const fs = require('fs')
const content = fs.readFileSync('README.md', 'utf8')
const words = content.split(' ')

const reactWordCount = words.filter( word => word.toLowerCase().includes("react")).length

const reactWordCount2 = content.match(/react/gi ?? [])

console.log('Cantidad de palabras:', words.length)
console.log("Palabras con react:", reactWordCount)
console.log("Palabras con react 2:", reactWordCount2)
