import styled from "@emotion/styled";
import AuthInput from "@/components/atoms/inputs/AuthInput";
import MediumButton from "@/components/atoms/buttons/MediumButton";

export default function SignUpBody() {
  return (
    <div>
      <AuthInput placeholder="email" />
      <AuthInput placeholder="password" />
      <AuthInput placeholder="confirm password" />
      <AuthInput placeholder="nickname" />
      <MediumButton label="PRESS START" />
    </div>
  );
}
