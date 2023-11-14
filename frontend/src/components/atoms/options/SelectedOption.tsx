import styled from "@emotion/styled";

interface Props {
  num: number;
  text: string;
  selected: number;
}

const Div = styled.div`
  cursor: pointer;
  .selected {
    background-color: #d8b8f8;

    p {
      color: black;
    }
  }

  .num {
    font-family: "press start 2P";
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.2);
    margin-right: 15px;
  }

  .snum {
    font-family: "press start 2P";
    font-size: 1.3em;
    margin-right: 15px;
    color: #7e00f860;
  }

  &:hover {
    background-color: #413e4790;
  }
`;

const Option = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 20px;
  background-color: #413e4780;
  border: 0;
  height: 8vh;
  border-radius: 10px;
  font-size: 1.6em;
  width: 100%;
  cursor: pointer;
`;

export default function SelectedOption(props: Props) {
  return (
    <Div>
      {/* 현재 선택된 상태의 배경 색 변경 (selected class 사용) */}
      <Option className={props.selected === props.num ? "selected" : ""}>
        <div className={props.selected === props.num ? "snum" : "num"}>{String(props.num)}</div>
        <p>{props.text}</p>
      </Option>
    </Div>
  );
}
