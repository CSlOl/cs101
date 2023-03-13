import Multiple from "@/components/atoms/etc/Multiple";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: "DungGeunMo";
  font-size: 1.5em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  white-space: nowrap;
  width: 75px;
  text-align: right;
  padding-right: 23px;
`;

const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function CreateMultiple() {
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
      <Select>
        <Title>정답</Title>
        <Multiple num="1" />
        <Multiple num="2" />
        <Multiple num="3" />
        <Multiple num="4" />
      </Select>
    </Container>
  );
}
