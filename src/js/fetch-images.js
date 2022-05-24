import axios from 'axios';

export default async function fetchImages(value, page) {

   const url = 'https://pixabay.com/api/';
   
   const perPage = '40';
   
   const key = '27545952-886edf6444d41f28a84ae17ec';
   
   const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;
   
   return await axios.get(`${url}${filter}`).then(response => response.data);
   
   }
   