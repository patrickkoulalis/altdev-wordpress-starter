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
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
export default function Edit({ attributes, setAttributes }) {
	const [isFullWidth, setIsFullWidth] = useState(attributes.fullWidth);
	const [maxWidth, setMaxWidth] = useState(attributes.maxWidth);
	const [backgroundColor, setBackgroundColor] = useState(
		attributes.backgroundColor
	);
	setAttributes({
		fullWidth: isFullWidth,
		maxWidth,
		backgroundColor,
	});
	const PADDING = attributes.style?.spacing?.padding;
	const BACKGROUND_COLOR = backgroundColor;
	const TEXT_COLOR = "";
	const LINK_COLOR = "";
	const SECTION_STYLES = {
		backgroundColor: BACKGROUND_COLOR,
		padding: `${PADDING?.top} ${PADDING?.right} ${PADDING?.bottom} ${PADDING?.left}`,
	};
	const CONTAINER_STYLES = {
		maxWidth: attributes.maxWidth || "1440px",
		margin: "0 auto",
	};

	function AltColorPalette() {
		const colors = [
			{ name: "alt-blue", color: "#1e42c8" },
			{ name: "alt-dark-blue", color: "#04091b" },
			{ name: "alt-purple", color: "#5539ac" },
			{ name: "alt-dark-purple", color: "#1a0c44" },
			{ name: "white", color: "#fff" },
			{ name: "black", color: "#000" },
			{ name: "primary-red", color: "#f00" },
			{ name: "primary-blue", color: "#00f" },
		];

		return (
			<ColorPalette
				colors={colors}
				value={backgroundColor}
				onChange={(backgroundColor) => setBackgroundColor(backgroundColor)}
			/>
		);
	}

	return (
		<>
			<section {...useBlockProps()} style={SECTION_STYLES}>
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
					<Panel>
						<PanelBody title="Color" icon={more} initialOpen={false}>
							<PanelRow>
								<fieldset>
									<legend className="components-visually-hidden">
										{__("Background Color", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Background color", "alt-blocks")}
									</label>
									{AltColorPalette()}
								</fieldset>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div style={!isFullWidth ? CONTAINER_STYLES : null}>
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
