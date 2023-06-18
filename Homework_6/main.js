//task1

let divElement = document.getElementById("test");
divElement.textContent = "Last";

// const divElement = document.querySelector("#test");
// divElement.textContent = "Last";

//task2

const image = document.getElementById("myImage");
image.src = "cat.jpg";
const newWidth = 400;
const newHeight = 350;

image.style.width = `${newWidth}px`;
image.style.height = `${newHeight}px`;

//task3

let elements = document.querySelectorAll("#text > *");

elements.forEach((element, index) => {
  console.log(`Selector text ${index}: ${element.textContent}`);
});

//task4

let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
let order = [0, items.length - 1, 1, 3, 2];
let output = order.map((index) => items[index].textContent).join(", ");

console.log(output);

//task5

let header = document.querySelector("h1");
let firstParagraph = document.querySelector("#myDiv p:first-child");
let secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
let thirdParagraph = document.querySelector("#myDiv p:nth-child(3)");
let fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
let listItems = document.querySelectorAll("#myList li");
let span = document.querySelector("span");

header.style.fontWeight = "bold";
header.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
firstParagraph.style.fontWeight = "bold";
secondParagraph.style.color = "red";
thirdParagraph.style.textDecoration = "underline";
fourthParagraph.style.fontStyle = "italic";
listItems.forEach((item) => {
  item.style.display = "inline";
  item.style.margin = "0";
  item.style.padding = "0";
  item.style.listStyle = "none";
});
listItems.forEach((item) => {
  item.style.display = "inline";
  item.style.margin = "0";
  item.style.padding = "0";
  item.style.listStyle = "none";
});
span.style.display = "none";

const horizontalText = Array.from(listItems)
  .map((item) => item.textContent.trim())
  .join("");

const horizontalTextElement = document.createElement("p");
horizontalTextElement.textContent = horizontalText;

document.body.appendChild(horizontalTextElement);

//task6

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
const message1 = prompt('Enter the first message:');
const message2 = prompt('Enter the second message:');
let tempValue = input1.value;

input1.value = input2.value;
input2.value = tempValue;
input1.value = message2;
input2.value = message1;

// //task7

// let body = document.createElement('body');
// let main = document.createElement('main');
// main.className = 'mainClass check item';
// let div = document.createElement('div');
// div.id = 'myDiv';
// let p = document.createElement('p');
// p.textContent = 'First paragraph';

// div.appendChild(p);
// main.appendChild(div);
// body.appendChild(main);
// document.body = body;