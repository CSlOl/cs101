import ProfileImage from "@/components/atoms/etc/ProfileImage";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  padding: 20px;
  width: 25%;
  height: 85vh;
  min-width: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
`;

const UserInfoDiv = styled.div`
  positon: relative;
  text-align: center;
  color: white;
  font: 10px;

  .toProfileEdit {
    text-decoration: underline;
  }
`;

export default function UserInfoForm() {
  const [probNum, setProbNum] = useState<number>(1234);

  return (
    <Container>
      <ProfileImage />
      <UserInfoDiv>
        <Link href="/editprofile">
          <div className="toProfileEdit">회원정보수정</div>
        </Link>
        <br />
        <div>
          <p>해결한 문제 수: {probNum}개</p>
          <p>내가 만든 문제 수: {probNum}개</p>
        </div>
      </UserInfoDiv>
    </Container>
  );
}
