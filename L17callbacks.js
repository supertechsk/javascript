setTimeout(function(){
    console.log("first timer function")

},5000);
function x(y){
    console.log("x")
    y();

}
x(function y(){         // callback function passed inside x fun. 
    console.log("y") 
});
