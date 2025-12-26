 const multipl5 = function(sum){
     return  sum*5

 }
 multipl5.power =2
  

 console.log(multipl5(5));
 console.log(multipl5.power);
 console.log(multipl5.prototype);

//  function createdUser(username , score){
//     this.username = username
//     this.score = score
//  }
//  createdUser.prototype.increment = function(){
//    this.score++
//  }

// createdUser.prototype.printMe = function(){
//     console.log(`Price of Chai is ${this.score}`);
// }
//  const  Chai = new createdUser("Chai",1200)
//  const  Tea =  new createdUser("Tea",250)
//  Chai.printMe()

function creatUser(username, score){
    this.username = username;
    this.score =score

}
 
creatUser.prototype.increment = function(){
    this.score++
}
creatUser.prototype.printMe = function(){
    console.log(`Price of tea is ${this.score}`);
    
}

const chai = new creatUser("chai", 1300)
const tea = new creatUser("tea",900)

chai.printMe()