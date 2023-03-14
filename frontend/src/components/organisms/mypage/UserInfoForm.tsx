import ProfileImage from "@/components/atoms/etc/ProfileImage";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  min-height: 400px;

  @media (max-width: 992px) {
    flex-direction: row;
    height: 50%;
    min-height: 250px;
  }
`;

const UserInfoDiv = styled.div`
  display: relative;
  text-align: center;
  color: white;
  font: 10px;

  .toProfileEdit {
    text-decoration: underline;
    font-size: 0.9em;
  }

  p {
    font-size: 0.9em;
  }
`;

const ProfileInfoDiv = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 70px;

  @media (max-width: 992px) {
    margin-top: 0px;
    margin-bottom: 2.5em;
  }

  .nickName {
    font-size: 30px;
  }

  .email {
    font-size: 14px;
  }
`;

export default function UserInfoForm() {
  const [probNum, setProbNum] = useState<number>(1234);
  const [nickName, setNickName] = useState<string>("zl존규민");
  const [email, setEmail] = useState<string>("gyumin.q.lee@gmail.com");

  return (
    <Container>
      <ProfileImage />
      <UserInfoDiv>
        <ProfileInfoDiv>
          <div className="nickName">{nickName}</div>
          <div className="email">{email}</div>
        </ProfileInfoDiv>
        <Link href="/editprofile">
          <div className="toProfileEdit">회원정보수정</div>
        </Link>
        <div>
          <p>해결한 문제 수: {probNum}개</p>
          <p>내가 만든 문제 수: {probNum}개</p>
        </div>
      </UserInfoDiv>
    </Container>
  );
}
