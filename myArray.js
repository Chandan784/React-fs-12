// let student1 = "sonu";
// let student2 = "soumya";
// let student3 = "abhisek";

// let students = ["sonu", "soumya", "abhisek"];

// let nums = [1, 2, 3, 5, 6, 3, 4, 4, 4];

// console.log(nums.length - 1);

//get value by index
// console.log(students[5]);
//set value by index
// students[1] = "chandan";

// console.log(students);

// stack = students(10) , heap = ["sonu","soumya","abhisek"](10)

// console.log(students.length);

// for (let index = 0; index <= students.length - 1; index++) {
//   console.log(students[index]);
// }

// let students = ["sonu", "soumya", "abhisek"];

// for (stu of students) {
//   console.log(stu);
// }

// for (index in students) {
//   console.log(index, students[index]);
// }

//sum elements of an array

// let nums = [2, 10, 4, 9]; //25

// function sumArray(arr) {
//   let result = 0;

//   for (let index = 0; index < arr.length; index++) {
//     result = result + arr[index];
//   }

//   return result;
// }

// console.log(sumArray(nums));

// arr= [2,10,4,9]
//result = 25
//index= 4

//swap index of array

// let nums = [1,2,3,4]  = [2,1,3,4]

//  [1,2,3,4,5,6]   = [6,2,3,4,5,1] = [6,5,3,4,2,1] = [6,5,4,3,2,1]

// start = 0
// ebd = arr.length -1

// start<end

//reverse array
//arr = [4,3,2,1]
//start =2
//end = 1

//myArr = [4,3,2,1]
//index1 =1
//index2 = 2
//temp = 2

// function reverseArr(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     swapArrIndex(arr, start, end);
//     start++;
//     end--;
//   }

//   function swapArrIndex(myArr, index1, index2) {
//     let temp = myArr[index1]; //myArr[1]
//     myArr[index1] = myArr[index2];
//     myArr[index2] = temp;
//   }

//   return arr;
// }

// console.log(reverseArr([1, 2, 3, 4,6,7]));

// [1,2,3,4,5,7]   =   1

// [2,3,4,5,1,6,7,8,9] =  1

// 1m = 1    O(1)

//sorted

// n   =   O(n)

//array methods

//push, pop, shift, unshift

// let nums = [1, 2, 3, 45, 5];

// nums.push(111);

// console.log(nums);

// nums.pop();

// console.log(nums);

// nums.unshift(6);

// console.log(nums);

// nums.shift();
// console.log(nums);

// let newArr = nums.slice(0);

// console.log(newArr);

// let nums = [1, 2, 3, 45, 5];
// nums.splice(1, 2, 10);

// console.log(nums);

//filter
let nums = [1, 2, 3, 4, 5, 6];
let target = 4;

// let ans = nums.filter((num) => {
//   return 0;
// });

// console.log(ans);

let ans = nums.filter((num) => {
  return num !== target;
});

console.log(ans);
