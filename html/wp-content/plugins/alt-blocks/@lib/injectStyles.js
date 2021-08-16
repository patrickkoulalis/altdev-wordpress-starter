import parseBoxControlValues from "./parseBoxControlValues";

export default function injectStyles(id, breakpoints = {}) {
	let styles = ``;

	Object.keys(breakpoints).forEach((key) => {
		const DEVICE = key;

		if (DEVICE === "desktop") {
			let str = ``;
			Object.keys(breakpoints[DEVICE]).forEach((value, index) => {
				str += makeCssRule(breakpoints, value, DEVICE);
			});
			if (str) {
				styles += `
				.editor-styles-wrapper .wp-block .block-${id},
				.block-${id} {
					${str}
				}
				`;
			}
		} else {
			let str = ``;
			Object.keys(breakpoints[DEVICE]).forEach((value, index) => {
				str += makeCssRule(breakpoints, value, DEVICE);
			});
			if (str) {
				styles += `
				@media(max-width: ${breakpoints[key].width}){
					.editor-styles-wrapper .wp-block .block-${id},
					.block-${id} {
						${str}
					}
				`;
			}
		}
	});

	return styles;
}

export function getValue(breakpoints, value, key) {
	if (value == "padding" || value == "margin") {
		return parseBoxControlValues(breakpoints[key][value]);
	}
	return breakpoints[key][value];
}

export function makeProperty(value) {
	return value.replaceAll(/([A-Z])/g, "-$1").toLowerCase();
}

export function makeCssRule(breakpoints, value, key) {
	if (
		value == "name" ||
		value == "width" ||
		value == "icon" ||
		value == "fullWidth"
	)
		return ``;
	if (!getValue(breakpoints, value, key)) return ``;

	if (value == "columns" && !breakpoints[key].gridTemplateColumns) {
		return `grid-template-columns: repeat(${getValue(
			breakpoints,
			value,
			key
		)}, 1fr);`;
	} else if (value == "gridTemplateColumns") {
		return `grid-template-columns: ${getValue(breakpoints, value, key)};`;
	}

	return `${makeProperty(value)}: ${getValue(breakpoints, value, key)};`;
}
