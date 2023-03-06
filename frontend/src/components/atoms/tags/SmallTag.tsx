import styled from "@emotion/styled";

const Tag = styled.button`
  width: 110px;
  height: 30px;
  background-color: #26bba0;
  font-size: 1.1em;
  border-radius: 10px;
  border: none;
  color: white;
`;

// 문제 리스트에 함께 표시되는 작은 태그
export default function SmallTag() {
  return (
    <div>
      <Tag>자료구조</Tag>
    </div>
  );
}
