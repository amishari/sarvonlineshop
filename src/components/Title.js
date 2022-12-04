import './style.css';

export default function Title(props) {
	let title = props.title.title;
	return <div className="title">{title}</div>;
}
