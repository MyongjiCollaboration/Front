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
    if (window.location.pathname === '/') {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

// 요청 인터셉터에서 AccessToken 쿠키 추가
Axios.interceptors.request.use(
  (config) => {
    const AccessToken = document.cookie // 쿠키에서 AccessToken을 가져옴
      .split('; ')
      .find((row) => row.startsWith('AccessToken=')); // AccessToken으로 시작하는 쿠키 찾기

    // 쿠키가 존재할 경우에만 accessToken을 추출하고, Authorization 헤더에 추가
    if (AccessToken) {
      const AccessToken = AccessToken.split('=')[1];
      if (AccessToken) {
        config.headers['Authorization'] = `Bearer ${AccessToken}`; // accessToken을 Authorization 헤더에 추가
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
