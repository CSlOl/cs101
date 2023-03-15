import QuestionBox from "@/components/atoms/boxes/QuestionBox";
import RightAnswerBox from "@/components/atoms/boxes/RightAnswerBox";
import WrongAnswerBox from "@/components/atoms/boxes/WrongAnswerBox";
import AnswerInput from "@/components/atoms/inputs/AnswerInput";
import nameState from "@/recoil/store";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: blue;
`;
export default function ReadShortAnswer() {
  const [question, setQuestion] = useRecoilState(nameState); // quiz 정보 받아오는 state으로 나중에 교체
  const [answer, setAnswer] = useState<string>("1"); // 없애면 인풋
  const [right, setRight] = useState<boolean>(true); // true면 맞음, false면 틀림

  return (
    <Container>
      {/* 주관식 조회 */}
      <QuestionBox question={question} />
      {!answer ? (
        <AnswerInput />
      ) : answer && right ? (
        <RightAnswerBox />
      ) : (
        <WrongAnswerBox />
      )}
    </Container>
  );
}
