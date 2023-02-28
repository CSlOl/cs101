import styled from "@emotion/styled";

const Button = styled.button`
  font-family: "DungGeunMo";
  width: 90%;
  height: 50px;
  background-color: #26bba0;
  font-size: 2em;
  border-radius: 10px;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #25b097;
  }
`;

export default function LargeButton() {
  return <Button>제출하기</Button>;
}
