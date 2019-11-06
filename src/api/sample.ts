import axios from 'axios';

export const fetchSample = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => resp)
    .catch(err => err);

export const fetchSample2 = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos/2')
    .then(resp => resp)
    .catch(err => err);
