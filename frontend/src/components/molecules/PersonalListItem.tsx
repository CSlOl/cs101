import styled from "@emotion/styled";
import { useState } from "react";
import SmallTag from "../atoms/tags/SmallTag";

const Container = styled.div`
  margin: 5px;
  width: 95%;

  .quizList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 15px;
    margin-top: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    height: 55px;
    border-radius: 5px;
  }

  .quizTag,
  .quizTitle,
  .quizAuth {
    display: flex;
    margin-right: 20px;
    margin-top: 5px;
  }

  .quizTitle {
    display: block;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // 말줄임
  }

  .viewAll {
    display: flex;
    justify-content: end;
    font-size: 0.8em;
    margin-top: 10px;
  }
`;

export default function PersonalListItem() {
  const [quizCategory, setQuizCategory] = useState<string>("자료구조");
  const [quizType, setQuizType] = useState<string>("객관식");

  const titles: string[] = [
    "stack이 무엇인지 알아보자",
    "queue가 무엇인지 알asdfasdfasdf sdfsdfsdffsdfsdfsdf아보자",
    "deque가 무엇인지 알아보자",
  ];

  const titleList: JSX.Element[] = titles.map((title) => (
    <div className="quizList">
      <li className="quizTag">
        <SmallTag category={quizCategory} />
        <SmallTag type={quizType} />
      </li>
      <li className="quizTitle">{title}</li>
    </div>
  ));

  return (
    <Container>
      <div>{titleList}</div>
      <a href="" className="viewAll">
        -&gt; 전체보기
      </a>
    </Container>
  );
}

// 행마다 달라지는 색깔은 갖다 쓸때 바꾸셈
