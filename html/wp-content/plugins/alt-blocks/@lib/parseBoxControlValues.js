export default function parseBoxControlValues(obj) {
	let isEmpty = true;
	let string = ``;

	Object.keys(obj).forEach((key) => {
		if (obj[key] && isEmpty) isEmpty = false;

		if (!obj[key]) {
			string += "0px ";
		} else if (obj[key].length == 2 || obj[key] === "rem" || obj[key] === "%") {
			string += `0${obj[key]} `;
		} else {
			string += `${obj[key]} `;
		}
	});

	if (isEmpty) return;

	return string.trimEnd();
}
