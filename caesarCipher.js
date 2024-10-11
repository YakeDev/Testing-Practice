// Helper function to check if a character is a letter
const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase();
};

// Helper function to shift a character
const shiftChar = (char, shift) => {
  const charCode = char.charCodeAt(0);
  const base = char === char.toLowerCase() ? 97 : 65; // ASCII value for 'a' or 'A'

  // Apply shift and wrap within alphabet bounds
  return String.fromCharCode(((charCode - base + shift) % 26) + base);
};

// Caesar cipher function
const caesarCipher = (str, shift) => {
  return str
    .split("")
    .map((char) => {
      if (isLetter(char)) {
        return shiftChar(char, shift);
      }
      return char; // Keep non-alphabetical characters unchanged
    })
    .join("");
};

module.exports = { caesarCipher };
