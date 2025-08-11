const users = [
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

const getUserById = ( id, fn ) => {

    const user = users.find( user => user.id === id )

    if ( !user ) {
        return fn(`User with id ${id} not found`)
    }

    return fn(null, user)
    
}


// Callbacks Hell
getUserById(1, (error, user1) => {

    if ( error ) {
        throw new Error(error)
    }

    getUserById(2, (error, user2) => {

        if ( error ) {
            throw new Error(error)
        }


        getUserById(3, (error, user3) => {

            if ( error ) {
                throw new Error(error)
            }

            console.log(user1, user2, user3)

        })

    })

})