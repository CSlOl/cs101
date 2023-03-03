import styled from "@emotion/styled";

const Tag = styled.button`
  width: 200px;
  height: 50px;
  background-color: #26bba0;
  font-size: 1.8em;
  border-radius: 10px;
  border: none;
  color: white;
`;

// 개별 문제 내 문제 설명해주는 태그 (이미 푼 문제 / 자료구조 / 객관식 등)
export default function LargeTag() {
  return (
    <div>
      <Tag>😎이미 푼 문제</Tag>
    </div>
  );
}
