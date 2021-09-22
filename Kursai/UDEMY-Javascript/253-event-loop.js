///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');  // prints first
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));    //prints 3-rd

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res); // prints4-th
});

console.log('Test end');    // prints second


// console.log results
// Test start
// Test end
// Resolved promise 1
// Resolved promise 2