export default function updateMeta(
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
				meta: {
					...breakpoints[device].meta,
					[setting]: newValue,
				},
			},
		},
	});
}
