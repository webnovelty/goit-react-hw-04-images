import ImageGalleryItem from "components/ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';


const ImageGallery = ({ items }) => {

	return (
		<Gallery>
			
			{items.map(item => (
				
				< ImageGalleryItem key={item.id} webformatURL={item.webformatURL} tags={item.tags } />	
			))}
			
		</Gallery>


);
};
export default ImageGallery;





// const { items } = this.state;
// console.log(items);
// return (
// 	<>
// 		{items && (
// 			<li>
// 				{items.map(({ id, webformatURL, tags }) => (
// 					<ImageGalleryItem
// 						key={id}
// 						webformatURL={webformatURL}
// 						tags={tags}
// 					/>
// 				))}
// 			</li>
// 		)}
// 	</>
// );

// state = {
	// 	items: null,
	// 	page: 1,
	// 	perPage: 12,
	// 	isLoading: false,
	// 	largeImageURL: '',
	// 	tags: '',
	// 	showButton: false,
	// };

// 	async componentDidUpdate(prevProps, prevState) {
// 		try {
// const images = await API.getData();
// 				this.setState(state =>
// 					state.items
// 						? {
// 							items: [...state.items, ...images],
// 						}
// 						: { items: images }
// 				);
// 			} catch {
// 				toast.error('Oops, something went wrong. Repeat one more time!');
// 			} finally {
// 				this.setState({ isLoading: false });
// 			}
// 	};