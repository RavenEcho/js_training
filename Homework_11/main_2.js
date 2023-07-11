document.addEventListener("DOMContentLoaded", function () {
  let downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status === 200) {
        let booksData = xhr.response;
        displayAuthors(booksData);
      }
    };
    xhr.send();
  });
});

function displayAuthors(booksData) {
  let authorList = document.getElementById("authorList");
  authorList.innerHTML = ""; // Clear the existing list

  booksData.forEach(function (book) {
    let authorItem = document.createElement("li");
    authorItem.textContent = book.author;
    authorList.appendChild(authorItem);
  });
}
