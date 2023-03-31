import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import ListTitle from "@/components/atoms/etc/ListTitle";
import Status from "@/components/atoms/etc/Status";
import SmallTag from "@/components/atoms/tags/SmallTag";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background-color: rgba(201, 255, 245, 0.1);
  border-radius: 5px;

  .favorite {
    display: flex;
    justify-content: center;
    width: 10%;
  }

  .quizTitle {
    width: 50%;
    font-size: 1.3em;
    margin-right: 10px;
  }

  .status {
    display: flex;
    justify-content: center;
    width: 15%;
  }

  .tag {
    display: flex;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const quizzes: string[] = [
  "stack에 대해서 알아보자",
  "queue에 대해서 알아보자",
  "deque에 대해서 알아보자",
  "Javascript와 TypeScript의 차이는?",
];

// 전체 문제 리스트
export default function PersonalQuizzes() {
  const [id, setId] = useState<number>(0);

  const quizList: JSX.Element[] = quizzes.map((quiz) => (
    <List>
      <div className="favorite">
        <FavoriteButton />
      </div>
      <div className="quizTitle">
        <a href="#">{quiz}</a>
        <div className="tag">
          <SmallTag type="객관식" category="" />
          <SmallTag type="" category="자료구조" />
        </div>
      </div>
      <div className="status">
        <Status />
      </div>
    </List>
  ));

  return (
    <Container>
      <ListTitle />
      <ListDiv>{quizList}</ListDiv>
    </Container>
  );
}
