import styled from "@emotion/styled";

interface Props {
  label: string;
}

const Button = styled.button`
  font-family: "DungGeunMo";
  width: 95%;
  height: 50px;
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

export default function LargeButton(props: Props) {
  return <Button>{props.label}</Button>;
}
