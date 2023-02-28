import styled from "@emotion/styled";
import SignUpBody from "@/components/template/auth/SignUpBody";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SignUp() {
  return (
    <Div>
      <SignUpBody />
    </Div>
  );
}
