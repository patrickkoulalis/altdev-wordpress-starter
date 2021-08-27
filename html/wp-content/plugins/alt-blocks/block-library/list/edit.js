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
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import EditorLabel from "../../components/EditorLabel";
import GeneratedStyles from "../../components/GeneratedStyles";
export default function Edit({ attributes, setAttributes }) {
	const [isFullWidth, setIsFullWidth] = useState(attributes.fullwidth);
	setAttributes({ fullwidth: isFullWidth });
	return (
		<>
			<section {...useBlockProps()}>
				<EditorLabel useBlockProps={useBlockProps} />
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title="Color" icon={more} initialOpen={true}>
							<PanelRow>
								<fieldset>
									<legend className="components-visually-hidden">
										{__("Background Color", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Background Color", "alt-blocks")}
									</label>
									<ColorPalette />
								</fieldset>
							</PanelRow>
						</PanelBody>
					</Panel>
					<Panel>
						<PanelBody title="Layout" icon={more} initialOpen={true}>
							<PanelRow>
								<fieldset>
									<legend className="components-visually-hidden">
										{__("Full Width", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Full Width", "alt-blocks")}
									</label>
								</fieldset>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<GeneratedStyles styles={generatedStyles} />
				<InnerBlocks allowedBlocks={["altblocks/iconlistitem"]} />
			</section>
		</>
	);
}
