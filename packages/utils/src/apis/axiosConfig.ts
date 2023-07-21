import axios from 'axios';

export const BASE_URL = 'https://www.ceos-sinchon.com';

export const ceosInstance = axios.create({
  baseURL: BASE_URL,
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});

adminInstance.defaults.headers.common['Authorization'] =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk5NTc5MDcsImV4cCI6MTY5MDA0NDMwN30.UGDqrmhyCA7WVM47ZFQ9eqHSddqg4lCtojiGiNQhcvIM9zg3zqxyQZyJPyPMmQY0aJJwQoSdGZlUzH6169nSRw';
