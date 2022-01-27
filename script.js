const numbersButton = document.querySelectorAll(".number");
const operatorsButton = document.querySelectorAll(".operators");
let resultButton = document.querySelectorAll(".result");
let clearButton = document.querySelectorAll(".clear");
const decimalButton = document.querySelectorAll(".decimal");
const displaybutton = document.querySelector(".display");
//console.log(numbersButton, operatorsButton, resultButton, clearButton, decimalButton);

function numberPress(number) {
  if (displaybutton.value == "") {
    displaybutton.value = number;
  } else {
    displaybutton.value += number;
  }
}

numbersButton.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});
