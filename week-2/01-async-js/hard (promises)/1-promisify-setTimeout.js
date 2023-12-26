/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            // console.log(n);
            resolve();
            // whene resolve function is called inside the setTimeout function is resolves called
            //  after the delay if you call the resolve after the setimeout then the it will be called immidetely.

        },n*1000)
       
    });
}

wait(5);

module.exports = wait;
