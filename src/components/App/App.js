
import Searchbar from "components/Searchbar";
import { useState } from 'react';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { Container } from './App.styled';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
	const [name, setName] = useState('');
	const [page, setPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [modalUrl, setModalUrl] = useState('');
	const [alt, setAlt] = useState('');

	const onForm = async (name, page) => {
		setName(name);
		setPage(page);
	};


	const modalImage = ({ largeImageURL, tags }) => {
		setModalUrl(largeImageURL);
		setAlt(tags);
	};

	const toggleModal = () => {
		setShowModal(prevState => !prevState);
	};
		return (
			<Container>
				<Searchbar onSubmit={onForm} />
				<ImageGallery
					name={name}
					page={page}
					modalImage={modalImage}
					toggleModal={toggleModal} />
				
				{showModal && (
					<Modal src={modalUrl} alt={alt} onClose={toggleModal} />
				)}
				<ToastContainer transition={Flip} />
			</Container>
			
		);
	}



export default App;