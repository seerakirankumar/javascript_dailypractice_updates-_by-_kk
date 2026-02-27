//DAY 1 PQ
//grade
alert("WELCOME TO OUR MARKS PORTAL");
let marks =prompt("ENTER YOUR MARKS");
 
 if(marks>80 && marks<=100){
 console.log(" congr atulations! you gotgrade A");
 }else if(marks>70 && marks<=79){
    console.log(" congratulations! you gotgrade B");
 }else if(marks>60 && marks<=69){
    console.log(" congratulations! you gotgrade C ");
 }else if(marks>50 && marks<=59){
    console.log("congratulations! you got grade  D");
 }else if(marks>=0 && marks<=49){
    console.log("sorry! you got grade F");
 }
//   DAY 3 PQ

//finding array avg
let arr = [10,20,30,40,50]

let y= 0;

for(i=0;i<arr.length;i++){
    y= y + arr[i];
x = y/arr.length;
}
console.log(y);
console.log(x);


//providing 10% offer

for(i=0;i<arr.length;i++){
mm=arr[i]/10;
off = arr[i]-mm;

console.log(off);
}
console.log(arr);



//DAY-4 PQ
 //finding array avg
let arr2= [10,20,30,40,50]

let z= 0;

for(i=0;i<arr2.length;i++){
    z= z+ arr2[i];
x = z/arr2.length;
}
console.log(z);
console.log(x);


//providing 10% offer
let arr1 = [10,20,30,40,50]

for(i=0;i<arr1.length;i++){
mm=arr1[i]/10;
off = arr1[i]-mm;

console.log(off);
}
console.log(arr1);

//DAY 5

// Creating a function that will finds the vowels count

function vowelscount(str){
count = 0;
   for(let i=0; i<str.length; i++){
 if(str[i]==="a" || str[i]==="e"  ||str[i]==="i" || str[i]==="o" ||  str[i]==="u"){
      count++;
       }
   }
   console.log(count);
}
 
 //DAY 6 PQ

 //finding square of a number from an array


 let num = [2, 4, 5, 6, 7, 8, 9];

 num.forEach((val)=>{
  val *= val;
   console.log(val)
 }
)


// in given array of students marks , filter out the students who got more than 90 marks

let marks1 = [45, 46, 47,90, 97, 99, 92 ,91];

let filmarks = marks1.filter((val)=>{
   return val>90;
}
)
console.log(filmarks)

//main practice question 

let kk = prompt("enter a number");

let skk = []

for( i = 0; i<=kk; i++){
  skk[i] = i;
  console.log(skk[i]);
}


let redkk = skk.reduce((ini , curr)=>
{
   return ini + curr
})
console.log(redkk);


let redskk = skk.reduce((ini,curr)=>{
   return ini * curr;
})
console.log(redskk);