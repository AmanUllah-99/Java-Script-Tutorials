////////Forof loop ,  forIn loop ,  forEach  loops //////



let score = [1 , 2 ,3 ,4 ,5,6]
for (const num of score) {
    // console.log(num);


}
 const map = new Map()
 map.set('Pk', "Paksitan")
 map.set('In', "India")
 map.set('Ch', "Chaina")
 map.set('USA', "United States Of America")
//  console.log(map);
 
//  for (const [key, value] of map) {
//     console.log(key , "=>", value);
    
    
// }
   ///forin loop
 const myObject ={
    name : "aman",
    RollNo: "10",
    Class :" 12",
 }
 for (const key in myObject) {
//    console.log(`${key} shortcut for  ${myObject[ key]}`);
   
   
 }

 const programming = [ "py", "js", "cpp", "rb"]
 for (const key in programming) { 
    // console.log(programming[key]);
 }


 //Foreach loop////

 const coding = ["py", "js", "cpp", "rby"]

 coding.forEach( (item) =>{
        // console.log(item);
        
 })

 coding.forEach(function (item ,index,arr){
    // console.log(item,index,arr);
    
 })

 function printMe(item){
    // console.log(item);
    
 }
 coding.forEach(printMe)


 const myCoding =[
    {
        programminglanguage : "C++",
        fileName : "cpp",
    },
    {
        programminglanguage : "javascript",
        fileName : "js",
    },
    {
        programminglanguage : "phyton",
        fileName : "py",
    },
 ]
 myCoding.forEach((item)=>{
   //  console.log(`${item.programminglanguage},  File Name  Is${item.fileName}`);
    
 })
 

 ///////Filter method//////
 const newNum = [1,2,3,4,5,6,7,8,9,10,]

//   const value = newNum.forEach((num) =>{
//     console.log(num);
//     return
    
//  })
// 
//   const value = newNum.filter((num)=>num>=5)

  const myNum = []
  newNum.forEach((num)=>{
   if (num<=4) {
      myNum.push(num)
      
   }
  })
//   console.log(myNum);


  const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 let myBooks = books.filter((bk) => bk.publish <= 1981)
//  console.log(myBooks);

//////Map Methods///
 const mynum = [1,2,3,4,5,6,7,8,9,10,]

  const Num = mynum
            .map((num)=>num + 10 )
            .map((num)=>num * 5)
            .filter((num)=>num>=70)
 
//   console.log(Num);


///////////Reduce Methods///////////////
  
  const addnum = [1,2,3,4,5]

  const totalNum = addnum.reduce(function(acc , num){
   
//   console.log(`acc:${acc} num :${num}`);
  return  acc + num
  })
//   console.log(totalNum);
  

 const total =  addnum.reduce((acc,num)=> acc + num ,0)
//  console.log(total);
 


const coures = [
   {
      courseName : "js",
      prices : 5999,
   },
   {
      courseName : "py",
      prices : 8999,
   },
   {
      courseName : "cpp",
      prices : 7999,
   },
   {
      courseName : "c#",
      prices : 4999, 
   },
]
   const totalPrices = coures.reduce((acc,item)=> acc + item.prices ,0)
    console.log(totalPrices);
    