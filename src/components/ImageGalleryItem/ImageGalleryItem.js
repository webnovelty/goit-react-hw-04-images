import { Img, Card } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, tags }) => {
	return (
		<Card>
			<Img src={webformatURL} alt={tags} />
		</Card>
	);

};

export default ImageGalleryItem;


// return (
// 	<ul>
// 		{items.map(item => (
// 			<ImageGallery key={id} webformatURL={item.webformatURL} largeImageURL={item.largeImageURL} />
// 		))}
// 	</ul>


// );