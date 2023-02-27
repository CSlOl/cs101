import styled from "@emotion/styled";

const Button = styled.button`
  font-family: "Press Start 2P";
  width: 50%;
  height: 50px;
  background-color: #26bba0;
  font-size: 2em;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #25b097;
  }
`;

export default function MediumButton() {
  return (
    <div>
      <Button>START</Button>
    </div>
  );
}
