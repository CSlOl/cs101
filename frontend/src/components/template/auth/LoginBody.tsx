import AuthInput from "@/components/atoms/inputs/AuthInput";
import MediumButton from "@/components/atoms/buttons/MediumButton";
import Link from "next/link";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 650px;
  text-align: center;
`;

const Title = styled.p`
  font-family: "Press Start 2P";
  color: #26bba0;
  font-size: 7rem;
`;

const Text = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-family: "Press Start 2P";
  font-size: 1.2em;
  letter-spacing: 5px;
  color: #26bba0;
`;

export default function LoginBody() {
  return (
    <Div>
      <Title>LOGIN</Title>
      <AuthInput placeholder="enter email" />
      <AuthInput placeholder="enter password" />
      <MediumButton label="START" />
      <Text>
        <Link href="/signup">
          <div>signup</div>
        </Link>
        <p>&nbsp;|&nbsp;</p>
        <Link href="/findpw">
          <div>forgot password?</div>
        </Link>
      </Text>
    </Div>
  );
}
