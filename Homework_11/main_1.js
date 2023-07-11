document.addEventListener("DOMContentLoaded", function () {
  let voteButton = document.getElementById("voteButton");
  voteButton.addEventListener("click", castVote);
});

function castVote() {
  let voteButton = document.getElementById("voteButton");
  voteButton.removeEventListener("click", castVote);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/vote", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      voteButton.innerText = "Vote!";
      setTimeout(function () {
        voteButton.innerText = "Your vote is accepted: " + response.timestamp;
      }, 1000);
    }
  };
  xhr.send();
}
