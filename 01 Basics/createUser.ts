/// <reference path='index.ts' />

// Omit - removing a property from a type (e. g. User)
function createUser(user: Omit<User, "id">) {
    console.log(user.name, user.age, user.address)
}

// Partial - all arguments are nonmandatory
function updateUser(user: Partial<User>) {

}

createUser( {
    name: "John",
    age: 35,
    address: {
        street: "Helloworld",
        city: "Big city"}
})