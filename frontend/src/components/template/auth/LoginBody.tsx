import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import AuthInput from "@/components/atoms/inputs/AuthInput";
import MediumButton from "@/components/atoms/buttons/MediumButton";
import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import swal from "sweetalert";

interface StatusMessages {
  [statusCode: number]: string;
}

export default function LoginBody() {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [data, setData] = useState({ email: "", password: "" });
  const [alertText, setAlertText] = useState(""); // alert에 표시할 텍스트
  const [error, setError] = useState(false);

  function emailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function pwChange(e: ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
  }

  // 입력값 변경 시 제출 데이터값 바로 변경
  useEffect(() => {
    setData({ email: email, password: pw });
  }, [email, pw]);

  const statusMessages: StatusMessages = {
    401: "아이디 혹은 비밀번호가 잘못되었습니다.",
    403: "회원 정보가 존재하지 않습니다.",
    404: "회원 정보가 존재하지 않습니다.",
    500: "로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.",
  };

  function submit() {
    if (email == "") {
      setAlertText("이메일을 입력해주세요.");
      setError(true);
    } else if (pw == "") {
      setAlertText("비밀번호를 입력해주세요");
      setError(true);
    } else {
      axios
        .post(`${baseURL}/api/auth/login`, data)
        .then((res) => {
          const statusCode: number = res.data.statusCode;
          if (res.data.statusCode === 200) {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            router.push("/");
          } else {
            setAlertText(statusMessages[statusCode] || "알 수 없는 오류가 발생했습니다.");
            setError(true);
          }
        })
        .catch(() => {
          swal("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", {
            icon: "error",
          });
        });
    }
  }

  return (
    <Div>
      <Title>LOGIN</Title>
      {error && <Warn severity="error">{alertText}</Warn>}
      <AuthInput placeholder="enter email" type="text" onChange={emailChange} />
      <AuthInput placeholder="enter password" type="password" onChange={pwChange} />
      <MediumButton label="START" onClick={submit} />
      <Text>
        <Link href="/signup">
          <p className="font">signup</p>
        </Link>
        <p>&nbsp;|&nbsp;</p>
        <Link href="/findpw">
          <p>forgot password?</p>
        </Link>
      </Text>

      {/* <Image
        className="purple"
        src="/circle_purple.png"
        alt="circle_purple"
        width={100}
        height={95}
      />
      <Image className="green" src="/circle_basic.png" alt="circle_basic" width={100} height={95} /> */}
    </Div>
  );
}

const move = keyframes`
  // 360도 회전시키기
  0%, 20%, 40%, 60%, 80% {
    transform: rotate(0deg)
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(360deg)
  }

  // 배경에서 움직이기
  from {
    margin-left: -100%;
    margin-top: -50%;
  }
  10% {
    margin-left: 100%;
    margin-top: 0%;
  }
  20%{
    margin-left: 0%;
    margin-top: 44%;
  }
  30%{
    margin-left: 50%;
    margin-top: -50%;
  }
  40%{
    margin-left: -50%;
    margin-top: 44%;
  }
  50% {
    margin-left: 50%;
    margin-top: -50%;
  }
  60%{
    margin-left: -100%;
    margin-top: 0%;
  }
  70%{
    margin-left: 100%;
    margin-top: 44%;
  }
  80% {
    margin-left: -100%;
    margin-top: -50%;  
  }
  90%{
    margin-left: 100%;
    margin-top: 44%;
  }
  to {
    margin-left: -100%;
    margin-top: -50%;
  }
`;

const Div = styled.div`
  width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // .green {
  //   position: absolute;
  //   animation: ${move} linear 50s infinite;
  // }

  // .purple {
  //   position: absolute;
  //   animation: ${move} linear 30s infinite;
  // }
`;

const Title = styled.p`
  font-family: "Press Start 2P";
  color: #26bba0;
  font-size: 6rem;
`;

const Text = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 1em;
  letter-spacing: 3px;

  p {
    color: #26bba0;
    font-family: "Press Start 2P";
  }
`;

const Warn = styled(Alert)`
  background-color: #eb3636;
  width: 31rem;
  margin: 20px 0 10px 0;
  border-radius: 0;
  height: 40px;
  z-index: 100;
  text-align: center;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
`;
