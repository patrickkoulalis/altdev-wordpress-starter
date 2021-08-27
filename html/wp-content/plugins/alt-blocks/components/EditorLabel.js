export default function EditorLabel({ useBlockProps }) {
	return (
		<span className="block-label">{`${useBlockProps()["data-title"]} ${
			useBlockProps().id
		}`}</span>
	);
}
