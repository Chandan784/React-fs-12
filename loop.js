//11

// for (let i = 1; i <= 10; i++) {

//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 2*1
// 2*2
// 2*3
// 2*4
// 2*5

//table program

// let myName = "chandan";
// let finalString = `hello ${myName}`;

// console.log(finalString);

// function findTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i} `);
//   }
// }

// findTable(2);

//find factor count
// 4 = 1*4, 2*2= 1,2,4 = 3
//10 = 1*10, 2*5 = 1,2,5,10 = 4

// 10 % 10 = 0 = 10
// 10 % 9 = 1

//num = 4
//factorCount = 3
//i = 0

// function findFactorCount(num) {
//   let factorCount = 0;

//   for (let i = num; i >= 1; i--) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// return factorCount;

// }

//     findFactorCount(4)

//check prime number

// function isPrimeNumber(num) {
//   let factorCount = 0;

//   for (let i = num; i >= 1; i--) {
//     if (num % i == 0) {
//       factorCount++;
//     }
//   }

//   if (factorCount <= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPrimeNumber(3));

// 5! = 5*4*3*2*1 =120
// 4!= 4*3*2*1 = 24

// find factorial

// function findFactorial(num) {
//   let factorial = num;

//   for (let i = num - 1; i >= 1; i--) {
//     factorial = factorial * i;
//   }

//   return factorial;
// }

// console.log(findFactorial(4));

//num =4
//factorial = 24
//i = 1
