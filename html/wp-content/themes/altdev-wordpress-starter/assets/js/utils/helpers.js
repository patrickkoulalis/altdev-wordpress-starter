const querySelector = (selector) => {
	const el = document.querySelector(selector);
	return el;
};

const querySelectorAll = (selector) => {
	const el = Array.from(document.querySelectorAll(selector));
	return el;
};

const DOM = {
	querySelector: (selector) => {
		const el = document.querySelector(selector);
		return el;
	},
	querySelectorAll: (selector) => {
		const el = Array.from(document.querySelectorAll(selector));
		return el;
	},
};

export { querySelector, querySelectorAll, DOM };
