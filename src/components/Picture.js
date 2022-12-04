import './style.css';

export default function Picture(props) {
	let picture = props.picture.picture;
	return (
		<div className="img-sec">
			<img src={picture} alt="" />
		</div>
	);
}
