import Button from "components/Button";
import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import * as API from '../../services/api';
import Loader from '../Loader';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
	state = {
		items: [],
		page: 1,
		isLoad: false,
		largeImageURL: '',
		tags: '',
		showButton: false,
		total: 0,
	};

	async componentDidUpdate(prevProps, prevState) {

		const { page} = this.state;

		const prevQuery = prevProps.name;
		const nextQuery = this.props.name;
		const prevPage = prevState.page;
		const currentPage = this.state.page;

		const options = {
			position: 'top-right',
			autoClose: 3000,
		};

		if (prevQuery !== nextQuery) {
			this.setState({ items: [], page: 1 });
		}

		if (
			prevPage !== currentPage ||
			prevQuery !== nextQuery
		) {
			this.setState({ isLoad: true });
			try {

				const images = await API.getData(nextQuery, page);
				this.setState(state =>
					state.items
						? {
							items: [...state.items, ...images.hits],
							total: images.totalHits,
							showButton: true,

						}
						: {
							items: images.hits,
							total: images.totalHits,

						}
				);
				
				if (images.totalHits > 0 && prevQuery !== nextQuery) {
					toast.success(
						`Hooray! We found ${images.totalHits} images.`,
						options
					);
				} else if (prevQuery !== nextQuery) {
					toast.warn(
						'Oops, we did not find anything for your request!',
						options
					);
				}
			} catch {
				toast.error(
					'Oops, something went wrong. Repeat one more time!',
					options
				);
			} finally {
				this.setState({ isLoad: false });
			}
		}
	}

	onClick = () => {
		this.setState(state => ({ page: state.page + 1 }));

	};


	onClickImage = ({ largeImageURL, tags }) => {
		this.setState({ largeImageURL, tags });
		this.props.modalImage({ largeImageURL, tags });
		this.props.toggleModal();
	};


	render() {
		const { isLoad, items, page, showButton, total } = this.state;
		const checkTotal = page * 12 < total;
		console.log(checkTotal);
		return (
			<div>
				<Loader
					isLoad={isLoad}
				/>
				{items && (
					<Gallery>
						{items.map(({ id, webformatURL, tags, largeImageURL }) => (
							<ImageGalleryItem
								key={id}
								webformatURL={webformatURL}
								tags={tags}
								largeImageURL={largeImageURL}
								onClickImage={this.onClickImage}
							/>
						))}

					</Gallery>
				)}

	
				{
					 
					showButton && checkTotal && (!items || items.length !== 0) && (
						<Button page={page} onClickButton={this.onClick} />
						)
					
				}
			</div>

		);
	}
};
export default ImageGallery;


ImageGallery.propTypes = {
	page: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
	modalImage: PropTypes.func.isRequired,
};