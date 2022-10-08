import Searchbar from "components/Searchbar";
import { Component } from 'react';
import ImageGallery from '../ImageGallery';
import * as API from '../../services/api';
import { Container } from './App.styled';
let page = 1;
class App extends Component {
	state = {
		items: [],
		isLoading: false,
		error: false,
	};

	
	GetList = async name => {
		try {
			const materials = await API.getData(name, page);
			this.setState(state =>
				state.items
					? {
						items: [...state.items, ...materials.hits],
						showButton: true,
					}
					: { items: materials.hits }
			);
		} catch (error) {
			this.setState({ error: true, isLoading: false });
			console.log(error);
		}
	}


	render() {
		const { items, isLoading, error } = this.state;
			return (
				<Container>
					<Searchbar onSubmit={this.GetList} />
					<ImageGallery items={items} />
				</Container>
			)
  }
	
}

export default App;