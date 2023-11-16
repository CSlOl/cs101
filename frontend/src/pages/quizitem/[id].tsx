import QuizItemBody from "@/components/template/quizitem/QuizItemBody";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function QuizItem() {
  return (
    <div>
      <Header />
      {/* 개별 문제 조회 */}
      <Container>
        <QuizItemBody />
      </Container>
    </div>
  );
}
