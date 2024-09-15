console.log("Start");

setTimeout(function cb(){
    console.log("callback");
},5000);

// if we gives time oMs it will behave same 

// setTimeout(function cb(){
//     console.log("callback");
// },0);


console.log("End");    

// Million lines of code 
// this loop code used for define trust issues

let startDate= new Date().getTime(); // get present time and date and .getTime gives exact time in milisec.
let endDate  = startDate;
while(endDate <  startDate + 10000){ 
    endDate = new Date().getTime();

}
console.log("while expires");  //this is the cuncurrency model 

