// import { passwordLengthpasswordSample greetings, Animal } from "./module/utils.js";
// import THEPROCESS, { fishPie } from "./module/process.js"

import { passwordLength, passwordSample, fishPie, TheProcess } from "./module/index.js";

// console.log(import.meta)
// console.log('directory: '+import.meta.dirname)
// console.log('filename: '+import.meta.filename)

// console.log("password length: "+passwordLength)
console.log("password sample: " + passwordSample);

console.log(fishPie);
// console.log(greetings('Tobi'))

// const anAnimal = new Animal('goat')
const aProcess = new TheProcess();
console.log(aProcess.log());

// const colors = ["red", "green"];

// // let first = colors[0]
// // let third = colors[2]

// const [first, second = "empty"] = colors;

// const name = "hon"
// // console.log(first, second);

// const user = { name: "Faith", age: 50, city: "Nairobi" };

// const { age, name: userName = "Tobi", car="toyota" } = user;

// console.log(age, userName, car)
