export const GifItem = ({id, title, url}) => {
	return (
		<div className="card" key={id}>
			<img src={url} alt={title} />
			<p>{ title }</p>
		</div>
	);
};
