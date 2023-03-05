import styled from "@emotion/styled";

interface Props {
  placeholder: string;
}

const Input = styled.input`
  font-family: "Press Start 2P";
  width: 650px;
  height: 60px;
  background-color: white;
  font-size: 1.25em;
  border: none;
  text-align: center;
  color: #050623;
  margin: 10px 0px;
  &:hover {
    cursor: pointer;
    background-color: #eaf1f0;
  }
`;

export default function AuthInput(props: Props) {
  return (
    <div>
      <Input type="text" placeholder={props.placeholder} />
    </div>
  );
}
