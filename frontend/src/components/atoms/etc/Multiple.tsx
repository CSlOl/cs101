import styled from "@emotion/styled";

interface Props {
  num: string;
}
const Button = styled.button`
  font-family: "Press Start 2P";
  border-radius: 10px;
  background-color: #413e4780;
  width: 40px;
  height: 40px;
  //   background-color: #26bba0;
  font-size: 0.5em;
  //   border: none;
  color: white;
  //   margin: 5px 0px;
  //   &:hover {
  //     cursor: pointer;
  //     background-color: #25b097;
  //   }
`;

export default function Multiple(props: Props) {
  return <Button>{props.num}</Button>;
}
