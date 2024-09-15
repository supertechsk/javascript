setTimeout(function(){
    console.log("timer")

},5000);
function x(y){
    console.log("x")
    y();

}
x(function y(){         // callback function passed in x fun. 
    console.log("y") 
});