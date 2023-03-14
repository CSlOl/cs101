import styled from "@emotion/styled";

interface Props {
  num: number;
  func: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = styled.button`
  font-family: "Press Start 2P";
  border-radius: 10px;
  background-color: #413e4780;
  width: 40px;
  height: 40px;
  font-size: 0.5em;
  border: none;
  color: white;
  margin: 5px 10px 5px 0px;
  &:focus {
    background-color: #d6e7e2;
    color: #5bb8a1;
  }
  &:hover {
    cursor: pointer;
    background-color: #25b097;
  }
`;

/**
 * 객관식 정답 선택 버튼 (클릭 시 색 변경)
 * @param props
 * @returns
 */
export default function Multiple(props: Props) {
  return (
    <Button onClick={props.func} value={props.num}>
      {props.num}
    </Button>
  );
}
