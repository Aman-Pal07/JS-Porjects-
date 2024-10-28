const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const amPmEl = document.getElementById("am-pm");
const dateEl = document.getElementById("date");
const formatToggle = document.getElementById("format-toggle");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const formatHeading = document.getElementById("format-heading");

let is24HourFormat = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let amPm = "";

  // Handle 12-hour and 24-hour formats
  if (!is24HourFormat) {
    amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  }

  hoursEl.textContent = padZero(hours);
  minutesEl.textContent = padZero(minutes);
  secondsEl.textContent = padZero(seconds);
  amPmEl.textContent = amPm;

  // Display the current date
  dateEl.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

// Add leading zero if the value is less than 10
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// Toggle between 12-hour and 24-hour formats
formatToggle.addEventListener("change", (e) => {
  is24HourFormat = e.target.checked;
  formatHeading.textContent = is24HourFormat
    ? "24-Hour Format"
    : "12-Hour Format"; // Update h1 tag
  updateClock(); // Update the time immediately
});

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Update the clock every second
setInterval(updateClock, 1000);
