import styled from "@emotion/styled";
import ErrorListTitle from "@/components/atoms/etc/ErrorListTitle";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 20px 20px 20px;
  min-width: 900px;

  h1 {
    font-family: "DungGeunMo";
    font-size: 1.8em;
    color: #26bba0;
    margin-bottom: 0.5em;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em;
  background-color: rgba(201, 255, 245, 0.1);
  border-radius: 5px;

  .date {
    width: 15%;
    font-family: "DungGeunMo";
  }

  .quizTitle {
    width: 40%;
    font-size: 1.2em;
    margin-right: 10px;
  }

  .user {
    width: 10%;
    font-family: "DungGeunMo";
  }

  .status {
    width: 10%;
    font-family: "DungGeunMo";
    font-size: 1.1em;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Status = styled.div({}, (props) => ({ color: props.color }));

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

export default function ErrorListBody() {
  const [id, setId] = useState<number>(0);
  const [date, setDate] = useState<string>("2023-04-12 (수)");
  const [username, setUsername] = useState<string>("sunyeong412");
  const [color, setColor] = useState<string>("red");
  const [status, setStatus] = useState<string>("확인 안함");

  useEffect(() => {
    handleStatus();
  });

  const handleStatus = () => {
    if (status === "확인중") {
      setColor("yellow");
    } else if (status === "해결 완료") {
      setColor("#00EB34");
    }
  };

  const quizList: JSX.Element[] = quizzes.map((quiz) => (
    <List key={id}>
      <div className="date">{date}</div>
      <div className="quizTitle">
        <a href="#">{quiz}</a>
      </div>
      <div className="user">{username}</div>
      <Status className="status" color={color}>
        {status}
      </Status>
    </List>
  ));

  return (
    <Container>
      <h1>제보된 오류 확인</h1>
      <ErrorListTitle />
      <ListDiv>{quizList}</ListDiv>
    </Container>
  );
}
