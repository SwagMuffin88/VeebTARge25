/// <reference path='index.ts' />
// omit - removing a property from a type (e. g. User)
function createUser(user) {
    console.log(user.name, user.age, user.address);
}
createUser({
    name: "John",
    age: 35,
    address: {
        street: "Helloworld",
        city: "Big city"
    }
});
