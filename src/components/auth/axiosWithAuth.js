import axios from 'axios';
//TODO: build back end to get tokens from storage.
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    baseURL: 'backend . com to be determined'
  });
};
