//////////*********Promise One  */
const promiseOne = new Promise(function (resolve , reject ){
   setTimeout(function (){
 console.log("task one completed");
 resolve()
 
   },1000)
   
})
promiseOne.then(function(){
    console.log("task one consumed");
    
})
//////////*********Promise Two  */
new Promise(function (resolve , reject){
setTimeout(function(){
  console.log("async task two");
  resolve();
  
},1000)
}).then(function(){
  console.log("async two comsumed");
  
})
//////////*********Promise third  */
const promiseThird = new Promise(function(resolve,reject){
setTimeout(function(){
  resolve({username : "amaan", password:"aman@9990",email: "amaan@example.com"})
},1000)
})

promiseThird.then(function(user){
console.log(user);

})
//////////*********Promise Four  */

const PromiseFoure = new Promise(function(resolve, reject){
  setTimeout(function (){
    let error = false
    if(!error){
      resolve({username: "ali" , password : "ali123"})
    }else{
      reject('ERROR:Something is worng on this code')
    }
  },1000)
})

PromiseFoure.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
  
}).catch((error)=>{
console.log(error);

}).finally(()=> console.log("This Promise is Etheir resolve and reject" ));

//////////*********Promise five */
const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = false
        if(!error){
          resolve({username:"zeshn",password:"1234"})
        }else{
          reject('ERROR:wrong username and password')
        }
      },1000)

})

async function promiseFiveResponse(){
 try{
  const p5 =  await promiseFive
 console.log(p5);
 }catch(error){
  console.log(error);
  
 }
 
}
promiseFiveResponse()

///////// fetch simple///////
/*

async function allUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    
    
  } catch (error) {
    console.log("E: ", error);
    
  }
  
}
allUser()
*/
fetch('https://jsonplaceholder.typicode.com/posts')
.then((resolve)=>{
  return resolve.json()

})
.then((data)=>{
console.log(data);

})
.catch((error)=>console.log(error)
)
