// console.log(a);
// getName2();
// console.log(getName);

// var a=7;

// var getName = () => {
//     console.log("hello")
// } 
// function getName2(){
//     console.log("Namaste javascript");
// }

// // getName();
// // console.log(a);  
// // console.log(getName); 


//*****************************************
//     let b=100;
// {
//     var   a=10;
//     let   b=20;
//     const c=30; 
//     console.log(a) 
//     console.log(b)
//     console.log(c)
// }
//     console.log(a) 
//     console.log(b)
//     //console.log(c)

// function d(){
//     var x=90;
//     e();
//     function e() {
//         console.log(x);
//     }
// }
// d();
// //console.log(3+true); // 3+1 =4 


function x(){
    var a=7;
     function y(){
        console.log(a);
        

    }
    return y;
    //y();
}
var z= x();
console.log(z);



//*************************** 
function z(){
    var b=9;

    function x(){
        var a =7;
        
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

