import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  timeout: 8000,
  headers: {
    Accept: '*',
  },
});

const responseInterceptor = (response: AxiosResponse) => {
  if (response.data.isSuccess === false) {
    const err = new Error('Запрос завершился неуспешно: isSuccess = false')
    alert(response.data)
    return Promise.reject(err);
  }
  return response.data;
}

const responseErrorInterceptor = (error: typeof Error) => Promise.reject(error)

instance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
  
);

export default instance