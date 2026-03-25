function renderUserDetails(user) {
    console.log(user.name, user.age);
}
function renderNewUserDetails(newUser) {
    console.log(newUser.name, newUser.age);
}
var user = {
    id: "1",
    name: "Kyle",
    age: 21,
    address: {
        street: "First Street",
        city: "London"
    }
};
renderUserDetails(user);
renderNewUserDetails({
    name: "Kelly",
    age: 26
});
