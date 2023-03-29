import styled from "@emotion/styled";

const Title = styled.div`
  position: absolute;
  top: 38%;
  font-size: 1.25em;
  cursor: default;
`;

const Content = styled.div`
  position: absolute;
  top: 48%;
  font-size: 2em;
  cursor: default;
`;
export default function TodaysCS() {
  return (
    <>
      <Title>오늘의 CS지식</Title>
      <Content>CS는 computer science의 약자</Content>
    </>
  );
}
