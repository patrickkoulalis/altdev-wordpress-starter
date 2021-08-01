import { __ } from "@wordpress/i18n";
import { select } from "@wordpress/data";
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
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const { alignColumn, alignContent } = attributes;
	const PADDING = attributes.style?.spacing?.padding;
	const STYLE = {
		padding: PADDING,
		alignSelf: alignColumn,
		justifyContent: alignContent,
	};

	return (
		<>
			<div {...useBlockProps()} style={STYLE}>
				{editorLabel(useBlockProps)}
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title="Layout" icon={more} initialOpen={false}>
							<PanelRow>
								<SelectControl
									labelPosition="top"
									label={__("Align Content")}
									options={[
										{ label: "Default", value: "" },
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
