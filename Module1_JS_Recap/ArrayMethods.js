// if a function is passed in another function parameter its called call back functioon

// basic difference between forEach and map is -> forEach cant return an array it only can access a array and execute an opearation

const num = [10, 20, 21, 22, 32];
num.map((item) => console.log("Map", item));
num.forEach((item) => console.log("forEach", item));

const numr4Each = num.forEach((item) => item);
console.log("numr4Each", numr4Each);
// as forEach cant return anything, SO THE value of num2 remain undefined
const num_map = num.map((item) => item);
console.log("num_map", num_map);
// forEach can returm and modify and returmn complete difeerent array

console.log("number", num);
// Find returns a single
const foundValue = num.find((item) => item > 21);
console.log("foundValue", foundValue);
const filterValue = num.filter((item) => item < 22);
console.log("filterValue", filterValue);

// Reduce

// The reduce() function in JavaScript is used to reduce the array to a single value. It executes a provided function for each value of the array (from left to right), resulting in a single output value. This function takes in a callback function and an initial value

const reduceValue = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("reduceValue", reduceValue);
