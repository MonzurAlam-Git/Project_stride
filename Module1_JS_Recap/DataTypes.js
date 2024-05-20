// Primitive : String, Number, Boolean, Null, UNdefined
// Non Primitive : Reference Variables (Object, Array, Function)

let a = 5;
let b = a;
b = 10;
console.log(b);

// Both Array holds same reference in memory , as a result change in one array effects other, thats the basic difference between primitive and non primitive

let array1 = ["oni", "mizan", "jon"];
let array2 = array1;
array2.push("tahsan");
console.log(array1);

// to solve reference hold , we can use spread operator
