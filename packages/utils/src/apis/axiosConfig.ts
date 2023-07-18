import axios from 'axios';

export const BASE_URL = 'https://www.ceos-sinchon.com';

export interface ResponseInterface<T> {
  status: number;
  message: string;
  data: T;
}

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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk2MDQ0ODcsImV4cCI6MTY4OTY5MDg4N30.XL2kKjnhB38PNyrGcwWQlwTpRIJ20KW_y3XdJ8kymQzD3rv-5urokyXZP5uHytcq7C_cbRiiuL2d__yYY6CQQw';
