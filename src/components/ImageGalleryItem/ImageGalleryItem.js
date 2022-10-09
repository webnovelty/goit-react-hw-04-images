import { Img, Card } from './ImageGalleryItem.styled';



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