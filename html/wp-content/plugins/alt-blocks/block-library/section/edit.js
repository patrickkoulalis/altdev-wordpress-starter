import { __ } from "@wordpress/i18n";
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
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import classnames from "classnames";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
export default function Edit({
	attributes,
	setAttributes,
	className,
	clientId,
}) {
	const [isFullWidth, setIsFullWidth] = useState(attributes.fullWidth);
	const [maxWidth, setMaxWidth] = useState(attributes.maxWidth);
	const { backgroundColor } = attributes;
	setAttributes({
		fullWidth: isFullWidth,
		maxWidth,
	});

	const PADDING = attributes.style?.spacing?.padding;
	const TEXT_COLOR = "";
	const LINK_COLOR = "";
	const SECTION_STYLES = {
		backgroundColor: "",
		padding: `${PADDING?.top} ${PADDING?.right} ${PADDING?.bottom} ${PADDING?.left}`,
	};
	const CONTAINER_STYLES = {
		maxWidth: attributes.maxWidth || "1440px",
		margin: "0 auto",
	};
	let BLOCK_CLASS = `block-${clientId}`;
	const blockProps = useBlockProps({
		className: classnames(BLOCK_CLASS, className),
	});

	return (
		<>
			<section {...blockProps} style={SECTION_STYLES}>
				{editorLabel(useBlockProps)}
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title="Layout" icon={more} initialOpen={false}>
							<PanelRow>
								<fieldset>
									<legend className="components-visually-hidden">
										{__("Full Width", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Full Width", "alt-blocks")}
									</label>
									<ToggleControl
										checked={isFullWidth}
										onChange={async (bool) => {
											setIsFullWidth(bool);
										}}
									/>
									<legend className="components-visually-hidden">
										{__("Max Container Width", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Container Max Width", "alt-blocks")}
									</label>
									<UnitControl value={maxWidth} onChange={setMaxWidth} />
									<Button
										isSmall={true}
										isSecondary={true}
										onClick={() => setMaxWidth(null)}
									>
										Reset
									</Button>
								</fieldset>
							</PanelRow>
						</PanelBody>
					</Panel>
					{/* <Panel>
						<PanelBody title="Color" icon={more} initialOpen={false}>
							{ColorPaletteRow(
								"Background Color",
								backgroundColor,
								setAttributes
							)}
						</PanelBody>
					</Panel> */}
				</InspectorControls>
				{!attributes.fullWidth && (
					<div class="container" style={CONTAINER_STYLES}>
						<InnerBlocks />
					</div>
				)}
				{attributes.fullWidth && <InnerBlocks />}
			</section>
		</>
	);
}
