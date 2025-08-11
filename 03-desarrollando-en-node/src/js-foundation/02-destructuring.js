const { APPDATA } = process.env
console.table( APPDATA )

const characters = ['Flash', 'Superman', 'Green Lanter', 'Batman']
const [ , , , batman ] = characters
console.log(batman)