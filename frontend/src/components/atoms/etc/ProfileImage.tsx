import styled from "@emotion/styled";
import { useState } from "react";
import circle_basic from "public/circle_basic.png";
import Image from "next/image";

const ProfileImageDiv = styled.div`
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30%;
  overflow: hidden;

  .defaultUserProfile {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const ProfileInfoDiv = styled.div`
  text-align: center;
  color: white;

  .nickName {
    font-size: 30px;
  }

  .email {
    font-size: 14px;
  }
`;

export default function ProfileImage() {
  const [nickName, setNickName] = useState<String>("zl존규민");
  const [email, setEmail] = useState<String>("gyumin.q.lee@gmail.com");

  return (
    <>
      <ProfileImageDiv>
        <Image
          className="defaultUserProfile"
          alt="defaultUserProfile"
          src={circle_basic}
        />
      </ProfileImageDiv>
      <input type="file" accept="image/*" />
      <ProfileInfoDiv>
        <div className="nickName">{nickName}</div>
        <div className="email">{email}</div>
      </ProfileInfoDiv>
    </>
  );
}
