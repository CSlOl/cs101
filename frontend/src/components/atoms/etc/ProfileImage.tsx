import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

import circle_basic from "public/circle_basic.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 992px) {
    flex-direction: row;
  }

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

const ProfileImageDiv = styled.div``;

export default function ProfileImage() {
  const fileInputRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

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
    </Container>
  );
}
