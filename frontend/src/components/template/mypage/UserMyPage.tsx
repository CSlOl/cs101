import UserCreatedQuizForm from "@/components/organisms/mypage/\bUserCreatedQuizForm";
import PersonalQuizForm from "@/components/organisms/mypage/PersonalQuizForm";
import UserInfoForm from "@/components/organisms/mypage/UserInfoForm";
import styled from "@emotion/styled";

export default function UserMyPage() {
  return (
    <>
      <UserInfoForm />
      <PersonalQuizForm />
      <UserCreatedQuizForm />
    </>
  );
}
