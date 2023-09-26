import { capitalize, reverseWord } from "../js/index.js";

test("Capitalize first letter of word", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Reverse a string", () => {
	expect(reverseWord("test")).toBe("tset");
});
