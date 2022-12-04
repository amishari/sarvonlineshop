import './style.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Header = () => {
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
			width: 400
		}
	};
	return (
		<>
			<button class="header" onClick={setModalOpen}>
				مشخصات فنی
			</button>
			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
				style={customStyles}>
				<div>Login/Signup</div>

				<button onClick={() => setModalOpen(false)}>بستن</button>
			</Modal>
		</>
	);
};
export default Header;
