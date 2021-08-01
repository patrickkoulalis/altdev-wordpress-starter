import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<span className="icon">{attributes.iconTest}</span>
			<span>{attributes.text}</span>
		</div>
	);
}
