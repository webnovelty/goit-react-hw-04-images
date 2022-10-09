import axios from "axios";
export const getData = async (name, page) => {


		const API_KEY = '29423461-4e3d90720090e0459606a8674';
		const url = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
	
		const response = await axios.get(url);
		const data = await response.data;
	
		return data;
	

};