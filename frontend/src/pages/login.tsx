import LoginBody from "@/components/template/auth/LoginBody";
import styled from "@emotion/styled";

const Div = styled.div`
  padding-top: 25vh;
  padding-left: 5vw;
`;

export default function Login() {
  return (
    <Div>
      <LoginBody />
    </Div>
  );
}
