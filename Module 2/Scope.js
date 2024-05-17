let age = 12;

function parent() {
  let name = "Eida";
  function child() {
    // let age = 21;
    // if we write let age= 21; it will create a new variable scope , thus the gloval age and child func age holds different value
    age = 21;
    console.log(name, age);
  }
  child();
  //   console.log(age);
  // It wont work because age is in the child scope
}
parent();
console.log(age);

// In JavaScript, when you assign a value to a variable without using the `var`, `let`, or `const` keywords inside a function, JavaScript looks up the scope chain to find the nearest declaration of that variable. If it doesn't find one, it creates a global variable with that name.

// In the `child` function, there's a line `age = 21;`. Since there is no `let`, `var`, or `const` keyword before `age`, JavaScript looks up the scope chain to find where `age` is declared. It doesn't find any declaration of `age` within the `child` function, so it looks further up the scope chain and finds the global `age` variable.

// Therefore, when `age` is assigned a value in the `child` function, it actually modifies the value of the global `age` variable. This is why changing the value of `age` inside the `child` function affects the global `age` variable.
