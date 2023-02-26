import AuthInput from "@/components/atoms/inputs/AuthInput";
import MediumButton from "@/components/atoms/buttons/MediumButton";
import Link from "next/link";

export default function LoginBody() {
  return (
    <div>
      <div>LOGIN</div>
      <AuthInput placeholder="enter email" />
      <AuthInput placeholder="enter password" />
      <MediumButton label="START" />
      <div>
        <Link href="/signup">
          <div>signup</div>
        </Link>
        <p>|</p>
        <Link href="/findpw">
          <div>forgot password?</div>
        </Link>
      </div>
    </div>
  );
}
