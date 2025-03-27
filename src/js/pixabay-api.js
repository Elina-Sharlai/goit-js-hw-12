import axios from 'axios';

const API_KEY = '49463022-6605d945f5c005b9dcffc2690';

export async function fetchImages(query, page = 1, perPage = 15) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: perPage,
        page,
    };

    try {
        const response = await axios.get(`https://pixabay.com/api/?`, { params });
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}