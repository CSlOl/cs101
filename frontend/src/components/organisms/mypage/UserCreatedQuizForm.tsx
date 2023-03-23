import RegisterQuizCard from "@/components/molecules/RegisterQuizCard";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  height: 40%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;

  .userCreatedQuizHeader {
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
    color: #26bba0;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: white;
    font-size: 0.5em;
  }

  p {
    font-family: "DungGeunMo";
  }
`;

export default function UserCreatedQuizForm() {
  const [height, setHeight] = useState<string>("40%");

  return (
    <Container>
      <div className="userCreatedQuizHeader">
        <p>내가 만든 문제</p>
        <a href="">-&gt; 전체보기</a>
      </div>
      <RegisterQuizCard />
    </Container>
  );
}
