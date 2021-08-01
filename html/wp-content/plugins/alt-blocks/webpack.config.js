const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");

function generateEntries(entryPath) {
	let obj = {};
	const dirs = fs.readdirSync(entryPath);
	dirs.forEach((dir) => {
		if (!dir.includes(".php")) {
			obj[dir] = path.resolve(process.cwd(), "block-library", dir, "index.js");
		}
	});
	return obj;
}

module.exports = {
	...defaultConfig,
	entry: {
		// ...defaultConfig.entry,
		...generateEntries(path.resolve(process.cwd(), "block-library")),
		// test: path.resolve(process.cwd(), "src", "test", "index.js"),
		// card: path.resolve(process.cwd(), "src", "card", "index.js"),
		// section: path.resolve(process.cwd(), "src", "section", "index.js"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(process.cwd(), "build"),
	},
	// plugins: [new MiniCSSExtractPlugin({ filename: "[name].css" })],
};
