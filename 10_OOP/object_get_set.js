/////////////////////Object base get set 


const user ={
    _email : 'a@hcgmail.com',
    _password: 'balghari',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
}

const tea = Object.create(user)
console.log(tea.email);
