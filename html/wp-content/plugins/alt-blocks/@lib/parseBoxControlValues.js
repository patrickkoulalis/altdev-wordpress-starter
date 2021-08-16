export default function parseBoxControlValues(obj) {
	if (!obj || !obj.top) return;
	return `${obj.top} ${obj.right} ${obj.bottom} ${obj.left}`;
}
