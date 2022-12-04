import './style.css';

export default function Price(props) {
	let price = props.price.price;
	return (
		<div className="right">
			<span className="price">{price} تومان</span>
		</div>
	);
}
