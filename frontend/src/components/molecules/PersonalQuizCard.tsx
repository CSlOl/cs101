import styled from "@emotion/styled";
import { useState } from "react";
import PersonalListItem from "./PersonalListItem";

const Card = styled.div`
  margin: 8px 8px 0 0;
  width: 100%;
  height: 90%;
  margin-bottom: 10px;
  min-width: 215px;

  .cardHeader {
    display: flex;
    justify-content: flex-end;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 7px 7px 0 0;
    font-size: 0.9em;
    width: 45%;
    height: 25px;

    @media (max-width: 992px) {
      width: 20%;
      font-size: 1em;
    }
  }

  .cardList {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 7px 0 7px 7px;
    height: 97%;
  }

  .cardListItem {
    display: flex;
  }
`;

// 멀티 프로세스와 멀티 스레드의 차이, 내가 푼 문제(맞은문제, 틀린문제, 즐겨찾기)

export default function PersonalQuizCard(props: any) {
  const [quizType, setQuizType] = useState<string>("맞은문제");

  return (
    <Card>
      <div className="cardHeader">
        <div className="buffer" />
        <div className="title">
          {props.type} ({props.count})
        </div>
      </div>
      <div className="cardList">
        <div className="cardListItem">
          <PersonalListItem />
        </div>
      </div>
    </Card>
  );
}
