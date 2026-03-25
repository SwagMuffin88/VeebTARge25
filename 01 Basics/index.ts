

type User = {
    id: string;
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    }
}

function renderUserDetails(user: User) {
    console.log(
        user.name,
        user.age
    )
}

function renderNewUserDetails(newUser: Pick<User, "name" | "age">) {
    console.log(
        newUser.name,
        newUser.age
    )
}

const user: User = {
    id: "1",
    name: "Kyle",
    age: 21,
    address: {
        street: "First Street",
        city: "London"
    }
}

renderUserDetails(user)
renderNewUserDetails({
    name: "Kelly",
    age: 26
})