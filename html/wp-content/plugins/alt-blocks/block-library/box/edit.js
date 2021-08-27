import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { more } from "@wordpress/icons";
import "./editor.scss";
import EditorLabel from "../../components/EditorLabel";
import GeneratedStyles from "../../components/GeneratedStyles";
export default function Edit({ attributes, setAttributes }) {
	const PADDING = attributes.style?.spacing?.padding;
	const STYLES = {
		padding: `${PADDING?.top} ${PADDING?.right} ${PADDING?.bottom} ${PADDING?.left}`,
	};

	return (
		<>
			<div {...useBlockProps()}>
				<EditorLabel useBlockProps={useBlockProps} />
				<GeneratedStyles styles={generatedStyles} />
				<InnerBlocks />
			</div>
		</>
	);
}
