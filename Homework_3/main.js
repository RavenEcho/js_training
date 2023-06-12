//task 1
const array = [2, 3, 4, 5];
let product = 1;
let i = 0;

// for (let i = 0; i < array.length; i++) {
//   product *= array[i];
// }

// console.log("Product (using for loop):", product);

while (i < array.length) {
  product *= array[i];
  i++;
}

console.log("Product (using while loop):", product);

//task2

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//task3

// let result = randArray(5);

// function randArray(k) {
//   const arr = [];
//   for (let i = 0; i < k; i++) {
//     let randomNumber = Math.floor(Math.random() * 5000) + 1;
//     arr.push(randomNumber);
//   }

//   return arr;
// }

// console.log(result);

//task4
let inputA = parseInt(prompt("Enter number A:"));
let inputB = parseInt(prompt("Enter number B:"));
let result = raiseToDegree(inputA, inputB);

function raiseToDegree(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return Math.pow(a, b);
  } else {
    return "Please enter integers only.";
  }
}

console.log(`${result}`);

//task5
function findMin() {
  const numberOfNumbers = 5;
  const numbers = [];

  for (let i = 0; i < numberOfNumbers; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }

  if (numbers.length === 0) {
    return undefined;
  }

  let minValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      minValue = numbers[i];
    }
  }

  return minValue;
}

console.log(findMin());

//task6

function findUnique(arr) {
  const uniqueElements = new Set(arr);
  return arr.length === uniqueElements.size;
}

console.log(findUnique([1, 2, 3, 4, 1]));
console.log(findUnique([1, 2, 3, 4, 5]));

//task7

function getLastElements(arr, n) {
  if (n <= 0) {
    return [];
  } else if (n >= arr.length) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
}

console.log(getLastElements([1, 2, 3, 4, 5], 2));

//task8

function capitalizeFirstLetters(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0);
    const restOfWord = words[i].slice(1);
    words[i] = firstLetter.toUpperCase() + restOfWord;
  }

  return words.join(" ");
}

console.log(capitalizeFirstLetters("hello world"));
