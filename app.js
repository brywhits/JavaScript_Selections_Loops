// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// for (let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
    
// }

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("'FIZZBUZZ'")
//     }else if (i % 3 === 0){
//     console.log("FIZZ");
//     }else if (i % 5 === 0){
//     console.log("BUZZ");
//     }
// }

// Exercise 3 Section
// console.log("EXERCISE 1:\n==========\n");
// let i = 1;

// while (i <= 100) {
//     if (i % 2 !== 0){
//     console.log(i); 
//     }
//     i++;
// }

// Exercise 4 Section
console.log("EXERCISE 1:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for (let i = 1; i <= n; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Did not find value");
  }
  


