import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, alt, onClose }) => {

	useEffect(() => {
		window.addEventListener('keydown', keyDown);
		return () => window.removeEventListener('keydown', keyDown)
	}, []);

	// React.useEffect(() => {
	// 	console.log("MOUNT", props);

	// 	return () => console.log("UNMOUNT", props)
	// }, []);


	const keyDown = e => {
		if (e.code === 'Escape') {
			onClose();
		}
	};

	const handleOverlayClick = ({ currentTarget, target }) => {
		if (currentTarget.nodeName === target.nodeName) {
			onClose();
		}

	};
	return createPortal(
		<Overlay onClick={handleOverlayClick}>
			<ModalWrapper>
				<img src={src} alt={alt} />
			</ModalWrapper>
		</Overlay>,
		modalRoot
	);

}

export default Modal;

Modal.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};