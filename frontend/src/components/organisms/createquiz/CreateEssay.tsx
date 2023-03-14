import styled from "@emotion/styled";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import MediumInput from "../../atoms/inputs/MediumInput";

import LargeInput from "../../atoms/inputs/LargeInput";

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
 * 문제 등록 - 서술형
 * @returns
 */
export default function CreateEssay() {
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
        <LargeInput />
      </Row>
    </Container>
  );
}
