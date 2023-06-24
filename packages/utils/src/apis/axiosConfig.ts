import axios from 'axios';

export const BASE_URL = 'https://www.ceos-sinchon.com';

export const ceosInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

// adminInstance 인터럽트 로직 추가 필요
