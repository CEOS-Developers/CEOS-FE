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

adminInstance.defaults.headers.common['Authorization'] =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE2ODc2OTAzOTYsImV4cCI6MTY4NzcxMTk5Nn0.0-HHzWxQeUbOxEJpbevMaOlBWwU4pE4Ue7kEQye8iTocKNTSefAWlUkSwU1yy2Sa7-Cck8h2fc15pgZqOrH9Gw';

// adminInstance 인터럽트 로직 추가 필요
