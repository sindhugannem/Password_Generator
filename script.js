const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy');

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+{}[]<>?,.";

function getRandomChar(set) {
  return set[Math.floor(Math.random() * set.length)];
}

function generatePassword() {
  const length = +lengthEl.value;
  let characters = "";

  if (upperEl.checked) characters += upperSet;
  if (lowerEl.checked) characters += lowerSet;
  if (numberEl.checked) characters += numberSet;
  if (symbolEl.checked) characters += symbolSet;

  if (characters.length === 0) {
    passwordEl.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(characters);
  }

  passwordEl.value = password;
}

function copyToClipboard() {
  if (passwordEl.value === "") return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.innerText = "Copied!";
  setTimeout(() => copyBtn.innerText = "Copy", 2000);
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
