let persons = {
  name: "jon",
  age: 50,
  address: "ctg",
  dob: "31",
  position: "LWF",
};

const demoFunc = (obj) => {
  obj.age = 60;
  return obj;
};

const persons2 = demoFunc(persons);

// persons2.age = 30;
console.log("persons", persons);
console.log("persons2 :", persons2);
