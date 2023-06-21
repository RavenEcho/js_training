//task1

// const newWindow = window.open("", "", "width=300,height=300");

// setTimeout(() => {
//   newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(() => {
//   newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(() => {
//   newWindow.close();
// }, 6000);

//task2

// function changeCSS() {
//   const paragraph = document.getElementById("text");

//   paragraph.style.color = "orange";
//   paragraph.style.fontSize = "20px";
//   paragraph.style.fontFamily = "Comic Sans MS";
// }

// const button = document.querySelector("button");
// button.addEventListener("click", changeCSS);

//task3

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const link = document.getElementById("link");
const body = document.body;

button1.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});

button2.addEventListener("dblclick", function () {
  body.style.backgroundColor = "pink";
});

button3.addEventListener("mousedown", function () {
  body.style.backgroundColor = "brown";
});

button3.addEventListener("mouseup", function () {
  body.style.backgroundColor = "white";
});

link.addEventListener("mouseover", function () {
  body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseout", function () {
  body.style.backgroundColor = "white";
});

//task4

document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.getElementById("myDropdown");
  let deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", deleteSelectedItem);

  let noValueOption = document.createElement("option");
  noValueOption.text = "No value";
  noValueOption.disabled = true;
  dropdown.add(noValueOption);

  updateDeleteButtonState();
});

function deleteSelectedItem() {
  let dropdown = document.getElementById("myDropdown");
  let selectedIndex = dropdown.selectedIndex;

  if (selectedIndex !== -1) {
    dropdown.options[selectedIndex].remove();
  }

  updateDeleteButtonState();
}

function updateDeleteButtonState() {
  let dropdown = document.getElementById("myDropdown");
  let deleteButton = document.getElementById("deleteButton");

  if (dropdown.options.length === 1 && dropdown.options[0].disabled) {
    deleteButton.disabled = true;
  } else {
    deleteButton.disabled = false;
  }
}

//task5

let button = document.getElementById("myButton");
let messageContainer = document.getElementById("messageContainer");

button.addEventListener("click", function () {
  messageContainer.textContent = "I was pressed!";
});

button.addEventListener("mouseenter", function () {
  messageContainer.textContent = "Mouse on me!";
});

button.addEventListener("mouseleave", function () {
  messageContainer.textContent = "Mouse is not on me!";
});

//task6

function updateDimensions() {
  let dimensionsElement = document.getElementById("dimensions");
  dimensionsElement.textContent =
    "Width: " + window.innerWidth + "px, Height: " + window.innerHeight + "px";
}

updateDimensions();
window.addEventListener("resize", updateDimensions);

//task7

let countryDropdown = document.getElementById("country");
let citiesDropdown = document.getElementById("cities");
let selectionParagraph = document.getElementById("selection");

let citiesData = {
  DE: ["Berlin", "Munich", "Hamburg"],
  US: ["New York", "Los Angeles", "Chicago"],
  UA: ["Kyiv", "Lviv", "Lutsk"],
};

function populateCities() {
  citiesDropdown.innerHTML = "";

  let selectedCountry = countryDropdown.value;
  let cities = citiesData[selectedCountry];

  cities.forEach(function (city) {
    let option = document.createElement("option");
    option.text = city;
    citiesDropdown.add(option);
  });
}

countryDropdown.addEventListener("change", populateCities);
citiesDropdown.addEventListener("change", function () {
  let selectedCountry =
    countryDropdown.options[countryDropdown.selectedIndex].text;
  let selectedCity = citiesDropdown.value;
  selectionParagraph.textContent = selectedCountry + ", " + selectedCity;
});

populateCities();
