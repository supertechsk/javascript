  function x(){
    console.log("x")

  };
  

  function y(x){
    console.log("y")
    //x();

  };
  y(x); // here y is higher order fun. and x is callback fun.

// Example

/*
const radius =[3, 1, 2, 4];

// calculate area by using functional programming 

const calculateArea = function (radius){
  const output=[];

  for(i=0;i<radius.length;i++){
    output.push(Math.PI * radius[i] * radius[i]); 
  }
  return output;
  
}
console.log(calculateArea(radius));

// for calculating circumference 

const calculateCurcumference= function (radius){
  const output=[];

  for(i=0;i<radius.length;i++){
    output.push(2*Math.PI * radius[i] ); 
  }
  return output;
  
}
console.log(calculateCurcumference(radius));

// calculate diameter  

const calculateDiameter = function (radius){
  const output=[];

  for(i=0;i<radius.length;i++){
    output.push(2 * radius[i]);
  }
  return output;
  
}
console.log(calculateDiameter(radius));
*/

// It is not a good way to write a code 
// now this is the optimal way code 

const radius=[3, 1, 2, 4];

// calculate area 
const area= function(radius){
  return Math.PI * radius* radius;
}

// calculate circumference
const circumference = function(radius){
  return 2 * Math.PI * radius ;
}

// calculate diameter 

const diameter = function(radius){
  return 2 * radius;
}


const calculate = function(radiu, logic){
  const output= [];
  for(i=0; i< radiu.length; i++){
    output.push(logic(radiu[i]));
  }
  return output;
}


console.log(calculate(radius,area));// invoked 
// console.log(calculate(radius ,circumference));
// console.log(calculate(radius , diameter));

// here calculate function is similer as  map()
console.log(radius.map(area));

// if we want to that calculate fun. will exact similar to map(). then we will do some change in calculate fun.

Array.prototype.calculate = function( logic){
    const output= [];
    for(i=0; i< radius.length; i++){
      output.push(logic(radius[i]));
    }
    return output;
  }

console.log(radius.calculate(area)); 



