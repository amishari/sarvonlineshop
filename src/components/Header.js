import './style.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Header = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: 'white',
			width: 600,
			height: 250
		}
	};
	const spec = props.spec.spec;
	return (
		<>
			<button class="header" onClick={setModalOpen}>
				مشخصات فنی
			</button>
			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
				style={customStyles}>
				<div>
					<img src={spec} alt="n/a" />
				</div>

				<button onClick={() => setModalOpen(false)}>بستن</button>
			</Modal>
		</>
	);
};
export default Header;
