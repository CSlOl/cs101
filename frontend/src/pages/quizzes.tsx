import AllQuizzes from "@/components/template/quizzes/AllQuizzes";
import CreatedQuizzes from "@/components/template/quizzes/CreatedQuizzes";
import PersonalQuizzes from "@/components/template/quizzes/PersonalQuizzes";
import Sidebar from "@/components/template/quizzes/Sidebar";
import Header from "../components/Header";

import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  height: 80vh;

  .sidebar {
    width: 20vw;
    min-width: 250px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }

  .buffer {
    width: 1vw;
  }
  .quizlist {
    width: 75vw;
    display: flex;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;
// 문제 리스트
export default function Quizzes() {
  const [personal, setPersonal] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Container>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="buffer" />
        <div className="quizlist">
          {personal ? (
            <PersonalQuizzes />
          ) : created ? (
            <CreatedQuizzes />
          ) : (
            <AllQuizzes />
          )}
        </div>
      </Container>
    </>
  );
}
