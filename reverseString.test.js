
const { reverseString } = require('./reverseString'); // Importer la fonction

test('reverseString should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString should handle empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString should handle single character strings', () => {
  expect(reverseString('a')).toBe('a');
});
