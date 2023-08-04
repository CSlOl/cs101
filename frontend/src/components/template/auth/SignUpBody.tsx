import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import styled from "@emotion/styled";
import AuthInput from "@/components/atoms/inputs/AuthInput";
import MediumButton from "@/components/atoms/buttons/MediumButton";
import Image from "next/image";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import swal from "sweetalert";

export default function SignUpBody() {
  const [email, setEmail] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [name, setName] = useState("");
  const [equal, setEqual] = useState(false); // 입력한 비밀번호 두개가 같은지 확인
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [alertText, setAlertText] = useState(""); // alert에 표시할 텍스트
  const [error, setError] = useState(false); // 문어 로고 바꾸기 위해 사용

  const router = useRouter();

  function emailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function pw1Change(e: ChangeEvent<HTMLInputElement>) {
    setPw1(e.target.value);
    setEqual(false);
  }

  function pw2Change(e: React.ChangeEvent<HTMLInputElement>) {
    setPw2(e.target.value);
    setEqual(false);
  }

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  // 입력값 변경 시 제출 데이터값 바로 변경 (pw1값 기준)
  useEffect(() => {
    setData({ email: email, password: pw1, name: name });
  }, [email, pw1, name]);

  useEffect(() => {
    if (pw1 != "" && pw2 != "" && pw1 === pw2) {
      setEqual(true);
    }
  });

  function checkEmail() {
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(email) == false) {
      setAlertText("이메일 형식이 올바르지 않습니다.");
      return false;
    } else {
      return true;
    }
  }

  // 비밀번호 유효성 체크
  function checkPW() {
    let num = pw1.search(/[0-9]/g);
    let eng = pw1.search(/[a-z]/gi);

    if (pw1.length < 8 || pw1.length > 12) {
      setAlertText("비밀번호는 8자리 ~ 12자리 이내로 입력해주세요.");
      return false;
    } else if (pw1.search(/\s/) != -1) {
      setAlertText("비밀번호는 공백 없이 입력해주세요.");
      return false;
    } else if (num < 0 || eng < 0) {
      setAlertText("비밀번호는 영문과 숫자를 혼합하여 입력해주세요.");
      return false;
    } else if (!equal) {
      setAlertText("비밀번호가 서로 일치하지 않습니다.");
    } else {
      return true;
    }
  }

  function checkName() {
    if (name === "") {
      setAlertText("닉네임을 입력해주세요.");
      return false;
    } else if (name.length > 8) {
      setAlertText("닉네임은 8자 이하로 입력해주세요.");
      return false;
    } else {
      return true;
    }
  }

  // axios 전송 함수
  function submit() {
    // alert(alertText);
    if (!checkEmail() || !checkPW() || !checkName()) {
      setError(true);
    } else {
      axios
        .post("http://3.37.123.84:8080/api/auth/signup", data)
        .then((res) => {
          console.log(res);
          if (res.data.statusCode === 201) {
            swal("회원가입이 완료되었습니다", {
              icon: "success",
            });
            router.push("/login");
          }

          if (res.data.statusCode === 403) {
            setError(true);
            setAlertText("이미 가입된 이메일입니다. 로그인하거나 비밀번호 찾기를 이용해주세요.");
          } else if (res.data.statusCode === 500) {
            setError(true);
            setAlertText("회원 가입에 실패했습니다. 잠시 후 다시 시도해주세요.");
          }
        })
        .catch(() => {
          // 예외 오류 발생 시 alert
          alert("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
    }
  }

  return (
    <Div>
      {error ? (
        // 에러 발생한 경우 문어 변경 + 에러 alert
        <>
          <Image
            style={{ margin: "50px 0 20px 0" }}
            src="/circle_red.png"
            alt="circle_red"
            width={180}
            height={160}
            priority
          />
          <Warn severity="error">{alertText}</Warn>
        </>
      ) : (
        <Image
          style={{ margin: "50px 0 20px 0" }}
          src="/circle_basic.png"
          alt="circle_basic"
          width={180}
          height={160}
          priority
        />
      )}

      <AuthInput type="text" placeholder="email" onChange={emailChange} />
      <InputContainer>
        <AuthInput type="password" placeholder="password" onChange={pw1Change} />
        <div className="tooltip">영문, 숫자 조합 8자 이상 12자 이하</div>
      </InputContainer>
      <AuthInput type="password" placeholder="confirm password" onChange={pw2Change} />
      <InputContainer>
        <AuthInput type="text" placeholder="nickname" onChange={nameChange} />
        <div className="tooltip">닉네임은 8자 이내로 작성해주세요</div>
      </InputContainer>
      <MediumButton onClick={submit} label="PRESS START" />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Warn = styled(Alert)`
  background-color: #eb3636;
  width: 31rem;
  margin-bottom: 10px;
  border-radius: 0;
  height: 40px;
  z-index: 100;
  text-align: center;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
`;

const InputContainer = styled.div`
  position: relative;

  .tooltip {
    display: none;
    position: absolute;
    z-index: 100;
    left: 15rem;
    background-color: #d894f0;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
  }

  &:hover .tooltip {
    display: block;
  }
`;
