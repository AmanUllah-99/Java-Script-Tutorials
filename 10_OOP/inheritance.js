/////inhertance


class user{
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username, email , password ){
        super(username)
        this.email = email
        this.password = password
    }
    addCoures(){
        console.log(`New Js cousres for advance level`);
        
    }

}

const chai = new teacher("Amaan", "aaa@gmail.com", "12300")

const tea = new user("masalaChai")

chai.addCoures()
// tea.addCoures()
tea.logMe()
chai.logMe()

console.log(chai instanceof user);
