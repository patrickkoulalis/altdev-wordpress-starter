import React from "react";
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { more } from "@wordpress/icons";
import updateMeta from "../@lib/updateMeta";

function BreakpointControls({ breakpoints, setAttributes }) {
	return (
		<Panel>
			<PanelBody title="Breakpoints" icon={more} initialOpen={false}>
				<PanelRow>
					<UnitControl
						label="Laptop"
						value={breakpoints.laptop.meta.width}
						help="Default: 1280px"
						onChange={(value) =>
							updateMeta(setAttributes, breakpoints, "laptop", "width", value)
						}
					/>
					<UnitControl
						label="Tablet"
						value={breakpoints.tablet.meta.width}
						onChange={(value) =>
							updateMeta(setAttributes, breakpoints, "tablet", "width", value)
						}
					/>
					<UnitControl
						label="Mobile"
						value={breakpoints.mobile.meta.width}
						help="Default: 425px"
						onChange={(value) =>
							updateMeta(setAttributes, breakpoints, "mobile", "width", value)
						}
					/>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
}

export default BreakpointControls;
