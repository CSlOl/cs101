import CreateQuizBody from "@/components/template/createquiz/CreateQuizBody";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Div = styled.div``;

export default function CreateQuiz() {
  return (
    <Div>
      <Header />
      <CreateQuizBody />
    </Div>
  );
}
