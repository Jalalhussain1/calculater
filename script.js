let resultDisplay = document.getElementById('result');

// Append number or operator to result
function appendToResult(value) {
  resultDisplay.value += value;
}

// Clear the result
function clearResult() {
  resultDisplay.value = '';
}

// Calculate the result using eval()
function calculateResult() {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch (error) {
    resultDisplay.value = 'Error';
  }
}
