const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lengthValueEl = document.getElementById("length-value");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const passwordStrengthEl = document.getElementById("password-strength");
const strengthTextEl = document.getElementById("strength-text");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

lengthEl.addEventListener("input", () => {
  lengthValueEl.textContent = lengthEl.value;
});

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  const password = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  resultEl.innerText = password;

  // Determine password strength
  const strength = getPasswordStrength(password);
  passwordStrengthEl.className = ""; // Reset previous strength classes
  passwordStrengthEl.classList.add(strength.class); // Add strength class
  strengthTextEl.textContent = strength.text; // Update strength text

  // Fade-in effect for result
  resultEl.classList.remove("show");
  setTimeout(() => {
    resultEl.classList.add("show");
  }, 10);
});

function getPasswordStrength(password) {
  const strengthCriteria = [
    password.length >= 8,
    /[a-z]/.test(password),
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ];
  const strength = strengthCriteria.filter(Boolean).length;

  if (strength < 2) {
    return { text: "Weak Password", class: "weak" }; // Weak
  } else if (strength < 4) {
    return { text: "Moderate Password", class: "moderate" }; // Moderate
  } else {
    return { text: "Strong Password", class: "strong" }; // Strong
  }
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
