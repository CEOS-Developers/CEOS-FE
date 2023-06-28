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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE2ODc5NzQ4MTksImV4cCI6MTY4Nzk5NjQxOX0.k8uy1_q8dMqUAzSsXT_CHJDVIsGhR9erCV39LhNwsGbAd9vJ0nHkiaPs6vwx_kuRzn3K4CjSnVhu9tTLDhKGtA';

// adminInstance 인터럽트 로직 추가 필요
