// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, minPrice = 0, maxPrice = 10000, limit = 10) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/companies/${company}/categories/${category}/products`,
      {
        params: {
          minPrice,
          maxPrice,
          limit,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
