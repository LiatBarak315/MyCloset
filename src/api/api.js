import axios from 'axios';

const client = axios.create({
  baseURL: 'https://61d18f8cda87830017e59289.mockapi.io',
});

export const getAllItems = async () => {
  const res = await client.get('/user');
  return await res.data;
};

export const deleteItemFromServer = async (id) => {
  const res = await client.delete(`/user/${id}`);
  return res.data;
};

export const updateItem = async (id, data) => {
  const res = await client.put(`/user/${id}`, data);
  return res.data;
};

export const addNewItem = async (data) => {
  const res = await client.post('/user', data);
  return res;
};
