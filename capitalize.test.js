
const {capitalize} = require('./capitalize'); // Importer la fonction

test('capitalize should capitalize the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize should handle empty string', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize should handle strings with only one character', () => {
  expect(capitalize('a')).toBe('A');
});
