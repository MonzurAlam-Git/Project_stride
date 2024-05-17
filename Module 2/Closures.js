const outerFunc = () => {
  let num = 10;

  const innerFunc = () => {
    num = num + 5;
    return num;
  };
  //   return innerFunc;
  //  Returning the Inner Function

  return innerFunc();
  // Returning the Result of Calling the Inner Function
};

const result = outerFunc();
// console.log("result by innerFunc", result());
// console.log("result by innerFunc", result());

console.log("result by innerFunc()", result);
console.log("result by innerFunc()", result);
// console.log("num", num);
