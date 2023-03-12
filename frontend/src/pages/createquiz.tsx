import CreateQuizBody from "@/components/template/createquiz/CreateQuizBody";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function CreateQuiz() {
  return (
    <>
      <Header />
      <CreateQuizBody />
    </>
  );
}
