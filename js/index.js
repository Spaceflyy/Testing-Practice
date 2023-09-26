const capitalize = (word) => {
	let rest = word.slice(1);
	return word.charAt(0).toUpperCase() + rest;
};

const reverseWord = (word) => {
	return word.split("").reverse().join("");
};

export { reverseWord, capitalize };
