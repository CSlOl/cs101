import styled from "@emotion/styled";

interface Props {
  question: string;
}
const Box = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #413e4780;
  height: 12vh;
  border-radius: 10px;
  font-size: 1.6em;

  .bigQ {
    font-family: "press start 2P";
    font-size: 1.7em;
    color: rgba(255, 255, 255, 0.2);
    margin-right: 15px;
  }

  p {
    font-weight: 900;
  }
`;

export default function QuestionBox(props: Props) {
  return (
    <Box>
      <div className="bigQ">Q</div>
      <p>{props.question}</p>
    </Box>
  );
}
