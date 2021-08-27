import {
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
	TextControl,
	SelectControl,
	ColorPalette,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { more } from "@wordpress/icons";
import BREAKPOINT_TABS from "../@lib/breakpointTabs";
import updateBreakpoints from "../@lib/updateBreakpoints";

function PositionControlsPanel({ setAttributes, breakpoints }) {
	return (
		<Panel>
			<PanelBody title="Positioning" icon={more} initialOpen={false}>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={BREAKPOINT_TABS(breakpoints)}
					initialTabName="desktop"
				>
					{(tab) => {
						if (tab.name == "desktop") {
							return (
								<PositionControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="desktop"
								/>
							);
						} else if (tab.name == "laptop") {
							return (
								<PositionControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="laptop"
								/>
							);
						} else if (tab.name == "tablet") {
							return (
								<PositionControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="tablet"
								/>
							);
						} else if (tab.name == "mobile") {
							return (
								<PositionControls
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

function PositionControls({ setAttributes, breakpoints, device }) {
	return (
		<>
			<PanelRow>
				<SelectControl
					label="Position"
					value={breakpoints[device].position}
					options={[
						{ label: "Default", value: "" },
						{ label: "Relative", value: "relative" },
						{ label: "Absolute", value: "absolute" },
						{ label: "Fixed", value: "fixed" },
						{ label: "Static", value: "static" },
						{ label: "Sticky", value: "sticky" },
					]}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"position",
							value
						)
					}
				/>
			</PanelRow>
			<PanelRow>
				<UnitControl
					label="Top"
					value={breakpoints[device].top}
					onChange={(value) =>
						updateBreakpoints(setAttributes, breakpoints, device, "top", value)
					}
				/>
				<UnitControl
					label="Right"
					value={breakpoints[device].right}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"right",
							value
						)
					}
				/>
				<UnitControl
					label="Bottom"
					value={breakpoints[device].bottom}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"bottom",
							value
						)
					}
				/>
				<UnitControl
					label="Left"
					value={breakpoints[device].left}
					onChange={(value) =>
						updateBreakpoints(setAttributes, breakpoints, device, "left", value)
					}
				/>
			</PanelRow>
			<PanelRow>
				<NumberControl
					label="z-index"
					value={breakpoints[device].zIndex}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"zIndex",
							value
						)
					}
				/>
			</PanelRow>
		</>
	);
}

export default PositionControlsPanel;
