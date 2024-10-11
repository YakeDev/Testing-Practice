// calculator.test.js
const { calculator } = require('./calculator'); // Importer l'objet

test('calculator should add two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('calculator should subtract two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('calculator should multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('calculator should divide two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('calculator should handle division by zero', () => {
  expect(calculator.divide(6, 0)).toBe(Infinity); // Exemple de comportement possible pour division par zéro
});
