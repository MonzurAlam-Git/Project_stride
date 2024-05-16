const func1 = (name) => {
  console.log("Function 1 executing with", name);
};

const func2 = (name, age, callBackFunc) => {
  console.log("function 2 executing with", name, age);
  callBackFunc(name, age);
};

func2("syed", 22, func1);

// If a function is passed in another function parameter and its executes with accesing the property of main function -> its called callback function

// Indexing
const num = [12, 22, 32, 21212, 1212];
num.map((item) => console.log(item, index));
