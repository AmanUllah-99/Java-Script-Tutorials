/////Object Literal /////
const user = {
    userName:"Amaan",
    loginCount : 8,
    email : "example@gimail.com",
    getUserDetails : function(){
        // console.log("got users Details From DataBase");
        // console.log(`userName: ${this.userName }`);
        // console.log(this);

        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

//////// Constructor Function////

function User (userName , loginCount, isLoggedIn){
    this.userName = userName,
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    
    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
        
    }
    

    return this
}


const userOne = new  User("Amaan",12 ,true)
const userTwo = new  User ("Zshn" , 88, false)

console.log(userOne);
console.log(userTwo);




