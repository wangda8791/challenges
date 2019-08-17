import axios from 'axios';

export const getBookList = () => { return axios.get(`/api/books`); };
export const getBookInfo = (slug) => { return axios.get(`/api/books/${slug}`); };
