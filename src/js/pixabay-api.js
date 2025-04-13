import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48238539-5c4f953a21d3e608577efa510';

export async function getImagesByQuery(query, page = 1) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.status || error.message);
  }
}
