type User = {
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
    },
    {
        id: 3,
        name: 'Jim Doe'
    }
]

export const getUserById = ( id: number | string, fn: ( error?: string, user?: User ) => void ) => {

    const user = users.find( user => user.id === id )

    if ( !user ) {
        return fn(`User with id ${id} not found`)
    }

    return fn(undefined, user)
    
}