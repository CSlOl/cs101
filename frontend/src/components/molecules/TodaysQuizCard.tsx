import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #ffffff80;
  border-radius: 10px;
`;

interface Props {
  question: string;
}

export default function TodaysQuizCard(props: Props) {
  return (
    <Container>
      <div>{props.question}</div>
    </Container>
  );
}
