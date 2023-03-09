import styled from "@emotion/styled";
import { useState } from "react";
import SmallTag from "../atoms/tags/SmallTag";

const Container = styled.div`
  display: relative;
  margin-top: 10px;
  width: 100%;

  .quizList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    margin-top: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    height: 40px;
    border-radius: 5px;
  }

  .quizTag,
  .quizTitle,
  .quizAuth {
    display: flex;
    margin-right: 20px;
  }

  .quizAuth {
    color: red; // 나중에 css if 문 걸어야될거같..
  }
`;

export default function RegisterListItem() {
  const [quizCategory, setQuizCategory] = useState<string>("자료구조");
  const [quizType, setQuizType] = useState<string>("객관식");
  const [authRequestStatus, setAuthRequestStatus] =
    useState<string>("승인대기중");

  const titles: string[] = [
    "stack이 무엇인지 알아보자",
    "queue가 무엇인지 알아보자",
    "deque가 무엇인지 알아보자",
  ];

  const titleList: JSX.Element[] = titles.map((title) => (
    <div className="quizList">
      <li className="quizTag">
        <SmallTag category={quizCategory} />
        <SmallTag type={quizType} />
      </li>
      <li className="quizTitle">{title}</li>
      <li className="quizAuth">{authRequestStatus}</li>
    </div>
  ));

  return (
    <Container>
      <div>{titleList}</div>
    </Container>
  );
}

// 행마다 달라지는 색깔은 갖다 쓸때 바꾸셈
