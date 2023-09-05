import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "140a89deddmsh056ea9cae164d63p1ea2a8jsne479cb6f3563",
    },
  });
    
  return data;
}