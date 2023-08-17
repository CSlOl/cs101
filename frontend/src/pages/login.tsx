import LoginBody from "@/components/template/auth/LoginBody";
import styled from "@emotion/styled";
import Stars from "@/components/template/Stars";

const Div = styled.div`
  padding-top: 25vh;
  padding-left: 5vw;
`;

export default function Login() {
  return (
    <Div>
      <Stars />
      <LoginBody />
    </Div>
  );
}
