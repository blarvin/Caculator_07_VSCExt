document.addEventListener("DOMContentLoaded", () => {
  const outputField = document.querySelector(".div1");
  let currentOperation = "";
  let isNewOperation = true; // Flag to check if we are starting a new operation

  // Function to update the display field
  function updateDisplay(value, isResult = false, isEqualsPressed = false) {
    if (isEqualsPressed) {
      // Create a temporary span element for the result
      const resultSpan = document.createElement("span");
      resultSpan.innerText = `= ${value}`;
      resultSpan.style.paddingLeft = "6px";
      resultSpan.style.fontWeight = "bold";
      outputField.innerHTML = currentOperation + resultSpan.outerHTML; // Prepend ' = ' and make the result bold
    } else if (isNewOperation || isResult) {
      outputField.textContent = value;
      isNewOperation = false;
    } else {
      outputField.textContent += value;
    }
  }

  // Function to clear the display field
  function clearDisplay() {
    outputField.textContent = "";
    currentOperation = "";
    isNewOperation = true;
    console.log("Display cleared");
  }

  // Validate and format the operation string
  function formatOperationString(operation) {
    // Remove any leading/trailing spaces and ensure it does not end with an operator
    return operation.trim().replace(/[\+\-\*\/]$/, "");
  }

  // Calculate the result
  function calculateResult() {
    try {
      currentOperation = formatOperationString(currentOperation);
      // Evaluate the expression in the current operation
      const result = eval(currentOperation);
      if (!isFinite(result)) {
        // Check for division by zero
        throw new Error("Cannot divide by zero");
      }
      // Pass 'true' for the 'isEqualsPressed' parameter
      updateDisplay(result.toFixed(2), true, true); // Round the result to two decimal places and mark as result
      isNewOperation = true;
      console.log(`Calculation result: ${result.toFixed(2)}`);
    } catch (error) {
      console.error("Calculation error:", error.message);
      outputField.textContent = "error";
      isNewOperation = true;
    } finally {
      currentOperation = "";
    }
  }

  // Function to check if the last number already has a decimal
  function lastNumberHasDecimal() {
    const parts = currentOperation.split(/[\+\-\*\/]/);
    return parts.pop().includes(".");
  }

  // Attach event listeners to buttons
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === ".") {
        if (!lastNumberHasDecimal()) {
          currentOperation += value;
          updateDisplay(value);
          console.log(`Decimal point added: ${value}`);
        }
      } else {
        switch (value) {
          case "C":
            clearDisplay();
            break;
          case "=":
            calculateResult();
            break;
          case "+":
          case "-":
          case "*":
          case "/":
            if (!isNewOperation && !currentOperation.endsWith(" ")) {
              currentOperation += ` ${value} `;
              updateDisplay(value);
              console.log(`Operation added: ${value}`);
            }
            break;
          default: // Handle number buttons
            currentOperation += value;
            updateDisplay(value);
            console.log(`Number added: ${value}`);
            break;
        }
      }
    });
  });
});
