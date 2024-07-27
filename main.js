// Exercise 1
// const firstName = "Annisa";
// const lastName = "JC";

// const x = "Writer";
// const abc = "West Java";
// const j = 30;

// const camelCase = "Test one";
// const TEST_ONE_CASE = "testexample99999";

// console.log(firstName);
// console.log(abc);

// // Exercise 2
// const name = "Annisa";
// const age = 23;
// const isAnnisaWriter = true;
// const isAnnisaPerson = false;

// let user = null;
// let data = undefined;

// // Exercise 3
// const person = {
//   name: "Annisa J",
//   place: "West Java",
//   age: 23,
//   isWriter: true,
// };
// const food = {
//   name: "Nasgor",
//   place: "Grage Mall",
//   menu: {
//     optionOne: "Nasgor Biasa",
//     optionTwo: "Nasgor Kambing",
//     optionThree: "Nasgor Tanpa Nasi",
//   },
// };
// food.place = "Check";
// console.log(food.name);
// console.log(food.menu.optionOne);
// console.log(food["place"]);
// console.log(food["menu"]["optionThree"]);

// // Exercise 4
// const foods = ["Nasgor", "Sate", "Soto", "Mie"];
// const data = ["Writer", 23, true];
// const identity = [
//   { id: 1, name: "Annisa", job: "Writer" },
//   { id: 2, name: "Jece", job: "Full-stack dev" },
// ];
// console.log(foods[2]);
// console.log(data[1]);
// console.log(identity[1].job);

//Exercise 5
const foods = "nasgor";

const slicedFood = foods.slice(0, 3);

const firstLetter = foods.charAt(0).toUpperCase();
console.log(slicedFood);
console.log(firstLetter);

// Test
const checkLetter = `${foods.charAt(0).toUpperCase()}${foods.slice(1, 6)}`;
const pisah = "jika-teringat-tentang";
const pisahin = pisah.split("-");

console.log(checkLetter);
console.log(foods.length);
console.log(pisahin);
console.log(pisahin[1]);
