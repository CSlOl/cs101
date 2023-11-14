import styled from "@emotion/styled";

interface Props {
  label: string;
}

const Tag = styled.button`
  height: 35px;
  background-color: #26bba0;
  font-size: 1.2em;
  border-radius: 8px;
  border: none;
  color: white;
  margin-right: 5px;
  padding: 0 10px;
`;

// 개별 문제 내 문제 설명해주는 태그 (이미 푼 문제 / 자료구조 / 객관식 등)
export default function LargeTag(props: Props) {
  return (
    <div>
      <Tag>{props.label}</Tag>
    </div>
  );
}
