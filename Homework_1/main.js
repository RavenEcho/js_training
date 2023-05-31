//task2
const LAST_NAME = "Husak";
console.log(`My last name is ${LAST_NAME}`);

//task3
let refreshingDrink = "tea";
let favoriteDrink = "cofee";

console.log(`I enjoy drinking ${favoriteDrink} in the morning`);
console.log(`I enjoy drinking ${refreshingDrink} in the morning`);

refreshingDrink = favoriteDrink;

console.log(`I prefer to have a cup of ${favoriteDrink} in the morning`);
console.log(`I prefer to have a cup of ${refreshingDrink} in the morning`);

//task4
const team = {
  playersNumber: 11,
  name: "Manchester",
  hasTrophy: true,
  manager: undefined,
  president: null,
};

console.log(team);

//task5
let isAdult = confirm("Are you of legal age?");

console.log("Is the user an adult?", isAdult);

//task6
const FIRST_NAME = "Taras";
const SURNAME = "Husak";
const STUDY_GROUP = "Some Group";
const BIRTH_YEAR = 1995;
const MARRIED_STATUS = false;
const JOB_TITLE = null;
let salary;

console.log("Type of BIRTH_YEAR:", typeof BIRTH_YEAR);
console.log("Type of MARRIED_STATUS:", typeof MARRIED_STATUS);
console.log("Type of FIRST_NAME:", typeof FIRST_NAME);
console.log("Type of SURNAME:", typeof SURNAME);
console.log("Type of STUDY_GROUP:", typeof STUDY_GROUP);
console.log("Type of JOB_TITLE:", typeof JOB_TITLE);
console.log("Type of salary:", typeof salary);

//task7
let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");

console.log(`Dear ${login}, your email is ${email}, your password is ${password}`);

//task8
let secondsPerHour = 60 * 60;
let secondsPerDay = secondsPerHour * 24;
let secondsPerMonth = secondsPerDay * 30;

console.log("Seconds per hour:", secondsPerHour);
console.log("Seconds per day:", secondsPerDay);
console.log("Seconds per month:", secondsPerMonth);
