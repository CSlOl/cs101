import styled from "@emotion/styled";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import LargeInput from "../../atoms/inputs/LargeInput";
import LargeButton from "@/components/atoms/buttons/LargeButton";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  h1 {
    font-family: "DungGeunMo";
    font-size: 1.8em;
    color: #26bba0;
  }
`;

const Row = styled.div`
  margin-top: 1em;
`;

const Title = styled.div`
  font-family: "DungGeunMo";
  font-size: 1.5em;
  white-space: nowrap;
  width: 75px;
  text-align: right;
  padding-right: 23px;
  padding-top: 10px;
`;

export default function CreateErrorBody() {
  return (
    <Container>
      <h1>오류제보</h1>
      <Row>
        <Title>제목</Title>
        <SmallInput />
      </Row>
      <Row>
        <Title>내용</Title>
        <LargeInput />
      </Row>

      <LargeButton label="오류 제보하기" />
    </Container>
  );
}
