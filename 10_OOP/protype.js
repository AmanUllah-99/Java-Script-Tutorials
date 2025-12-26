
// let myName = "Amaan    "

// console.log(myName.truelength);


let myHero = ["imrankhan","Ibrahim"]

let heroPower ={
    leader : "imrankhan",
    ibrahim :"king",
    greetingHero:function (){
        console.log(`powerfull leader is ${this.leader}`);
        
    }

}
Object.prototype.amaan = function(){
    console.log(`Amaan is present in all of the object`);
    
}
Array.prototype.heyAmaan =function(){
    console.log(`heyAmaan is present is all array`);
    
}
heroPower.amaan()
myHero.heyAmaan()
// heroPower.heyAmaan()


/// Inheritance 
//// old syntx

const user ={
    username : "chai",
    email:"chai@gmail.com",
}

const teacher ={
    makeVideo:true
}
const teacherSupport= {
    isAvilable : false
}
const ptTeacher={
    assigment:"Js Note ",
    testReport :"Nill",
    __proto__:teacherSupport

}
teacher.__proto__=user

//// morden inheritance syntx

Object.setPrototypeOf(teacher,user)

//// tureLength method
let anotherUserName = "AmaanUllah    "

String.prototype.tureLength=function(){
    console.log(this);
    console.log(`Ture length is: ${this.trim().length}`);
    
    
}
anotherUserName.tureLength()
"Bashu".tureLength()
"Zeeshan".tureLength()
