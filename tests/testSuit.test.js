import {
	caesarCipher,
	calculator,
	capitalize,
	reverseWord,
	analyzeArray,
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

test("Caesar Cipher translates correctly", () => {
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
		"bcdefghijklmnopqrstuvwxyza"
	);
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe(
		"fghijklmnopqrstuvwxyzabcde"
	);
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 10)).toBe(
		"klmnopqrstuvwxyzabcdefghij"
	);
});

test("Creates object from array correctly", () => {
	const data = analyzeArray([1, 8, 3, 4, 2, 6]);
	expect(data).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
