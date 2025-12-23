//////////////Truly and Falsly Value///

const userEmail = []

if (userEmail) {
    console.log("got user email"); 

} else{
    console.log("don't have user email");
    

}


// ///////falsly Value
// false , 0 ,-0, "", BigInt 0n,nan, null , undefined,

// truly Value

// true , " ", "0", "false", [], {}, function (){}

// false == 0  true
// false == '' true
// 0 == '' true

if (userEmail.length === 0) {
    
    console.log("Empty Array");
    
}

const emptyObject = {}
 
if (Object.keys( emptyObject.length === 0)) {
    console.log("Empty Object");
    
    
}

///Nullish coalescing operator  (??) : null ; undefined

let val1;
val1 = 4 ?? 99
val1 = null ?? 78
val1 = undefined ?? 66

console.log(val1);


////Terniary Operator////

// condition ?  true : false

let teaPrices = 99

teaPrices <= 66 ? console.log("yes Prices is less then 66") : console.log("No Prices is Greater then 66");



