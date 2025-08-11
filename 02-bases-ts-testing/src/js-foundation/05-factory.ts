import { getAge, getUUID } from '../plugins'

type GetIDType = () => string
type GetAgeType = (birthdate: string) => number | Error

interface BuildMakePersonOption {
    getID: GetIDType,
    getAge: GetAgeType
}

interface BuildPersonOption {
    name: string,
    birthdate: string
}

export const buildMakePerson = ({ getID, getAge }: BuildMakePersonOption) => {
    return ({ name, birthdate }: BuildPersonOption) => {
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
