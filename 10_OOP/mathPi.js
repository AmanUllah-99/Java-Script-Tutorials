const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// // console.log(Math.PI);
// // Math.PI =5
// // console.log(Math.PI);

const chai = {
    name : "payu cahi",
    price : 1200,
    isAvlable :true
}
// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object(chai , "name",{
    // writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key , value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
            console.log(`${ key}:${value}`);

    }
    
     
}



