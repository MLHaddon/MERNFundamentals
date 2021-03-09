const { performance } = require('perf_hooks');
const start = performance.now();

// Number.prototype.isPrime = function() {
//   for( let i=2; i<= Math.sqrt(this); i++ ) {
//     if (this % i == 0) return false;
//   }
//   return true;
// }

// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e5 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,0000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// // recursive
// function rFib( n ) {
//   if ( n < 2 ) {
//       return n;
//   }
//   return rFib( n-1 ) + rFib( n-2 );
// }
// console.log(`
//         Fibonacci Number: ${rFib(20)}
//         This took ${performance.now() - start} milliseconds to run
//         `);

// // iterative
// function iFib( n ) {
//   const vals = [ 0, 1 ];
//   while(vals.length-1 < n) {
//       let len = vals.length;
//       vals.push( vals[len-1] + vals[len-2] );
//   }
//   return vals[n];
// }
// console.log(`
//         Fibonacci Number: ${iFib(20)}
//         This took ${performance.now() - start} milliseconds to run
//         `);
// console.log("Iterative Fibonacci is much more efficient.");

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
// console.log(`
//         Reversed String: ${story.split("").reverse().join("")}
//         This took ${performance.now() - start} milliseconds to run
//         `);

// Option 1

function reverseString(str) {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }
  return tempStr;
}
console.log(`
        Reversed String: ${reverseString(story)}
        This took ${performance.now() - start} milliseconds to run
        `);

// Option 2

// The recursive function stores each return value and returns each value after the base case is found.
function reverseString(str) {
  if (str === "") { // Base case breaks the function at the start.
    return ""; // Add the base case to the "Return Stack" when each recursive iteration has been called but not returned.)
  } else { // OTHERWISE continue calling the function on each character in the string until the base case is found.
    return reverseString(str.substr(1)) + str.charAt(0); // Finally return each "called" function one by one, concatenating the results to the base case each time.
  }
}
console.log(`
        Reversed String: ${reverseString(story)}
        This took ${performance.now() - start} milliseconds to run
        `);