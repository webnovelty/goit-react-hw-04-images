import Button from "components/Button";
import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as API from '../../services/api';
import Loader from '../Loader';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = (props) => {
	const [items, setItems] = useState(null);
	const [page, setPage] = useState(1);
	const [isLoad, setIsLoad] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const [total, setTotal] = useState(0);


	useEffect(() => {
		const options = {
			position: 'top-right',
			autoClose: 3000,
		};
		async function fetchData() {
			if (!props.name) {
				return;
			}

			setIsLoad(true);
			try {

				const images = await API.getData(props.name, page);

					setItems(item => [...item, ...images.hits]);
					setTotal(images.totalHits);
					setShowButton(true);
				
			} catch {
				toast.error(
					'Oops, something went wrong. Repeat one more time!',
					options
				);
			} finally {
				setIsLoad(false);
			}
		}
		fetchData();

	}, [props.name, page]);

	useEffect(() => {
		setItems([]);
		setPage(1);
	}, [props.name]);


	const onClick = () => {
		setPage(prevState => prevState + 1);
	};


	const onClickImage = ({ largeImageURL, tags }) => {
		props.modalImage({ largeImageURL, tags });
		props.toggleModal();
	};

	const checkTotal = page * 12 < total;
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
							onClickImage={onClickImage}
						/>
					))}

				</Gallery>
			)}


			{

				showButton && checkTotal && (!items || items.length !== 0) && (
					<Button page={page} onClickButton={onClick} />
				)

			}
		</div>

	);
};

export default ImageGallery;


ImageGallery.propTypes = {
	page: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
	modalImage: PropTypes.func.isRequired,
};