const capitalize = (word) => {
	let rest = word.slice(1);
	return word.charAt(0).toUpperCase() + rest;
};

const reverseWord = (word) => {
	return word.split("").reverse().join("");
};

const calculator = () => {
	const add = (num1, num2) => {
		return num1 + num2;
	};
	const subtract = (num1, num2) => {
		return num1 - num2;
	};
	const divide = (num1, num2) => {
		return num1 / num2;
	};
	const multiply = (num1, num2) => {
		return num1 * num2;
	};

	return { add, subtract, divide, multiply };
};

const caesarCipher = (string, shift) => {
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let solved = [];

	let input = Array.from(string);

	input.forEach((element) => {
		let index = alphabet.indexOf(element);

		let newIndex = (index + shift) % 26;
		solved.push(alphabet[newIndex]);
		// if (index + shift > 25) {
		// 	solved.push(alphabet[index + shift - 25]);
		// } else {
		// 	solved.push(alphabet[index + shift]);
		// }
	});
	return solved.join("");
};

export { caesarCipher, calculator, reverseWord, capitalize };
