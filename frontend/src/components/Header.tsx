import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Title = styled.p`
  font-family: "Press Start 2P";
  color: #26bba0;
  font-size: 2em;
  margin-left: 10px;
`;

const Move = styled.div`
  display: flex;
  margin-right: 20px;
  color: white;

  p {
    cursor: default;
  }
`;

const Text = styled.div`
  font-family: "Press Start 2P";
  font-size: 1em;
`;

export default function Header() {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  function logout() {
    axios.get(`${baseURL}/api/auth/logout`).then((res) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        localStorage.clear();
        setLogin(false);
        router.push("/");
      } else if (res.data.statusCode === 500) {
        swal("로그아웃에 실패하였습니다.", {
          icon: "error",
        });
      }
    });
  }

  return (
    <Div>
      <Link href="/">
        <Logo>
          <Image src="/circle_basic.png" alt="circle_basic" width={50} height={48} />
          <Title>CS101</Title>
        </Logo>
      </Link>

      {login ? (
        <Move>
          <Link href="/mypage">
            <Text>my page</Text>
          </Link>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <Text onClick={logout}>logout</Text>
        </Move>
      ) : (
        <Move>
          <Link href="/login">
            <Text>login</Text>
          </Link>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <Link href="/signup">
            <Text>signup</Text>
          </Link>
        </Move>
      )}
    </Div>
  );
}
