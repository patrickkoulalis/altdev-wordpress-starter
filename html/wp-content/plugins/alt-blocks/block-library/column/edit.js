import { __ } from "@wordpress/i18n";
import { select } from "@wordpress/data";
import classnames from "classnames";
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
	SelectControl,
	TabPanel,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
import updateBreakpoints from "../../@lib/updateBreakpoints";
import spacingControls from "../../@lib/spacingControls";
import BREAKPOINT_TABS from "../../@lib/breakpointTabs";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		id,
		alignColumn,
		alignContent,
		breakpoints,
		generatedStyles,
	} = attributes;

	const blockStyles = injectStyles(id, breakpoints, alignColumn, alignContent);
	setAttributes({ generatedStyles: blockStyles });

	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	const blockClass = `block-${id}`;
	const blockProps = useBlockProps({
		className: classnames(blockClass),
	});

	return (
		<>
			<div {...blockProps}>
				{editorLabel(useBlockProps)}
				<style>{generatedStyles}</style>
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title="Spacing" icon={more} initialOpen={false}>
							<TabPanel
								className="my-tab-panel"
								activeClass="active-tab"
								tabs={BREAKPOINT_TABS(breakpoints)}
							>
								{(tab) => {
									const desktopControls = new spacingControls(
										setAttributes,
										breakpoints,
										"desktop"
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
									label={__("Align Content")}
									value={alignContent}
									options={[
										{ label: "default", value: "" },
										{ label: "center", value: "center" },
									]}
									onChange={(value) => setAttributes({ alignContent: value })}
								/>
								<SelectControl
									labelPosition="top"
									label={__("Align Column")}
									options={[
										{ label: "default", value: "" },
										{ label: "center", value: "center" },
									]}
									value={alignColumn}
									onChange={(value) => setAttributes({ alignColumn: value })}
								/>
							</PanelRow>
							<PanelRow>
								{/* <SelectControl
									label={__("Grid Area")}
									value={gridArea}
									options={gridAreaOptions}
									onChange={(value) => setGridArea(value)}
								/> */}
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<InnerBlocks />
			</div>
		</>
	);
}

function injectStyles(id, breakpoints, alignColumn, alignContent) {
	if (!breakpoints) return "";
	let styles = ``;
	Object.keys(breakpoints).forEach((key) => {
		styles += `@media(min-width: ${breakpoints[key].width}){
				.editor-styles-wrapper .wp-block .block-${id},
				.block-${id} {
					${
						breakpoints[key].padding.top
							? `padding: ${parseBoxControlValues(breakpoints[key].padding)};`
							: ""
					}
					${
						breakpoints[key].margin.top
							? `margin: ${parseBoxControlValues(breakpoints[key].margin)};`
							: ""
					}
					${alignColumn ? `align-self: ${alignColumn};` : ""}
					${alignContent ? `justify-content: ${alignContent};` : ""}
				}
			}
		`;
	});

	let stylesWithTag = `${styles}`;
	return stylesWithTag;
}

function parseBoxControlValues(obj) {
	let prevValue;
	if (!obj) return "";
	Object.keys(obj).forEach((key) => {
		if (!prevValue) prevValue = obj[key];
		if (prevValue != obj[key] || obj[key] == null) {
			return "";
		}
	});
	return `${obj.top} ${obj.right} ${obj.bottom} ${obj.left}`;
}
