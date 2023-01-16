import axios from 'axios';

const searchImages = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID 1ct-U0WeVlj-IdlnleGhh8ktq8Xg1X4H2krd-KvAFmY',
		},
		params: {
			query: term,
		},
  });
  
  return response.data.results;
};

export default searchImages;
