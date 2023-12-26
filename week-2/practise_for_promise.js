const { error } = require("console");

console.log("started the code");

function Myfun(){
const MyVar = new Promise(function(resolve){
    setTimeout(function(){
        console.log("Work given to kamla didi");
         resolve();
    },2000);
    
    
});
return MyVar;
}

Myfun().then((resolve)=>{
    console.log("promise has been resolved");
}).catch((error)=>{
    console.log(error);

});


console.log("before the promise");


// const { error } = require("console");

// console.log("started the code");

// function Myfun() {
//   const MyVar = new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("Work given to kamla didi");
//       resolve();
//     }, 2000);
//   });
//   return MyVar;
// }

// Myfun().then((resolve) => {
//   console.log("promise has been resolved");
// }).catch((error) => {
//   console.log(error);
// });

// console.log("before the promise");