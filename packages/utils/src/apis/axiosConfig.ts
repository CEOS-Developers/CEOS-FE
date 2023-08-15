import axios from 'axios';

export const BASE_URL = 'https://dev.ceos-sinchon.com';

export const ceosInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});
