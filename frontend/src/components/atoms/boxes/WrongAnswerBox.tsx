import styled from "@emotion/styled";
import { useState } from "react";

const Box = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 45vh;
  background-color: #f0a6a6;
  font-size: 1.5em;
  border: none;
  color: black;
  margin: 10px 0px;
  outline: none;
  padding: 20px;

  .answerDiv {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    font-weight: bolder;
  }

  p {
    font-family: "press start 2P";
    color: #e95b5b;
    font-size: 1.7em;
    margin-right: 15px;
    font-weight: normal;
  }
`;

export default function WrongAnswerBox() {
  const [answer, setAnswer] = useState<string>("오답오답");
  const [explanation, setExplanation] = useState<string>("해설해설해설");
  return (
    <Box>
      <div className="answerDiv">
        <p>A</p>
        <div>{answer}</div>
      </div>
      <div className="expDiv">{explanation}</div>
    </Box>
  );
}
