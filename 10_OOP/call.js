///Call 

function setUserName(username){
    this.username =username
    console.log("Called");
    
}

function createdUser(username, email, password){
    setUserName.call(this, username)
    this.email=email
    this.password =password
}

const user = new createdUser("Amaan" , "Amaaan@gmail.com" , "A0000")

console.log(user);
