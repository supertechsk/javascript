// use of map().
const arr = [5, 1, 3, 2, 6];

// for double array 

function double(x){
    return x * 2; 
}

const output = arr.map(double);
console.log(output);

// for triple 

function triple(y){
    return y * 3;
}

const output1 = arr.map(triple);
console.log(output1);

// for binary converting
// we use ///toString(2);

function binary(z){
    return z.toString(2);
}

const output2 = arr.map(binary);
console.log(output2);

// use of filter 
// find even 

function iseven(a){
    return a%2===0;

}
console.log(arr.filter(iseven));

// another way to write function
console.log(arr.filter((b) => b%2!==0 ))

// nonfuntional way to  write a fun. for using reduce 

// sum of max

function findSum (arr){
    let sum=0;
    for (i=0;i<arr.length;i++){
        sum += arr[i]; // sum = sum + arr[i]
    }
    console.log(sum);
}
findSum(arr);

// find same value (sum) of array by using reduce();

const Output3 = arr.reduce(function(acc, curr){
    acc += curr;
    return acc;

},0);
console.log(Output3);

//find max by using reduce fun 
const output4 = arr.reduce(function(max,curr){ 
    if(curr> max) 
      {max= curr}
      return max;

},0);
console.log(output4);

// use of tricky map(); ///****************** */

const users =[ 
    {firstName:"aman",lastName:"saini",age:26},
    {firstName:"ajay",lastName:"sharma",age:75},
    {firstName:"rohan",lastName:"singh",age:50},
    {firstName:"sachin",lastName:"yadav",age:26},
];

// find list of full name 
// /***** */ like ... ["aman saini" , "ajay sharma"]

const output5 = users.map(x =>{
     return x.firstName + " " + x.lastName;
     // another way to write 
     //(x => x.firstName + " " + x.lastName );
} )// here  function will run against array and x is represent each line (obj.)

console.log(output5);

//*************** find how many user are a particular age
// like {26:2,75:1,50:1}

// here we will use reduce  because here we will find a single obj

const output6 = users.reduce(function(acc , curr){
 
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]

    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(output6);

// ********** find first name which age < 30 
// chaining map, filter and reduce  

const out = users.filter((x) => x.age< 30)
.map((x) => x.firstName);

console.log(out);

//***************** same work by usig reduce  */
//home work 

const findFname = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName); // we will push first name into accumulator

    }
    return acc;

},[]); // initial value of acc is empty[]
console.log(findFname);



