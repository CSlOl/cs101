import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import TodaysQuizCard from "../../molecules/TodaysQuizCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 95%;
  padding-top: 12%;

  .title {
    font-size: 1.25em;
  }
`;

const Cards = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
`;

export default function TodaysQuiz() {
  const [id, setId] = useState<number>(0);
  const questions = [
    {
      title: "stack에 대해서 알아보자.",
      category: "자료구조",
      type: "객관식",
    },
    {
      title: "queue에 대해서 알아보자.",
      category: "자료구조",
      type: "객관식",
    },
    {
      title: "Javascript와 Typescript의 차이는?",
      category: "자료구조",
      type: "객관식",
    },
  ];

  const titles = [
    "stack에 대해서 알아보자.",
    "queue에 대해서 알아보자.",
    "Javascript와 Typescript의 차이는?",
  ];

  return (
    <Container>
      <div className="title">오늘의 추천문제</div>
      <Cards>
        {questions.map((question) => (
          <Link key={id} href="/quizzes">
            {/* 추후 해당 문제 링크로 이동 */}
            <TodaysQuizCard
              question={question.title}
              category={question.category}
              type={question.type}
            ></TodaysQuizCard>
          </Link>
        ))}
      </Cards>
    </Container>
  );
}
