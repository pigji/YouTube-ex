import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '48'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

//전달받은 인자(url)를 가지고 api키와 URL파라미터를 조립해서 함수를 호출한 곳으로 반환
export const fetchFromAPI = async (url) => {
	const {data} = await axios.get(`${BASE_URL}/${url}`, options);
	console.log(data);
  return data;
}