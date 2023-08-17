import FindPwBody from "@/components/template/auth/FindPwBody";
import styled from "@emotion/styled";
import Stars from "@/components/template/Stars";

const Div = styled.div`
  padding-top: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FindPw() {
  return (
    <Div>
      <Stars />
      <FindPwBody />
    </Div>
  );
}
