import React from "react";

function BreakpointControls({ breakpoints, setAttributes,  }) {
	return (
		<>
			<TextControl
				label="Laptop"
				value={breakpoints.desktop.width}
				help="Default: 1280px"
				onChange={(value) =>
					updateBreakpoints(
						setAttributes,
						breakpoints,
						"laptop",
						"width",
						value
					)
				}
			/>
			<TextControl
				label="Tablet"
				value={breakpoints.tablet.width}
				help="Default: 1024px"
				onChange={(value) =>
					updateBreakpoints(
						setAttributes,
						breakpoints,
						"tablet",
						"width",
						value
					)
				}
			/>
			<TextControl
				label="Mobile"
				value={breakpoints.mobile.width}
				help="Default: 425px"
				onChange={(value) =>
					updateBreakpoints(
						setAttributes,
						breakpoints,
						"mobile",
						"width",
						value
					)
				}
			/>
		</>
	);
}

export default BreakpointControls;
