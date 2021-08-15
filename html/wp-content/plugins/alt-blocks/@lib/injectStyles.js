import parseBoxControlValues from "./parseBoxControlValues";

export default function injectStyles(id, breakpoints) {
	let styles = ``;

	let getValue = (value, key) => {
		if (value == "padding" || value == "margin") {
			return parseBoxControlValues(breakpoints[key].properties[value]);
		}
		return breakpoints[key].properties[value];
	};

	let loopOver = ()

	let makeProperty = (value) => {
		return value.replaceAll(/([A-Z])/g, "-$1").toLowerCase();
	};

	Object.keys(breakpoints).forEach((key) => {
		const PROPERTIES = breakpoints[key].properties;
		const DEVICE = key;

		if (DEVICE === "desktop") {
			let str = ``;
			Object.keys(breakpoints[DEVICE].properties).forEach((value, index) => {
				if (!value || value == "") return;

				if (
					value == "columns" &&
					!breakpoints[DEVICE].properties.gridTemplateColumns
				) {
					str += `grid-template-columns: repeat(${getValue(
						value,
						DEVICE
					)}, 1fr);`;
				}

				if (value == "gridTemplateColumns") {
					str += `grid-template-columns: ${getValue(value, DEVICE)};`;
				}

				str += `${makeProperty(value)}: ${getValue(value, DEVICE)};`;
			});
			styles += `
			.editor-styles-wrapper .wp-block .block-${id},
			.block-${id} {
				${str}
			}
		`;
		} else {
			let str = ``;
			Object.keys(breakpoints[DEVICE].properties).forEach((value, index) => {
				console.log(index, breakpoints[DEVICE].properties[value]);
				str += `${value}: ${getValue(value, DEVICE)};`;
			});
			styles += `
			@media(max-width: ${breakpoints[key].width}){
				.editor-styles-wrapper .wp-block .block-${id},
				.block-${id} {
					${str}
				}
		`;
		}
	});
	return styles;
}
