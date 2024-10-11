
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b === 0 ? Infinity : a / b, // On peut gérer la division par zéro comme vous le souhaitez
};

module.exports = { calculator };
