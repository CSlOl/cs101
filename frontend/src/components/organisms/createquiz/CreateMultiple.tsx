import Multiple from "@/components/atoms/etc/Multiple";
import LargeInput from "@/components/atoms/inputs/LargeInput";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import multipleAnswerState from "@/recoil/multipleanswer";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

const Container = styled.div`
  font-family: "DungGeunMo";
  font-size: 1.5em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  white-space: nowrap;
  width: 75px;
  text-align: right;
  padding-right: 23px;
  padding-top: 10px;
`;

/**
 * 문제 등록 - 객관식
 * @returns
 */
export default function CreateMultiple() {
  const [answer, setAnswer] = useRecoilState(multipleAnswerState);
  const handleAnswer = (e: any) => {
    setAnswer(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Title>제목</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>문제</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>1</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>2</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>3</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>4</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>정답&nbsp;</Title>
        <Multiple num={1} func={handleAnswer} />
        <Multiple num={2} func={handleAnswer} />
        <Multiple num={3} func={handleAnswer} />
        <Multiple num={4} func={handleAnswer} />
      </Row>
      <Row>
        <Title>해설</Title>
        <LargeInput />
      </Row>
    </Container>
  );
}
