import React from "react";

export const DISPLAY_CSS_OPTIONS = [
	{ label: "default", value: "" },
	{ label: "block", value: "block" },
	{ label: "inline-block", value: "inline-block" },
	{ label: "flex", value: "flex" },
	{ label: "inline-flex", value: "inline-flex" },
	{ label: "none", value: "none" },
];

function DisplaySettingSelect({
	label,
	breakpoints,
	device,
	updateBreakpoints,
	setAttributes,
}) {
	return (
		<SelectControl
			labelPosition="top"
			label={__(label)}
			options={DISPLAY_CSS_OPTIONS}
			value={breakpoints[device].display}
			onChange={(value) =>
				updateBreakpoints(setAttributes, breakpoints, device, "margin", values)
			}
		/>
	);
}

export default DisplaySettingSelect;
