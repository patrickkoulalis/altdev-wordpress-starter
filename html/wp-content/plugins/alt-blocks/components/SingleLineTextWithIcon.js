function SingleLineTextWithIcon({ className, icon, text, link }) {
	return (
		<div className={className}>
			{icon && icon}
			{link && (
				<a href={link}>
					<span>{text}</span>
				</a>
			)}
			{!link && <span>{text}</span>}
		</div>
	);
}

export default SingleLineTextWithIcon;
