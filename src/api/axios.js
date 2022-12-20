import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://virtual-cards-api.onrender.com'
})

export const getCardsPage = async (pageParam = 4, options = {}) => {
  const response = await api.get(`/api/cards?pageSize=${pageParam}page=1`, options)
  return response.data
}
