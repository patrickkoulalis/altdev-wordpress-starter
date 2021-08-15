export default function parseBoxControlValues(obj) {
	let prevValue;
	if (!obj) return "";
	Object.keys(obj).forEach((key) => {
		if (!prevValue) prevValue = obj[key];
		if (prevValue != obj[key] || obj[key] == null) {
			return "";
		}
	});
	return `${obj.top} ${obj.right} ${obj.bottom} ${obj.left}`;
}
