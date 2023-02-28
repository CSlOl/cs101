import styled from "@emotion/styled";

const Button = styled.button`
  width: 30%;
  height: 60px;
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

export default function SmallButton() {
  return (
    <div>
      <Button>계속하기</Button>
    </div>
  );
}
