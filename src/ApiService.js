import axios from 'axios';

const API_BASE_URL =
  'https://api.memegen.link/images/pool/halo/memes_everywhere.png'; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchSomeData = async () => {
  try {
    const response = await apiService.get('/someEndpoint');
    return response.data;
  } catch (error) {
    throw error;
  }
};
