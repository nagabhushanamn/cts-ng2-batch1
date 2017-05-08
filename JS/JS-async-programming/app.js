/*

    in .js-lang , we can invoke functions in 2 ways

    way-1 : sync invocation
    way-2 : async invocation

*/

//--------------------------------------------------------------

// way-1 : sync invocation

function f1() {

}

function f2() {
    f1(); // sync.. current execution-context blocks
}
f2();

//--------------------------------------------------------------

// way-2 : async invocation


//#1

// by defaut all DOM event-handler(s) executes asynchnouly

// ele.on('some-event', function () { })



//#2  // using Promise API 

// module-1 ( dependency )

// let hotel = {
//     getFood: function () {
//         let promise = new Promise((resolve, reject) => { 
//             //............
//             setTimeout(() => { 
//                 resolve("Biryani.....");
//                 console.log('Biryani ready...');
//                 //reject("Sorry...");
//             },5000);
//         });
//         return promise;
//     }
// }



// let tasmac = {
//     getDrink: function () {
//         let promise = new Promise((resolve, reject) => { 
//             //............
//             setTimeout(() => { 
//                 //resolve("bacardi.....");
//                 //console.log('bacardi ready...');
//                 reject("No stock");
//             },10000);
//         });
//         return promise;
//     }
// }


// // module-2 ( dependent )

// let trainer = {
//     doTeach: function () {
//         console.log('tnr teaching....');
//         console.log('feels hungry , requesting some food');
//         let promise = hotel.getFood(); // 
//         let promise2=tasmac.getDrink(); // 
//         console.log('tnr got promise...');
//         // Promise.all([promise,promise2])
//         Promise.race([promise,promise2])
//             .then(function(resp) { console.log('yummy ' + resp); }, function(error){ console.log('oops ' + error); })
//             //.catch((e) => { console.log('something went wrong..');});
        
//         console.log('cont with other work...finished further teaching...');
//     }
// }


// trainer.doTeach();



//-------------------------------------------------------------

// Reactive Programming ( RxJS )

//--------------------------------------------------------------