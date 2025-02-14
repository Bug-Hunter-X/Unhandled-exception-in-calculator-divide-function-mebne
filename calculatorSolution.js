function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error('Error:', error.message); // Handle error gracefully
    return 0; // Or return a default value
  }
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

module.exports = calculator;