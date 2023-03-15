import QuestionBox from "@/components/atoms/boxes/QuestionBox";
import RightAnswerBox from "@/components/atoms/boxes/RightAnswerBox";
import WrongAnswerBox from "@/components/atoms/boxes/WrongAnswerBox";
import AnswerInput from "@/components/atoms/inputs/AnswerInput";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: blue;
`;
export default function ReadShortAnswer() {
  return (
    <Container>
      주관식 조회
      <QuestionBox />
      <AnswerInput />
      <RightAnswerBox />
      <WrongAnswerBox />
    </Container>
  );
}
