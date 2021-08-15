export default function updateBreakpointsMeta(
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
