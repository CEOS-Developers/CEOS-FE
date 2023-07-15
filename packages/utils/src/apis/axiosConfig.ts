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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE2ODgzMDg0NTUsImV4cCI6MTY4ODMzMDA1NX0.3wI8nrkgLgf0uP52kwan0iK-z-KoltayOyeDNEdBHR6F8pjT-zgXlu9OgWAHCUyj3o8ztr6PKECJCwbLYiktqQ';
