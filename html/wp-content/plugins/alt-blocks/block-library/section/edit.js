import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	Panel,
	PanelBody,
	PanelRow,
	Button,
	TabPanel,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import { uploadMedia } from "@wordpress/media-utils";
import classnames from "classnames";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
import injectStyles from "../../@lib/injectStyles";
import updateBreakpoints from "../../@lib/updateBreakpoints";
import spacingControls from "../../@lib/spacingControls";
import BREAKPOINT_TABS from "../../@lib/breakpointTabs";
export default function Edit({ attributes, setAttributes, clientId }) {
	const { backgroundColor, breakpoints, id, generatedStyles } = attributes;

	// allows for styling in save function
	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	setAttributes({
		generatedStyles: injectStyles(id, breakpoints),
	});

	const blockProps = useBlockProps({
		className: `block-${id}`,
	});
	return (
		<>
			<section {...blockProps}>
				{editorLabel(useBlockProps)}
				{inspectorControls(breakpoints, setAttributes)}
				<style>{generatedStyles}</style>
				<div class="container">
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}

function inspectorControls(breakpoints, setAttributes) {
	return (
		<>
			<InspectorControls key="setting">
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
				<Panel>
					<PanelBody title="Layout" icon={more} initialOpen={false}>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={BREAKPOINT_TABS(breakpoints)}
							initialTabName="desktop"
						>
							{(tab) => {
								const desktopControls = new layoutControls(
									setAttributes,
									breakpoints,
									"desktop"
								);
								const laptopControls = new layoutControls(
									setAttributes,
									breakpoints,
									"laptop"
								);
								const tabletControls = new layoutControls(
									setAttributes,
									breakpoints,
									"tablet"
								);
								const mobileControls = new layoutControls(
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
			</InspectorControls>
		</>
	);
}

function layoutControls(setAttributes, breakpoints, device) {
	return (
		<>
			<PanelRow>
				<legend className="components-visually-hidden">
					{__("Full Width", "alt-blocks")}
				</legend>
				<label className="components-custom-select-control__label">
					{__("Full Width", "alt-blocks")}
				</label>
				<ToggleControl
					checked={Boolean(breakpoints[device].fullWidth)}
					onChange={async (value) => {
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"fullWidth",
							value
						);
					}}
				/>
			</PanelRow>
			<PanelRow>
				<legend className="components-visually-hidden">
					{__("Max Container Width", "alt-blocks")}
				</legend>
				<label className="components-custom-select-control__label">
					{__("Container Max Width", "alt-blocks")}
				</label>
				<UnitControl
					value={breakpoints[device].maxWidth}
					onChange={(value) => {
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"maxWidth",
							value
						);
					}}
				/>
				<Button
					isSmall={true}
					isSecondary={true}
					onClick={() =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"maxWidth",
							null
						)
					}
				>
					Reset
				</Button>
			</PanelRow>
		</>
	);
}
