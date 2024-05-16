// declaration and expression
// Expression is when we store the function return value is called expresssion
// Declaration is when we define the function

// Normal function declaration
function add(num1, num2) {
  return num1 + num2;
}
// Normal function expression
const sum = add(10, 5);
console.log(sum);

//Normal Function expression in declaration
const add2 = function (num1, num2) {
  return num1 + num2;
};
console.log(add2(1, 3));

// Arrow function where function are written directly in expression not declaration

const addNumber = (num1, num2) => num1 + num2;
//  if we want to return a a single line then we can skip return keyword and {} ===> this feature only works with arrow function

const sum2 = addNumber(9, 8);
console.log(sum2);

let user = {
  age: 23,
  getAge: function () {
    console.log("Standard function =>", this.age);
  },
  getAge2: () => {
    console.log("Arrow function =>", this.age);
  },
};

user.getAge();
user.getAge2();

// ARROW FUNCTION cant let this keyword to access its parent element

// function can be accessed if we write a function declaration
// as a result - arrow function cant be accessed before declaration as it hasn't any declaration
const sqr = square(5);
console.log("Square Value", sqr);

function square(num) {
  return num * num;
}
