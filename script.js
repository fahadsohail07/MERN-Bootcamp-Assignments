let string = "0";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "C") {
      string = "";
      document.getElementById("result").value = string;
    } else if (e.target.innerHTML === "CE") {
      string = string.slice(0, -1);
      document.getElementById("result").value = string;
    } else if (e.target.innerHTML === "=") {
      string = eval(string);
      document.getElementById("result").value = string;
    } else {
      console.log(e.target);
      if (string === "0") {
        string = e.target.innerHTML;
        document.getElementById("result").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.getElementById("result").value = string;
      }
    }
  });
});

// let currentResult = "0";
// let previousResult = "0";
// let operation = null;
// let resultDisplayed = false;

// function updateDisplay() {
//   const display = document.getElementById("result");
//   display.value = currentResult;
// }

// function clearDisplay() {
//   currentResult = "0";
//   previousResult = "0";
//   operation = null;
//   resultDisplayed = false;
//   updateDisplay();
// }

// function backspace() {
//   currentResult = currentResult.slice(0, -1) || "0";
//   updateDisplay();
// }

// function addNumber(number) {
//   if (currentResult === "0" && number !== ".") {
//     currentResult = number;
//   } else if (number === ".") {
//     if (!currentResult.includes(".")) {
//       currentResult += number;
//     }
//   } else {
//     currentResult += number;
//   }
//   updateDisplay();
// }

// function addOperation(op) {
//   if (operation) {
//     calculate();
//   }
//   operation = op;
//   previousResult = currentResult;
//   currentResult = "0";
// }

// function calculate() {
//   const prev = parseFloat(previousResult);
//   const current = parseFloat(currentResult);
//   if (isNaN(prev) || isNaN(current)) {
//     return;
//   }
//   let result = 0;
//   switch (operation) {
//     case "+":
//       result = prev + current;
//       break;
//     case "-":
//       result = prev - current;
//       break;
//     case "*":
//       result = prev * current;
//       break;
//     case "/":
//       result = prev / current;
//       break;
//     default:
//       return;
//   }
//   currentResult = result.toString();
//   operation = null;
//   resultDisplayed = true;
//   updateDisplay();
// }

// function handleKeyPress(event) {
//   const key = event.key;
//   if (key === "Enter" || key === "=") {
//     calculate();
//   } else if (key === "+" || key === "-" || key === "*" || key === "/") {
//     addOperation(key);
//   } else if (key === ".") {
//     addNumber(key);
//   } else if (key >= "0" && key <= "9") {
//     addNumber(key);
//   } else if (key === "Backspace") {
//     backspace();
//   } else if (key === "Escape") {
//     clearDisplay();
//   }
// }

// updateDisplay();

// const keys = document.querySelectorAll(".calculator-key");
// keys.forEach((key) =>
//   key.addEventListener("click", function (event) {
//     const value = event.target.innerText;
//     if (value === "C") {
//       clearDisplay();
//     } else if (value === "←") {
//       backspace();
//     } else if (value === "=") {
//       calculate();
//     } else if (
//       value === "+" ||
//       value === "-" ||
//       value === "*" ||
//       value === "/"
//     ) {
//       addOperation(value);
//     } else if (value === ".") {
//       addNumber(value);
//     } else {
//       addNumber(value);
//     }
//   })
// );

// document.addEventListener("keydown", handleKeyPress);
