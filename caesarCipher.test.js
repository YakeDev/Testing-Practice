const { caesarCipher } = require("./caesarCipher");

test("caesarCipher shifts letters correctly", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesarCipher wraps letters from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher leaves punctuation unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
