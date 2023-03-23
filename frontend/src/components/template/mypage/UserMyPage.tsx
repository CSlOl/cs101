import UserCreatedQuizForm from "@/components/organisms/mypage/UserCreatedQuizForm";
import PersonalQuizForm from "@/components/organisms/mypage/PersonalQuizForm";
import UserInfoForm from "@/components/organisms/mypage/UserInfoForm";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;

  // 반응형: 992px 보다 크면
  @media (min-width: 992px) {
    height: 84vh;
  }

  // 반응형: 992px 보다 작으면
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const UserContainer = styled.div`
  display: flex;
  width: 26vw;
  min-width: 250px;

  @media (max-width: 992px) {
    justify-content: center;
    width: 95vw;
    min-width: 576px;
    margin-bottom: 10px;
  }
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70vw;
  min-width: 450px;
  min-height: 250px;
  margin-left: 10px;
  height: 105%;

  @media (max-width: 992px) {
    justify-content: center;
    width: 95vw;
    min-width: 576px;
    margin-left: 0;
  }
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
