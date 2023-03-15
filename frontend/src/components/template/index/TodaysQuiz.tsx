import styled from "@emotion/styled";
import Image from "next/image";
import TodaysQuizCard from "../../molecules/TodaysQuizCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
`;

const Text = styled.div``;

const Arrow = styled.div`
  margin-top: 85vh;
`;

export default function TodaysQuiz() {
  return (
    <Container>
      <Text>오늘의 추천문제</Text>
      <Cards>
        <TodaysQuizCard question="Stack이 무엇인지 알아보자" />
        <TodaysQuizCard question="Stack이 무엇인지 알아보자" />
        <TodaysQuizCard question="Stack이 무엇인지 알아보자" />
      </Cards>
      <Arrow>
        <Image src="/main_arrow.png" alt="main_arrow" width={70} height={30} />
      </Arrow>
    </Container>
  );
}
