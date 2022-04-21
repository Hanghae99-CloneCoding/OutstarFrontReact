import axios from "axios";

// const TOKEN = localStorage.getItem("token");

const api = axios.create({
  // 기본 서버주소
  baseURL: "http://3.38.116.203/",
});

// api.interceptors.request.use(function (config) {
//   const accessToken = localStorage.getItem("token");
//   config.headers.Authorization = `${accessToken}`;
//   return config;
// });

export const apis = {
  // 회원가입 요청
  signUp: (userInfo) => api.post("user/signup", userInfo),
  // 로그인
  login: (data) =>
    api.post("user/login", {
      username: data.username,
      password: data.password,
    }),
  // 로그인 체크
};

export default api;
