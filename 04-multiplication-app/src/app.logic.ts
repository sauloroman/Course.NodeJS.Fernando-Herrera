import fs from 'fs'

const base = 8
const limit = 10
const showTable = true

let outputMessage = ""
const headerMessage = `
===========================================
\t\tTabla del ${base}
===========================================
`

for( let i = 1; i <= limit; i++ ) {
    outputMessage += `${base} x ${limit} = ${base * limit}\n`
}

outputMessage = headerMessage + outputMessage

if ( showTable ) {
    console.log(outputMessage)
}

const outputPath = `outputs`

fs.mkdirSync( outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)
console.log("File Created!")
