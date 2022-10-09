import { Img, Card } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClickImage }) => {
	return (
		<Card>
			<Img
				src={webformatURL}
				alt={tags}
				
				onClick={() => onClickImage({ largeImageURL, tags })} />
		</Card>
	);

};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
	webformatURL: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired,
	onClickImage: PropTypes.func.isRequired,
};