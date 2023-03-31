import AllQuizzes from "@/components/template/quizzes/AllQuizzes";
import CreatedQuizzes from "@/components/template/quizzes/CreatedQuizzes";
import PersonalQuizzes from "@/components/template/quizzes/PersonalQuizzes";
import Sidebar from "@/components/template/quizzes/Sidebar";
import Header from "../components/Header";

import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import nameState from "@/recoil/store";

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
`;

const ListDiv = styled.div`
  .listTitle {
    font-size: 1.5em;
    font-family: "DungGeunMo";
    margin-bottom: 10px;
    color: #26bba0;
  }

  .quizlist {
    width: 75vw;
    height: 94%;
    display: flex;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;
// 문제 리스트
export default function Quizzes() {
  const [personal, setPersonal] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("맞은");
  const [name, setName] = useRecoilState(nameState);
  const [created, setCreated] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Container>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="buffer" />
        <ListDiv>
          <div className="listTitle">
            {personal
              ? name + "의 " + status + " 문제"
              : created
              ? "사용자 등록 문제"
              : "전체 문제"}
          </div>
          <div className="quizlist">
            {personal ? (
              <PersonalQuizzes />
            ) : created ? (
              <CreatedQuizzes />
            ) : (
              <AllQuizzes />
            )}
          </div>
        </ListDiv>
      </Container>
    </>
  );
}
