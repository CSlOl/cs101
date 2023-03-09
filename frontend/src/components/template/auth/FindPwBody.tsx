import MediumButton from "@/components/atoms/buttons/MediumButton";
import AuthInput from "@/components/atoms/inputs/AuthInput";
import styled from "@emotion/styled";
import Image from "next/image";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FindPwBody() {
  return (
    <Div>
      <Image
        style={{ margin: "30px" }}
        src="/circle_basic.png"
        alt="circle_basic"
        width={250}
        height={225}
      />
      <AuthInput placeholder="enter email address" />
      <MediumButton label="SEND CODE" />
      <AuthInput placeholder="enter verification code" />
      <MediumButton label="RE-START" />
    </Div>
  );
}
