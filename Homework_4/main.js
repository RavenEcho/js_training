//task1

let widthInput = prompt("Enter the width of the rectangle:");
let heightInput = prompt("Enter the height of the rectangle:");
let width = parseFloat(widthInput);
let height = parseFloat(heightInput);

function calcRectangleArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Width and height must have positive values");
  }

  return width * height;
}

try {
  if (isNaN(width) || isNaN(height)) {
    throw new Error(
      "Invalid input. Width and height must have numeric values."
    );
  }

  let area = calcRectangleArea(width, height);
  console.log("Rectangle area:", area);
} catch (error) {
  console.error("Error:", error.message);
}

//task2

let ageInput = prompt("Enter your age:");
let age = parseInt(ageInput);

function checkAge() {
  try {
    if (ageInput === "") {
      throw new Error("The field is empty! Please enter your age.");
    }

    if (isNaN(age)) {
      throw new Error("Invalid input. Age must be of a numeric value.");
    }

    if (age < 14) {
      throw new Error("Sorry, you are too young to watch this movie.");
    }

    alert("You have access to watch the movie!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkAge();

//task3

class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}

function showMonthName(month) {
  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }

  let date = new Date(0, month - 1);
  return date.toLocaleString("default", { month: "long" });
}

try {
  let monthNumber = parseInt(prompt("Enter the month number:"));
  let monthName = showMonthName(monthNumber);
  console.log("Month:", monthName);
} catch (error) {
  if (error instanceof MonthException) {
    console.error("Error:", error.message);
  } else {
    console.error("Unknown error occurred:", error);
  }
}

//task4
class NegativeIdError extends Error {
  constructor() {
    super("ID must not be negative");
    this.name = "NegativeIdError";
  }
}

function showUser(id) {
  if (id < 0) {
    throw new NegativeIdError();
  }

  return { id };
}

function showUsers(ids) {
  const result = [];

  for (const id of ids) {
    try {
      const user = showUser(id);
      result.push(user);
    } catch (error) {
      if (error instanceof NegativeIdError) {
        console.error(`Error: ${error.message}: ${id}`);
      } else {
        console.error(`Unknown error occurred: ${error}`);
      }
    }
  }

  return result;
}

const userIds = [1, 2, -3, 4, 5];
const users = showUsers(userIds);
console.log(users);
