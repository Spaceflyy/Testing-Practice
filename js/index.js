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

export { calculator, reverseWord, capitalize };
