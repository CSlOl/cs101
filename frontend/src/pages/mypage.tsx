import AdminMyPage from "@/components/template/mypage/AdminMyPage";
import UserMyPage from "@/components/template/mypage/UserMyPage";
import { useState } from "react";
import Header from "../components/Header";

export default function MyPage() {
  const [admin, setAdmin] = useState<boolean>(true); // true 면 admin 페이지

  return (
    <>
      <Header />
      {admin ? <AdminMyPage /> : <UserMyPage />}
    </>
  );
}
