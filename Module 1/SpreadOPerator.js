let a = [12, 123, 332, 34, 54, 22, 212];
const [num1, num2, ...other] = a;
// order is important
console.log(other);

let persons = {
  name: "jon",
  age: 50,
  address: "ctg",
  dob: "31",
  position: "LWF",
};
const persons2 = { ...persons };
const { name, age, ...details } = persons;
console.log(details);
