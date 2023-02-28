import styled from "@emotion/styled";

const Button = styled.button`
  width: 25%;
  // 부모 컴포넌트(모달)의 20% 정도로 대충 설정
  height: 50px;
  background-color: #8000ff;
  font-size: 1.5em;
  border-radius: 10px;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #6b00d7;
  }
`;

export default function ExtraSmallButton() {
  return (
    <div>
      {/* 작은 보라색 버튼: 해설 보러가기 & 문제수정 */}
      <Button>해설 보러가기</Button>
    </div>
  );
}
