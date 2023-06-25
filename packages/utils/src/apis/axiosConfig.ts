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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE2ODc2ODE5MjIsImV4cCI6MTY4NzcwMzUyMn0.iKQJ7VNV1h4uJ3I7FfXS-Tu2kRPGq2Lj6OO7ttjO0J8LUbvc6R0zqfaEzqRENQ2CZJIrmuSIp4p2RL22DHEGNg';

// adminInstance 인터럽트 로직 추가 필요
