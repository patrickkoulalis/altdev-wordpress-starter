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
import SpacingControlsPanel from "../../components/SpacingControlsPanel";
import editorLabel from "../../@lib/editorLabel";
import injectStyles from "../../@lib/injectStyles";
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
					<SpacingControlsPanel
						breakpoints={breakpoints}
						setAttributes={setAttributes}
					/>
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
