let a = 30;
const promise1 = new Promise((resolve, reject) => {
  if (a > 21) {
    resolve(console.log("Thik thak_1"));
  } else {
    reject(console.log("somossa ase_1"));
  }
});

const promise2 = new Promise((resolve, reject) => {
  if ((a = 48)) {
    resolve(console.log("Thik thak_2"));
  } else {
    reject(console.log("somossa ase_2"));
  }
});

Promise.all([promise1, promise2])
  .then((res) => console.log("both Promised resolved"))
  .catch((error) => console.log(error));

// const outerFunc = () => {
//   let num = 10;

//   const innerFunc = () => {
//     num = num + 5;
//     return num;
//   };

//   return innerFunc;
// };

// const incrementNum = outerFunc();

// console.log("result 1", incrementNum()); // 15
// console.log("result 2", incrementNum()); // 20
