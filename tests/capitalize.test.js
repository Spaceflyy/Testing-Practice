const capitalize = require("../js/index.js");

test("Capitalize first letter of word", () => {
	expect(capitalize("hello")).toBe("Hello");
});
