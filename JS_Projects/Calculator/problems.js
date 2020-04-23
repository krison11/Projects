function getDisplayNumber() {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

function updateDisplay() {
  this.currentOperandTextElement.innerText = this.getDisplayNumber(
    this.currentOperand
  );
  if (this.operation != null) {
    this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
      this.previusOperand
    )} ${this.operation}`;
  } else {
    this.previousOperandTextElement.innerText = '';
  }
}
