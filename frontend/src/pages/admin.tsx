import api from "@/interceptor";
import { useEffect } from "react";

export default function Admin() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    api
      .get(`${baseURL}/api/problem/pending`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div>admin</div>
    </>
  );
}
