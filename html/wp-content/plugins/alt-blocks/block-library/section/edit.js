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
	__experimentalBoxControl as BoxControl,
	TextareaControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import { uploadMedia } from "@wordpress/media-utils";
import classnames from "classnames";
import "./editor.scss";
import SpacingControlsPanel from "../../components/SpacingControlsPanel";
import BorderControlsPanel from "../../components/BorderControlsPanel";
import PositionControlsPanel from "../../components/PositionControlsPanel";
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
		customCSS,
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
				<SpacingControlsPanel
					breakpoints={breakpoints}
					setAttributes={setAttributes}
				/>
				<Panel>
					<PanelBody title="Layout" icon={more} initialOpen={false}>
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
						<LayoutControls
							attributes={attributes}
							setAttributes={setAttributes}
						/>
						<TabPanel
							className="my-tab-panel"
							activeClass="active-tab"
							tabs={BREAKPOINT_TABS(breakpoints)}
							initialTabName="desktop"
						>
							{(tab) => {
								if (tab.name == "desktop") {
									return (
										<LayoutControlsTwo
											breakpoints={breakpoints}
											updateBreakpoints={updateBreakpoints}
											device="desktop"
										/>
									);
								} else if (tab.name == "laptop") {
									return (
										<LayoutControlsTwo
											breakpoints={breakpoints}
											updateBreakpoints={updateBreakpoints}
											device="laptop"
										/>
									);
								} else if (tab.name == "tablet") {
									return (
										<LayoutControlsTwo
											breakpoints={breakpoints}
											updateBreakpoints={updateBreakpoints}
											device="tablet"
										/>
									);
								} else if (tab.name == "mobile") {
									return (
										<LayoutControlsTwo
											breakpoints={breakpoints}
											updateBreakpoints={updateBreakpoints}
											device="mobile"
										/>
									);
								}
							}}
						</TabPanel>
					</PanelBody>
				</Panel>
				<BorderControlsPanel
					setAttributes={setAttributes}
					breakpoints={breakpoints}
				/>
				<PositionControlsPanel
					setAttributes={setAttributes}
					breakpoints={breakpoints}
				/>
				<Panel>
					<PanelBody title="Custom CSS" icon={more} initialOpen={false}>
						<TextareaControl
							help="Use selector to refer to the parent element. Example: selector {property: vlaue}"
							value={attributes.customCSS}
							onChange={(value) => setAttributes({ customCSS: value })}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</>
	);
}

function LayoutControls({ setAttributes, attributes }) {
	return (
		<>
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
		</>
	);
}

function LayoutControlsTwo({ breakpoints, updateBreakpoints, device }) {
	return (
		<>
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
					value={breakpoints[device].display}
					onChange={(value) =>
						updateBreakpoints(
							setAttributes,
							breakpoints,
							device,
							"display",
							value
						)
					}
				/>
			</PanelRow>
		</>
	);
}
