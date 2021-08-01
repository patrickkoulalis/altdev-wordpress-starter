export default function editorLabel(useBlockProps) {
	return (
		<span className="block-label">{`${useBlockProps()["data-title"]} ${
			useBlockProps().id
		}`}</span>
	);
}
