import { Dashicon } from "@wordpress/components";

export default function (breakpoints) {
	let arr = [];
	Object.keys(breakpoints).forEach((key) => {
		arr.push({
			name: key,
			title: <Dashicon icon={breakpoints[key].icon} />,
			className: `tab-${key}`,
		});
	});
	return arr;
}
