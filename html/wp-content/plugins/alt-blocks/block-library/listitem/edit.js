import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	FormFileUpload,
	Icon,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import editorLabel from "../../@lib/editorLabel";
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<div {...useBlockProps()}>
				{/* {editorLabel(useBlockProps)} */}
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title="Color" icon={more} initialOpen={false}>
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
						<PanelBody title="Settings" icon={more} initialOpen={false}>
							<PanelRow>
								<fieldset>
									<legend className="components-visually-hidden">
										{__("Icon", "alt-blocks")}
									</legend>
									<label className="components-custom-select-control__label">
										{__("Icon", "alt-blocks")}
									</label>
									<FormFileUpload
										accept="image/*"
										onChange={() => console.log("new image")}
									>
										Upload
									</FormFileUpload>
								</fieldset>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<Icon icon="saved" />
				<TextControl
					value={attributes.text}
					onChange={(val) => setAttributes({ text: val })}
				/>
			</div>
		</>
	);
}
