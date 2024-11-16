 // callback **********************

 console.log("Namaste javascript");
 // delay fo 5 sec. *************

 setTimeout(function(){     // use callback into setTimout
    console.log("Javascript 2");
    
 },5000);
 console.log("javascript");
 console.log("Season 2"); 

 ///  nested callback function.

 const cart = ["shoes", "pants", "kurta"];

 api.createOrder( cart ,function(){

    api.proceedToPayment( function(){

            api.showOrderSummary(
                
                function(){
                api.updateWallet() 
            }) 
        }) 
});

 


