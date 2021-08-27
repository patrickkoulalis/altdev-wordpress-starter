import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import GeneratedStyles from "../../components/GeneratedStyles";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<GeneratedStyles styles={generatedStyles} />
			<span className="icon">{attributes.iconTest}</span>
			<span>{attributes.text}</span>
		</div>
	);
}
