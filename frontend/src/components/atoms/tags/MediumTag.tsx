import styled from "@emotion/styled";

const Tag = styled.button`
  width: 150px;
  height: 40px;
  background-color: #26bba0;
  font-size: 1.3em;
  border-radius: 10px;
  border: none;
  color: white;
`;

// 마이페이지 내가 만든 문제에서 쓰이는 중간 크기의 태그
export default function MediumTag() {
  return (
    <div>
      <Tag>객관식</Tag>
    </div>
  );
}
