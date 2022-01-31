const numbersButton = document.querySelectorAll(".number");
const operatorsButton = document.querySelectorAll(".operators");
let clearButton = document.querySelectorAll(".clear");
const decimalButton = document.querySelector(".decimal");
const display = document.querySelector(".display");
(memoryCurrentNumber = 0),
  (memoryNewNumber = false),
  (memoryPendingOperation = "");

function numberPress(number) {
  if (memoryNewNumber === true) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value == "") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}
numbersButton.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});
function operations(opera) {
  let localOperationMemory = display.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +localOperationMemory;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +localOperationMemory;
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= +localOperationMemory;
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= +localOperationMemory;
    } else {
      memoryCurrentNumber = +localOperationMemory;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = opera;
  }
}
operatorsButton.forEach((opera) => {
  opera.addEventListener("click", (event) => {
    operations(event.target.textContent);
  });
});

function cleardis(id) {
  if (id === "C") {
    display.value = "0";
    memoryNewNumber = true;
  } else if (id === "CE") {
    display.value = "0";
    memoryNewNumber = true;
    memoryCurrentNumber = "0";
    localOperationMemory = "0";
  }
}
clearButton.forEach((id) => {
  id.addEventListener("click", (event) => {
    cleardis(event.target.textContent);
  });
});

function decimal() {
  let localDecimalMemory = display.value;
  if(memoryNewNumber){
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else{
    if(localDecimalMemory.indexOf(".")===-1){
      localDecimalMemory +=".";
    }
  }
  display.value = localDecimalMemory;
}
decimalButton.addEventListener ("click", (event) => {
    decimal(event.target.textContent);
});

