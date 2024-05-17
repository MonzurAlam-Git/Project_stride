const outerFunc = () => {
  let num = 10;

  const innerFunc = () => {
    num = num + 5;
    return num;
  };

  return innerFunc;
};

const incrementNum = outerFunc();

console.log("result 1", incrementNum()); // 15
console.log("result 2", incrementNum()); // 20
