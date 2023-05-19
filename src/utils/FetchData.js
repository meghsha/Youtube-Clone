import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '0993e2b7e1msh4346aa153853dbep16b8fdjsnf04c1efe0e2f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}