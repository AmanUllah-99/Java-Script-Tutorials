//// Static


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`userName:${this.username}`);
        
    }
     static createdID(){
        return `1234`
    }
}

const amaan = new User("aman")

amaan.logMe()
// console.log(amaan.createdID());

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    
}

const ali = new teacher("bashu" , "b@gmail.com")

 ali.logMe()
 console.log(ali);
 

