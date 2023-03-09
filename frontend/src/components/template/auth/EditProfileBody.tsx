import MediumButton from "@/components/atoms/buttons/MediumButton";
import AuthInput from "@/components/atoms/inputs/AuthInput";
import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function EditProfileBody() {
  return (
    <Div>
      <div>이미지 삽입 들어가야함</div>
      <AuthInput placeholder="nickname" />
      <MediumButton label="CONTINUE?" />
    </Div>
  );
}
