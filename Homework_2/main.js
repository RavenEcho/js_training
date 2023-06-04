//task1
let x = 1;
let y = 2;
let res1 = x.toString() + y.toString();
let res2 = Boolean(x) + String(y);
let res3 = x != y;
let res4 = parseFloat(res2);

console.log(res1);
console.log(typeof res1);

console.log(res2);
console.log(typeof res2);

console.log(res3);
console.log(typeof res3);

console.log(res4);
console.log(typeof res4);

// //task2

// let number = prompt("Enter a number:");

// if (number % 2 === 0 && number > 0) {
//   console.log("The number is even as well as positive.");
// } else {
//   console.log("The number is not both even and positive.");
// }

// if (number % 7 === 0) {
//   console.log("The number is a multiple of 7.");
// } else {
//   console.log("The number is not a multiple of 7.");
// }

// console.log(number);

//task3
let simpleArray = [];
let userValue = prompt("Enter any value:");

simpleArray[0] = 42;
simpleArray[1] = "Hello, world!";
simpleArray[2] = true;
simpleArray[3] = null;

console.log("Number of elements in the array:", simpleArray.length);

simpleArray[4] = userValue;

console.log("Fifth element of the array:", simpleArray[4]);

delete simpleArray[0];
console.log("Array after deleting the first element:", simpleArray);

//task4
let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join("*");

console.log(result);

//task5
let isAdult = prompt("Are you of legal age?");
const LEGAL_AGE = "You're of legal age";
const NOT_LEGAL_AGE = "You're too young";

if (isAdult >= 18) {
  console.log(LEGAL_AGE);
} else {
  console.log(NOT_LEGAL_AGE);
}

//task6
let sideA = parseFloat(prompt("Enter the length of side A:"));
let sideB = parseFloat(prompt("Enter the length of side B:"));
let sideC = parseFloat(prompt("Enter the length of side C:"));
let isRightAngled = sideA ** 2 + sideB ** 2 === sideC ** 2;
let semiperimeter = (sideA + sideB + sideC) / 2;
let area = Math.sqrt(
  semiperimeter *
    (semiperimeter - sideA) *
    (semiperimeter - sideB) *
    (semiperimeter - sideC)
);

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  console.log("Incorrect data");
} else {
  console.log("Area: " + area.toFixed(3));
}

if (isRightAngled) {
  console.log("The triangle is right-angled.");
} else {
  console.log("The triangle is not right-angled.");
}

//task7
let currentHour = new Date().getHours();

if (currentHour >= 23 || currentHour < 5) {
  console.log("Good night");
} else if (currentHour >= 5 && currentHour < 11) {
  console.log("Good morning");
} else if (currentHour >= 11 && currentHour < 17) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
