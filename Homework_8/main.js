//task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [, , , ...c] = arr;

console.log(arr[0]);
console.log(arr[1]);
console.log(c);

//task2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

//task3
function mul(...args) {
  const numbers = args.filter((arg) => typeof arg === "number");

  if (numbers.length === 0) {
    return 0;
  }

  const product = numbers.reduce((acc, curr) => acc * curr, 1);

  return product;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//task4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);

console.log(client.result);
console.log(typeof client.result);

//task5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error("Keys and values arrays must have the same length");
  }

  const map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }

  return map;
}

console.log(map.size);
console.log(map.get(2));
