interface User {
    id: number | string,
    name: string
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

// Function declaration
export function getUserById( id: number | string, callback: ( error?: string, user?: User ) => void ) {

    const user = users.find( user => user.id === id ) 

    if ( !user ) {
        return callback(`User with id ${id} not found`)
    }

    return callback(undefined, user)
}
