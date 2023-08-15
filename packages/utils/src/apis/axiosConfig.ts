import axios from 'axios';

const config = require('../../../../config.json');

export const BASE_URL = config.NEXT_PUBLIC_API_URL;

export const ceosInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});
