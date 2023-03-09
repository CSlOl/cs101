import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

import circle_basic from "public/circle_basic.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .input {
    display: none;
  }

  .button,
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: none;
    background: #fef289;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }
`;

const ProfileInfoDiv = styled.div`
  text-align: center;
  color: white;
  margin-top: 25px;

  .nickName {
    font-size: 30px;
  }

  .email {
    font-size: 14px;
  }
`;

const ProfileImageDiv = styled.div``;

export default function ProfileImage() {
  const fileInputRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [nickName, setNickName] = useState<string>("zl존규민");
  const [email, setEmail] = useState<string>("gyumin.q.lee@gmail.com");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <Container>
      <ProfileImageDiv>
        <form>
          {preview ? (
            <img className="image" src={preview} alt={"preview"} />
          ) : (
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }}
            >
              Add Image
            </button>
          )}

          <input
            className="input"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </form>
      </ProfileImageDiv>
      <ProfileInfoDiv>
        <div className="nickName">{nickName}</div>
        <div className="email">{email}</div>
      </ProfileInfoDiv>
    </Container>
  );
}
