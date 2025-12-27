///////Getter and Setter , Stack

 class User{
    constructor(email,password){
        this.email = email;
        this.password = password

    }
////////////////for email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
//////////for password

    get password(){
        return `${this._password}amn`
    }
    set password(value){
        this._password = value
    }
 }

 const amaan = new User("a@amaangmail.io" , "abc")

 console.log(amaan.password);
 console.log(amaan.email);
 
 