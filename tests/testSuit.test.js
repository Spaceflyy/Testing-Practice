import {
	caesarCipher,
	calculator,
	capitalize,
	reverseWord,
} from "../js/index.js";

test("Capitalize first letter of word", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Reverse a string", () => {
	expect(reverseWord("test")).toBe("tset");
});

test("Calculator functions work properly", () => {
	const data = calculator();

	expect(data.add(1, 2)).toBe(3);
	expect(data.subtract(5, 2)).toBe(3);
	expect(data.divide(4, 2)).toBe(2);
	expect(data.multiply(2, 6)).toBe(12);
});

test("Caesar Cipher", () => {
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
		"bcdefghijklmnopqrstuvwxyza"
	);

	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe(
		"defghijklmnopqrstuvwxyzabc"
	);
});
