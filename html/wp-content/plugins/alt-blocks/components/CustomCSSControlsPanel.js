import { Panel, PanelBody, TextareaControl } from "@wordpress/components";
import { more } from "@wordpress/icons";
import BREAKPOINT_TABS from "../@lib/breakpointTabs";
import updateBreakpoints from "../@lib/updateBreakpoints";

function CustomCSSControlsPanel({ setAttributes, attributes }) {
	return (
		<Panel>
			<PanelBody title="Custom CSS" icon={more} initialOpen={false}>
				<TextareaControl
					help="Use selector to refer to the parent element. Example: selector {property: vlaue}"
					value={attributes.customCSS}
					onChange={(value) => setAttributes({ customCSS: value })}
				/>
			</PanelBody>
		</Panel>
	);
}

export default CustomCSSControlsPanel;
