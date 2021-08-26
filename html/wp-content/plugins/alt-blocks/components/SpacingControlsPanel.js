import { Panel, PanelBody, PanelRow, TabPanel } from "@wordpress/components";
import spacingControls from "../@lib/spacingControls";
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
						const desktopControls = new spacingControls(
							setAttributes,
							breakpoints,
							"desktop"
						);
						const laptopControls = new spacingControls(
							setAttributes,
							breakpoints,
							"laptop"
						);
						const tabletControls = new spacingControls(
							setAttributes,
							breakpoints,
							"tablet"
						);
						const mobileControls = new spacingControls(
							setAttributes,
							breakpoints,
							"mobile"
						);
						if (tab.name == "desktop") {
							return desktopControls;
						} else if (tab.name == "laptop") {
							return laptopControls;
						} else if (tab.name == "tablet") {
							return tabletControls;
						} else if (tab.name == "mobile") {
							return mobileControls;
						}
					}}
				</TabPanel>
			</PanelBody>
		</Panel>
	);
}

export default SpacingControlsPanel;
