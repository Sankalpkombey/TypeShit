function deactivateUser(user : User) : User {
    return { ...user, isActive: false}
}

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

/* {const bob = { id: 1, name: "Bob", email: "bob@test.com", isActive: true, age: 30}
const updated = deactivateUser(bob);
console.log(updated)} */

/* const bobWithAge: User = { id: 1, name: "Bob", email: "bob@test.com", isActive: true, age: 30}
const updated = deactivateUser(bobWithAge);
console.log(updated) */

function promoteUser(user: User): User{
  return {...user, email: "promoted-" + user.email}
}

const tony: User = { id: 1, name: "Bob", email: "bob@test.com", isActive: true}
const updated = promoteUser(tony);
 console.log(updated) 

/* console.log(promoteUser(tony)) */