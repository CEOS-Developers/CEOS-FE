import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ceosInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});
