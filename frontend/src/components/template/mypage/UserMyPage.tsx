import UserCreatedQuizForm from "@/components/organisms/mypage/\bUserCreatedQuizForm";
import PersonalQuizForm from "@/components/organisms/mypage/PersonalQuizForm";
import UserInfoForm from "@/components/organisms/mypage/UserInfoForm";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  width: 26vw;
  height: 85vh;
  min-width: 250px;
  min-height: 450px;
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // backgound-color: blue;
  width: 70vw;
  min-width: 450px;
  min-height: 250px;
`;

export default function UserMyPage() {
  return (
    <Container>
      <UserContainer>
        <UserInfoForm />
      </UserContainer>
      <QuizContainer>
        <PersonalQuizForm />
        <UserCreatedQuizForm />
      </QuizContainer>
    </Container>
  );
}
