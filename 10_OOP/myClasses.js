///Classes

class user{
    constructor(username , email , password,){
        this.username =username
        this.email =email
        this.password = password
    }
    encryptPassword(){
        return`${this.password} ama@m`
    }

    changeName(){
        return`${this.username.toUpperCase()}`
    }

}

const chai = new user("chai", "aman@fmail.com","123")
console.log(chai);

console.log(chai.encryptPassword());
console.log(chai.changeName());


//Behind the scene

function User(username, email , password){
        this.username =username
        this.email =email
        this.password = password

}
User.prototype.encryptPassword = function(){
            return`${this.password} ama@m`

}
User.prototype.changeName = function(){
            return`${this.username.toUpperCase()} `

}
const tea = new User("tea", "alifmail.com","183")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeName());




