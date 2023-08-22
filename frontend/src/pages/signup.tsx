import styled from "@emotion/styled";
import Stars from "@/components/template/Stars";
import SignUpBody from "@/components/template/auth/SignUpBody";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SignUp() {
  return (
    <Div>
      <Stars />
      <SignUpBody />
    </Div>
  );
}
