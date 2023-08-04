import styled from "@emotion/styled";

interface Props {
  label: string;
  onClick: () => void;
}

const Button = styled.button`
  font-family: "Press Start 2P";
  width: 31rem;
  height: 40px;
  background-color: #26bba0;
  font-size: 1.5em;
  border: none;
  color: white;
  margin: 10px 0px;
  &:hover {
    cursor: pointer;
    background-color: #25b097;
  }
`;

export default function MediumButton(props: Props) {
  return (
    <div>
      <Button onClick={props.onClick}>{props.label}</Button>
    </div>
  );
}
