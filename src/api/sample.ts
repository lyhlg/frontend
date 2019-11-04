import axios from 'axios';

export const fetchSample = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => {
      console.log('resp', resp);
      return resp;
    })
    .catch(err => {
      console.log(err);
      return err;
    });

export const fetchSample2 = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(resp => {
      console.log('resp', resp);
      return resp;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
