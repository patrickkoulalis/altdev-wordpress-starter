import {
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
	TextControl,
	SelectControl,
	ColorPalette,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { more } from "@wordpress/icons";
import BREAKPOINT_TABS from "../@lib/breakpointTabs";
import updateBreakpoints from "../@lib/updateBreakpoints";

function BorderControlsPanel({ setAttributes, breakpoints }) {
	return (
		<Panel>
			<PanelBody title="Border" icon={more} initialOpen={false}>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={BREAKPOINT_TABS(breakpoints)}
					initialTabName="desktop"
				>
					{(tab) => {
						if (tab.name == "desktop") {
							return (
								<BorderControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="desktop"
								/>
							);
						} else if (tab.name == "laptop") {
							return (
								<BorderControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="laptop"
								/>
							);
						} else if (tab.name == "tablet") {
							return (
								<BorderControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="tablet"
								/>
							);
						} else if (tab.name == "mobile") {
							return (
								<BorderControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="mobile"
								/>
							);
						}
					}}
				</TabPanel>
			</PanelBody>
		</Panel>
	);
}

function BorderControls({ setAttributes, breakpoints, device }) {
	const colors = [
		{ name: "red", color: "#f00" },
		{ name: "white", color: "#fff" },
		{ name: "blue", color: "#00f" },
	];
	return (
		<>
			<PanelRow>
				<BoxControl
					label="Border Width"
					values={breakpoints[device].borderWidth}
					onChange={(values) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"borderWidth",
							values
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<SelectControl
					label="Border Style"
					value={breakpoints[device].borderStyle}
					options={[
						{ label: "None", value: "" },
						{ label: "Solid", value: "solid" },
						{ label: "Dotted", value: "dotted" },
						{ label: "Dashed", value: "dashed" },
					]}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"borderStyle",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<ColorPalette
					label="Border Color"
					colors={colors}
					value={breakpoints[device].borderColor}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"borderColor",
							value
						)
					}
				/>
			</PanelRow>
		</>
	);
}

export default BorderControlsPanel;
