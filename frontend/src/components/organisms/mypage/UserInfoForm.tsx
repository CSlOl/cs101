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

  @media (max-width: 768px) {
    flex-direction: row;
    height: 50%;
  }
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

const ProfileInfoDiv = styled.div`
  text-align: center;
  color: white;
  margin-top: 25px;
  @media (max-width: 768px) {
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
        <br />
        <div>
          <p>해결한 문제 수: {probNum}개</p>
          <p>내가 만든 문제 수: {probNum}개</p>
        </div>
      </UserInfoDiv>
    </Container>
  );
}
