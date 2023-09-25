const capitalize = (word) => {
	let rest = word.slice(1);
	return word.charAt(0).toUpperCase() + rest;
};

module.exports = capitalize;
