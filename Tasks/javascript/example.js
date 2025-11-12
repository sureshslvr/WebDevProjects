// const user={
//     firstName:'vijay',
//     age:24,
//     city:'hyderabad'
//   }
//   user.firstName='suresh';
//   console.log(user.firstName);


//   let heros=["a","b","c"];
//   //index start with zero
//   console.log(heros[0])
//   console.log(heros.length)
//   console.log(heros[heros.length-1])

// let isValue = '123';
// console.log(typeof Number(isValue));  // number
// console.log(typeof isValue);          // string

// let a=1;
// let b="1";
// console.log(a==b)//true
// console.log(a===b)//false

//check if both strings are equal or not
let s="suresh"
let s1="nani"

if(s===s1){
    console.log("strings are same");
}else{
    console.log("strings are not same");
}

//check if a varible is number or not
let a=3;
if(typeof(a)==='number'){
     console.log("number");
}else{
    console.log("not a number");
}

//checking if a boolean value is true or false

let maggieReady=true;
if(maggieReady){
    console.log("maggie is ready to eat")
}else{
    console.log("maggie will take 2 mins time")
}

//check if an array is empty or not
 let fruit=["mango"];
 if(fruit.length>0){
     console.log("fruit are there in basket")
 }else{
    console.log("fruit basket is empty")
 }

 //declare an array with  your fav crickers and access the first element and print it in console

 let fav=["suresh","rohit"];
 let res=fav[0];
 console.log(res);

 //array with fav cities and get the 3rd element and display

 let cities=["jammikunta","hyderabad","karimanagar"];
 let res1=cities[2];
 console.log(res1);

 //array with dosas, replace 2nd dosa with ravva dosa

 let dosas=["masals dosa","plain dosa","gee karam dosa"]
 dosas[1]="ravva dosa";
 console.log(dosas);

 //add one more dosa type using array push
 dosas.push("plain dosa");
 console.log(dosas);

 //remove last element in array
 dosas.pop();
 console.log(dosas);


 //array of popular trees names, make a soft copy of that array

 let trees=["tulasi","mango","banana"];
 let softcopy=trees;
 softcopy[0]='tulasi1'
 console.log(trees)
 console.log(softcopy)

 //hard copy


 //note: arrays in js is accept hetorogenious type data also


 let q=['a',"c",'b']
 let r=[...q]
 r.pop();
 console.log(q)
 console.log(r)


 //... is spread operatore we will learn in future

 
 //write a loop to print sum of 1 to 5 number

let sum=0

let i=0
while(i<=5){
  sum=sum+i;
  i++;
}
console.log(sum)


//multiply array elements by 2 and show res in new array
let arr=new Array(1,2,3,4,5,6);
let resArr=new Array();
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]==2){
        continue;
    }
    resArr.push(arr[i]*2);
}
console.log(resArr)

let numbers = [1,2,3,4,5];
let smallNumbers=[];
for (const num of numbers) {
    if(num==4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

const symbols={
    yt:"youtube",
    ig:'instagram',
    fb:"facebook"
}
for (const n in symbols) {
    console.log(`key is: ${n} and value is: ${symbols[n]}`); 
}

let numb = [1,2,3,4,5];
numb.forEach(element => {
    console.log(element);
});




