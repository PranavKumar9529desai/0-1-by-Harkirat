/* Certainly! Promise.all is a method in JavaScript that takes an array of promises 
as input and returns a new promise. This new promise will be fulfilled when all the promises in the input array are fulfilled, 
or rejected if any of the promises are rejected.
*/

// In simpler terms, imagine you have multiple tasks that need to be completed asynchronously, and you want to wait until all of them are finished before moving on. Promise.all allows you to do that.


const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 1');
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 2');
  }, 5000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Task 3');
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: ['Task 1', 'Task 2', 'Task 3']
    // All promises have been fulfilled
  })
  .catch((error) => {
    console.log(error);
    // If any promise is rejected, this block will be executed
  });