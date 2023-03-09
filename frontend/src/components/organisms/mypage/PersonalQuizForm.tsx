import styled from "@emotion/styled";

const Container = styled.div`
  height: 49%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export default function PersonalQuizForm() {
  return (
    <Container>
      <div>내가 푼 문제</div>
    </Container>
  );
}
