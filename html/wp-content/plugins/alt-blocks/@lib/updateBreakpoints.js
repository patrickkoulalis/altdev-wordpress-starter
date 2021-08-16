export default function updateBreakpoints(
	setAttributes,
	breakpoints,
	device,
	setting,
	newValue
) {
	setAttributes({
		breakpoints: {
			...breakpoints,
			[device]: {
				...breakpoints[device],
				[setting]: newValue,
			},
		},
	});
}
