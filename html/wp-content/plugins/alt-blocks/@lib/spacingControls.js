import {
	PanelRow,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import updateBreakpoints from "./updateBreakpoints";

export default function spacingControls(setAttributes, breakpoints, device) {
	return (
		<>
			<PanelRow>
				<BoxControl
					label="Padding"
					values={breakpoints[device].padding}
					onChange={(values) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"padding",
							values
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<BoxControl
					label="Margin"
					values={breakpoints[device].margin}
					onChange={(values) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"margin",
							values
						)
					}
				/>
			</PanelRow>
		</>
	);
}
