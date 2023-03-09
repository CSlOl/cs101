import PersonalQuizCard from "@/components/molecules/PersonalQuizCard";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  height: 55%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  font-family: "DungGeunMo";

  .personalQuizHeader {
    font-size: 1.5em;
    color: #26bba0;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: white;
    font-size: 0.5em;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`;

export default function PersonalQuizForm() {
  const [quizCount, setQuizCount] = useState<number>(20);

  return (
    <Container>
      <div className="personalQuizHeader">
        <p>내가 푼 문제</p>
        <a href="">-&gt; 전체보기</a>
      </div>
      <div className="cards">
        <PersonalQuizCard type="맞은문제" count={quizCount} />
        <PersonalQuizCard type="틀린문제" count={quizCount} />
        <PersonalQuizCard type="즐겨찾기" count={quizCount} />
      </div>
    </Container>
  );
}
