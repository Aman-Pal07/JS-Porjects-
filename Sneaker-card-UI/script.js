// script.js

const messageButton = document.querySelector(".message-btn");
const followButton = document.querySelector(".follow-btn");

// Toggle Follow Button Text
followButton.addEventListener("click", () => {
  if (followButton.textContent === "Following") {
    followButton.textContent = "Follow";
    followButton.classList.remove("ghost");
  } else {
    followButton.textContent = "Following";
    followButton.classList.add("ghost");
  }
});

// Message Button Alert
messageButton.addEventListener("click", () => {
  alert("Message sent to Ricky Park!");
});
