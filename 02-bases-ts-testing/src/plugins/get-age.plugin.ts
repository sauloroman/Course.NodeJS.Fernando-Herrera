export const getAge = ( birthdate: string ): number | Error => {
    if ( !birthdate ) return new Error("Birthdate is required")
    return new Date().getFullYear() - new Date(birthdate).getFullYear()
}