import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

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
  return (
    <Div>
      <Link href="/">
        <Logo>
          <Image
            src="/circle_basic.png"
            alt="circle_basic"
            width={50}
            height={48}
          />
          <Title>CS101</Title>
        </Logo>
      </Link>

      <Move>
        <Link href="/login">
          <Text>login</Text>
        </Link>
        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <Link href="/signup">
          <Text>signup</Text>
        </Link>
      </Move>
    </Div>
  );
}
