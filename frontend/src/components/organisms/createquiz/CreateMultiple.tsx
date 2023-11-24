import Multiple from "@/components/atoms/etc/Multiple";
import LargeInput from "@/components/atoms/inputs/LargeInput";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import multipleAnswerState from "@/recoil/multipleanswer";
import newQuizState from "@/recoil/newquiz";
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
  const [newQuiz, setNewQuiz] = useRecoilState(newQuizState);
  // console.log("curr: ", newQuiz);
  const handleAnswer = (e: any) => {
    setNewQuiz((prev) => ({ ...prev, answer: e.target.value }));
  };

  const handleTitle = (e: any) => {
    setNewQuiz((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleQuestion = (e: any) => {
    setNewQuiz((prev) => ({ ...prev, question: e.target.value }));
  };

  const handleOption = (v: any, index: number) => {
    setNewQuiz((prevData) => {
      return {
        ...prevData,
        options: [...prevData.options.slice(0, index), v, ...prevData.options.slice(index + 1)],
      };
    });
  };

  const handleDescription = (e: any) => {
    setNewQuiz((prev) => ({ ...prev, description: e.target.value }));
  };

  return (
    <Container>
      <Row>
        <Title>제목</Title>
        <SmallInput value={newQuiz.title} onChange={handleTitle} />
      </Row>
      <Row>
        <Title>문제</Title>
        <SmallInput value={newQuiz.question} onChange={handleQuestion} />
      </Row>
      <Row>
        <Title>1</Title>
        <SmallInput
          value={newQuiz.options[0]}
          onChange={(e) => {
            handleOption(e.target.value, 0);
          }}
        />
      </Row>
      <Row>
        <Title>2</Title>
        <SmallInput
          value={newQuiz.options[1]}
          onChange={(e) => {
            handleOption(e.target.value, 1);
          }}
        />
      </Row>
      <Row>
        <Title>3</Title>
        <SmallInput
          value={newQuiz.options[2]}
          onChange={(e) => {
            handleOption(e.target.value, 2);
          }}
        />
      </Row>
      <Row>
        <Title>4</Title>
        <SmallInput
          value={newQuiz.options[3]}
          onChange={(e) => {
            handleOption(e.target.value, 3);
          }}
        />
      </Row>
      <Row>
        <Title>정답&nbsp;</Title>
        <Multiple selected={newQuiz.answer} num={"1"} func={handleAnswer} />
        <Multiple selected={newQuiz.answer} num={"2"} func={handleAnswer} />
        <Multiple selected={newQuiz.answer} num={"3"} func={handleAnswer} />
        <Multiple selected={newQuiz.answer} num={"4"} func={handleAnswer} />
      </Row>
      <Row>
        <Title>해설</Title>
        <LargeInput value={newQuiz.description} onChange={handleDescription} />
      </Row>
    </Container>
  );
}
