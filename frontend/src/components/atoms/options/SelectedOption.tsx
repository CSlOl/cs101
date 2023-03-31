import styled from "@emotion/styled";

interface Props {
  num: number;
  text: string;
}

const Box = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
  background-color: #413e4780;
  border: 0;
  height: 8vh;
  border-radius: 10px;
  font-size: 1.6em;
  width: 100%;
  &:focus {
    background-color: #d8b8f8;
    color: black;
  }
  &:hover {
    cursor: pointer;
    background-color: #413e4790;
  }

  .num {
    font-family: "press start 2P";
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.2);
    margin-right: 15px;
  }
`;

export default function SelectedOption(props: Props) {
  return (
    <Box>
      <div className="num">{String(props.num)}</div>
      <p>{props.text}</p>
    </Box>
  );
}
