
//       DAY 1
//arithmetic operators

let a = 5;
let b = 5;

 console.log("a+b = " +(a+b));
 console.log("a-b = " +(a-b));
 console.log("a*b = " +(a*b));
 console.log("a/b = " +(a/b));
 console.log("a%b = " +(a%b));



//assignment operators
let c =10;
 c += 60;
console.log("value = " +c);

let d = 20;
d -= 3;
console.log("value = "+(d))

//comparision operators
 

let k = 2;
let s = "2";

console.log(k==s)


let j = 9;
let t = "9";

console.log(j ===t )


let h = 300;
let i = 10;
 console.log(h>=i)



 //logical operators
alert("WELCOME TO OUR MARKS PORTAL");
let marks =prompt("ENTER YOUR MARKS");
 
 if(marks>80 && marks<=100){
 console.log(" congratulations! you gotgrade A");
 }else if(marks>70 && marks<=79){
    console.log(" congratulations! you gotgrade B");
 }else if(marks>60 && marks<=69){
    console.log(" congratulations! you gotgrade C ");
 }else if(marks>50 && marks<=59){
    console.log("congratulations! you got grade  D");
 }else if(marks>=0 && marks<=49){
    console.log("sorry! you got grade F");
 }

//    DAY 5

//function is block of code that performs specific tasks can be invoked(called) whenever need

//defining function

function name() {
    console.log("my name is kiran");
}

console.log(name());


//for calling the function "function_name();" 
//name();

//creating a function for "sum of two numbers"
function sum(a, b) {
    return a + b;
}
console.log(sum(9, 4));

//arrow function
//in the arrow function we will store the function as an variable ,it is uesd for small tasks.

const arrowmul = (a, b) => {
    return a * b;

}
console.log(arrowmul(5, 4));

//DAY6 
//ForEach loop (technically it is called as "high order function" )
//syntax:arr.forloop(function(currentvalue,index,array){})
//callback function = a call back is a function that is passed an argument to another function 

let arr = [1, 2, 3, 4, 5, 6];
 
arr.forEach((val)=>{
   console.log(val);
           
})

//some more array functions 

//>MAP(it'll create an new array with result of some operations)

//syntax: arr.Map(callbackfunction(val,idx,arr))

let len = [2, 3, 4, 5, 6, 7];

let newArr = len.map((val)=>{
   return val * 2;
}
)

console.log(newArr);

//>>FILTER (creates a  new array of elements that gives true for a condition/filter)

// ex: All even elements filtering from an array

let fil = [3, 4, 5 ,6, 7, 8];

let filArr = fil.filter((val)=>{
   return val % 2 === 0;
})
console.log(filArr);

//REDUCE (performs some operations and reduces the array to a single value ."it returns sinsle value")

let  red = [1, 2, 3, 4, 5, 6 , 7, 8, 9];

let redArr = red.reduce((ini, curr)=>{
   return ini + curr;
})

console.log(redArr);







