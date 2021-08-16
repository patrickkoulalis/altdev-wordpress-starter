import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	Panel,
	PanelBody,
	PanelRow,
	Button,
	TabPanel,
	TextControl,
	SelectControl,
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
	const {
		backgroundColor,
		breakpoints,
		id,
		generatedStyles,
		containerClass,
		maxWidth,
		fullWidth,
	} = attributes;

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
				{inspectorControls(breakpoints, setAttributes, attributes)}
				<style>{generatedStyles}</style>
				{!fullWidth && (
					<div
						class={`ab-section-inner${containerClass && " " + containerClass}`}
						style={maxWidth && { maxWidth: maxWidth, margin: "0 auto" }}
					>
						<InnerBlocks />
					</div>
				)}
				{fullWidth && <InnerBlocks />}
			</section>
		</>
	);
}

function inspectorControls(breakpoints, setAttributes, attributes) {
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
						<PanelRow>
							<SelectControl
								labelPosition="top"
								label={__("Display")}
								options={[
									{ label: "default", value: "" },
									{ label: "block", value: "block" },
									{ label: "inline-block", value: "inline-block" },
									{ label: "flex", value: "flex" },
									{ label: "inline-flex", value: "inline-flex" },
									{ label: "none", value: "none" },
								]}
								value={attributes.breakpoints.desktop.display}
								onChange={(value) =>
									setAttributes({
										breakpoints: {
											...breakpoints,
											desktop: { ...breakpoints.desktop, display: value },
										},
									})
								}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Full Width"
								help="Toggle to make the section full width"
								checked={Boolean(attributes.fullWidth)}
								onChange={async (value) => {
									setAttributes({
										fullWidth: value,
									});
								}}
							/>
						</PanelRow>
						<PanelRow>
							<UnitControl
								label="Container Max Width"
								value={attributes.maxWidth}
								onChange={(value) => {
									setAttributes({
										maxWidth: value,
									});
								}}
							/>
							<Button
								isSmall={true}
								isSecondary={true}
								onClick={() => setAttributes({ maxWidth: null })}
							>
								Reset
							</Button>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Inner container class(es)"
								help="Separate multiple classes with spaces."
								value={attributes.containerClass}
								onChange={(value) =>
									setAttributes({
										containerClass: value,
									})
								}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}
