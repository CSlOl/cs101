import axios, { AxiosInstance, AxiosResponse } from "axios";
import swal from "sweetalert";
// import { useRouter } from "next/router";


const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const router = useRouter();

const api: AxiosInstance = axios.create({
  baseURL,
});


api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // localStorage에 accessToken 있는 경우 헤더에 추가
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      swal("다시 로그인해주세요.", {
        icon: "error",
      });
      // router.push("/");
    }

    return config;
  }
)

// 만료 등 설정 확인 후 response 추가할 것
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // Modify response data if needed
//     return response;
//   },
//   (error) => {
//     // Handle errors globally (e.g., show notifications)
//     return Promise.reject(error);
//   }
// );


export default api;
