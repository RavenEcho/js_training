//task1
function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

//task2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    const product = arr.reduce((acc, num) => {
      if (typeof num !== "number") {
        reject("Error! Incorrect array!");
      }
      return acc * num;
    }, 1);
    resolve(product);
  });
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result));
calcArrProduct([5, "user2", 7, 12]).catch((error) => console.log(error));

//task3
// const delay = (i, time) =>
//   new Promise((resolve) => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//   for (let i = 0; i <= 9; i++) {
//     await delay(i, Math.random() * 3000);
//     console.log(i);
//   }
// }

// showNumbers();

//task4
function delay(i, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, time);
  });
}

async function showNumbers() {
  for (let i = 0; i <= 9; i++) {
    await delay(i, Math.random() * 3000);
  }
}

showNumbers();
