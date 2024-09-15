// callback **********************

 console.log("Namaste");
 // delay fo 5 sec. *************

 setTimeout(function(){     // use callback into setTimout
    console.log("Javascript 2");
    
 },4000);
 console.log("javascript");
 console.log("Season 2"); 

 ///  nested callback fun.

 const cart = ["shoes", "pants", "kurta"];

 api.createOrder( cart ,function(){

    api.proceedToPayment( function(){

            api.showOrderSummary(
                
                function(){
                api.updateWallet() 
            }) 
        }) 
});

 


