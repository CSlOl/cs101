import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const [accessToken, setToken]: any = useState("");

useEffect(() => {
  setToken(localStorage.getItem("accessToken"));
}, []);

// 요청 전 처리
const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default api;
