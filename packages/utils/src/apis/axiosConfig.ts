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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE2ODc3MDk5NTAsImV4cCI6MTY4NzczMTU1MH0.5zMvRYQdUgzWOJk6HAou9XN1qcX1WB8uggrE6k9IW4gjI-eMxGEiyvOb4nsqcacYschA2R1lq7Ooy7uPI7pM7Q';

// adminInstance 인터럽트 로직 추가 필요
