import styled from "@emotion/styled";

interface Props {
  label: string;
}

const Button = styled.button`
  font-family: "Press Start 2P";
  width: 650px;
  height: 60px;
  background-color: #26bba0;
  font-size: 2em;
  border: none;
  color: white;
  margin: 4px 0px;
  &:hover {
    cursor: pointer;
    background-color: #25b097;
  }
`;

export default function MediumButton(props: Props) {
  return (
    <div>
      <Button>{props.label}</Button>
    </div>
  );
}
