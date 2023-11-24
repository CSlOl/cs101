import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, index?: number) => void;
}
const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background-color: #413e4780;
  font-family: "Pretendard";
  font-size: 0.8em;
  border: none;
  color: white;
  margin: 5px 0px;
  padding: 0px 12px; // 커서 여백
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #413e4790;
  }
`;

export default function SmallInput({ value, onChange }: Props) {
  return <Input value={value} onChange={onChange} />;
}
