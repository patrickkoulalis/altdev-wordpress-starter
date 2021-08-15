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
				properties: {
					...breakpoints[device].properties,
					[setting]: newValue,
				},
			},
		},
	});
}
