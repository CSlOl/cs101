import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: any;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Textarea = styled.textarea`
  border-radius: 10px;
  width: 100%;
  height: 40vh;
  background-color: #413e4780;
  font-family: "Pretendard";
  font-size: 0.8em;
  border: none;
  color: white;
  margin: 5px 0px;
  padding: 12px 12px; // 커서 여백
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #413e4790;
  }
`;

export default function LargeInput({ value, onChange }: Props) {
  return <Textarea value={value} onChange={onChange} />;
}
