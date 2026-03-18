function renderUserDetails(user) {
    console.log(user.name, user.age);
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
