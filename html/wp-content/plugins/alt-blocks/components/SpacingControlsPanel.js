import {
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import updateBreakpoints from "../@lib/updateBreakpoints";
import { more } from "@wordpress/icons";
import BREAKPOINT_TABS from "../@lib/breakpointTabs";

function SpacingControlsPanel({ setAttributes, breakpoints }) {
	return (
		<Panel>
			<PanelBody title="Spacing" icon={more} initialOpen={false}>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					tabs={BREAKPOINT_TABS(breakpoints)}
					initialTabName="desktop"
				>
					{(tab) => {
						if (tab.name == "desktop") {
							return (
								<SpacingControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="desktop"
								/>
							);
						} else if (tab.name == "laptop") {
							return (
								<SpacingControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="laptop"
								/>
							);
						} else if (tab.name == "tablet") {
							return (
								<SpacingControls
									setAttributes={setAttributes}
									breakpoints={breakpoints}
									device="tablet"
								/>
							);
						} else if (tab.name == "mobile") {
							return (
								<SpacingControls
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

function SpacingControls({ setAttributes, breakpoints, device }) {
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

export default SpacingControlsPanel;
