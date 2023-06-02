import axios from 'axios';

export const fetchCSRBoardData = async () => {
  const response = await axios(`${import.meta.env.VITE_API_HOST}/api/user/cube/csr`, {
    headers: {
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem('user') as string).access_token,
    },
  });
  if (!response) {
    throw false;
  }
  return await response.data.data;
};
