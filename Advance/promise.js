const promiseOne = new Promise(function (resolve , reject ){
   setTimeout(function (){
 console.log("task one completed");
 resolve()
 
   },1000)
   
})
promiseOne.then(function(){
    console.log("task one consumed");
    
})

new Promise(function (resolve , reject){
setTimeout(function(){
  console.log("async task two");
  resolve();
  
},1000)
}).then(function(){
  console.log("async two comsumed");
  
})

const promiseThird = new Promise(function(resolve,reject){
setTimeout(function(){
  resolve({username : "amaan", password:"aman@9990",email: "amaan@example.com"})
},1000)
})

promiseThird.then(function(user){
console.log(user);

})


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
 