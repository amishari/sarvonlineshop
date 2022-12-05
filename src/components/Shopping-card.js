import './style.css';
import Picture from './Picture.js';
import Title from './Title.js';
import Buttons from './Buttons.js';
import Header from './Header.js';

export default function ShoppingCard(props) {
	return (
		<div className="shoping-card">
			<Header spec={props.card} />
			<Picture picture={props.card} />
			<Title title={props.card} />
			<Buttons buttons={props.card} />
		</div>
	);
}
