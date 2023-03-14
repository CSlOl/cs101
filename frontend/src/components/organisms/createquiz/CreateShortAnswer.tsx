import styled from "@emotion/styled";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import MediumInput from "../../atoms/inputs/MediumInput";

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
 * 문제 등록 - 주관식
 * @returns
 */
export default function CreateShortAnswer() {
  return (
    <Container>
      <Row>
        <Title>제목</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>문제</Title>
        <MediumInput />
      </Row>
      <Row>
        <Title>정답</Title>
        <MediumInput />
      </Row>
      <Row>
        <Title>해설</Title>
        <MediumInput />
      </Row>
    </Container>
  );
}
