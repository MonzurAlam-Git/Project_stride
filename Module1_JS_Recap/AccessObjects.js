const user = {
  name: "Karim",
  contact: {
    phone: "014444",
    email: "user@user.com",
  },
  pet: {
    name: "Jacky",
    info: {
      color: "Black",
      weight: "1.5 kg",
    },
  },
  familyMembers: [
    {
      name: "X",
      age: 54,
    },
    {
      name: "Vibe",
      age: 42,
    },
  ],
};

const familyACCESS = user.familyMembers[1].name;
console.log(familyACCESS);

const {
  contact: { email },
} = user;
console.log(email);

const {
  pet: {
    info: { color },
  },
} = user;
console.log(color);

const {
  familyMembers: [{ name, age }, { name: name_, age: age_ }],
} = user;
console.log(name_);

// destructuring rules :
// Keep the destructured element in the left under the {} curly braces and if we want to nested destructure just use : to go inside
// const {
//   pet: {
//     info: { color },
//   },
// } = user;
// const {
//   familyMembers: [{ name, age }, { name: name_, age: age_ }],
// } = user;
