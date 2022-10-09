
import Searchbar from "components/Searchbar";
import { Component } from 'react';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { Container } from './App.styled';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
	state = {
		name: '',
		page: 1,
		showModal: false,
		modalUrl: '',
		atl: '',
	};

	onForm = async (name, page) => {
		this.setState({ name: name, page: page});
	
	};


	modalImage = ({ largeImageURL, tags }) => {
		this.setState({ modalUrl: largeImageURL, alt: tags });
	};

	toggleModal = () => {
		this.setState(({ showModal }) => ({ showModal: !showModal }));
	};

	render() {
		const { page, name, alt, modalUrl, showModal } = this.state;
		return (
			<Container>
				<Searchbar onSubmit={this.onForm} />
				<ImageGallery
					name={name}
					page={page}
					modalImage={this.modalImage}
					toggleModal={this.toggleModal} />
				
				{showModal && (
					<Modal src={modalUrl} alt={alt} onClose={this.toggleModal} />
				)}
				<ToastContainer transition={Flip} />
			</Container>
			
		);
	}

}

export default App;



// GetList = async name => {

	// 	if (name !== this.state.name) {
	// 		this.setState({
	// 			items: [],
	// 			page: 1,
	// 		})
	// 	}
	// 	try {
	// 		this.setState({
	// 			isLoad: true,
	// 			showButton: false
	// 		});
		
	
	// 		const materials = await API.getData(name, this.state.page);
	// 		this.setState(state => {
	// 			return {
	// 				items: [...state.items, ...materials.hits],			
	// 				name: name,
	// 				page: state.page + 1
	// 			}
	// 		});
	// 	} catch {
	// 		this.setState({ error: 'Failed to load breeds :(' });
	// 	} finally {
	// 		this.setState({ isLoad: false });

	// 		if (this.state.items.length < 11) {
	// 			console.log(this.state.items.length);
	// 			this.setState({
	// 				showButton: false
	// 			});
	// 		}
	// 		else {
	// 			console.log(this.state.items.length);
	// 			this.setState({
	// 				showButton: true
	// 			});
	// 		};
	// 	}

	// };
	
		// onClick = async page => {

	// 	const materials = await API.getData(this.state.name, page);
	// 	this.setState(state => {
	// 		return {
	// 			items: [...state.items, ...materials.hits],
	// 			showButton: true,
	// 			page: page + 1,
	// 		}
	// 	}
	// 	);
		
	// };