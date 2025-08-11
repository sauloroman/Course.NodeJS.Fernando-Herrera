const { getAge, getUUID } = require('../plugins')

const buildMakePerson = ({ getID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

const buildPerson = buildMakePerson({ getID: getUUID, getAge })
const person =  buildPerson({name: 'Roman Nava', birthdate: '1998-12-08'})
console.log(person)