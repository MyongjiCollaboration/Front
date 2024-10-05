import axios from 'axios';

// Axios 인스턴스 생성
export const Axios = axios.create({
  baseURL: 'http://3.39.195.75:8080',
  withCredentials: true, // 서버가 쿠키를 보내도록 설정
});

// 응답 인터셉터 설정
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (window.location.pathname === '/login') {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

// 요청 인터셉터에서 쿠키 추가
Axios.interceptors.request.use(
  (config) => {
    const token = document.cookie // 또는 localStorage에서 쿠키나 토큰을 가져옴
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 토큰이 있을 경우 헤더에 추가
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
