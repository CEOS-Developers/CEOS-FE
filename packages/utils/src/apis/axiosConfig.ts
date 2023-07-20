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

// adminInstance 인터럽트 로직 추가 필요
adminInstance.defaults.headers.common['Authorization'] =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk4NDU2NjMsImV4cCI6MTY4OTkzMjA2M30.yfWxLx4NfNpgHnapMZoAfGr29vbhDfarrkZ-3S7giGDjCGsAnyVoT9fvhK3diBKa6mryVzsJm30xdjdvGU6LSA';
