import styled from "@emotion/styled";

const Input = styled.input`
  border-radius: 10px;
  width: 80%;
  height: 50px;
  background-color: #413e4780;
  font-size: 1.25em;
  border: none;
  color: white;
  margin: 10px 0px;
  padding: 0px 12px; // 커서 여백
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #413e4790;
  }
`;

export default function SmallInput() {
  return <Input />;
}
