import typeState from "@/recoil/type";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

interface Props {
  options: Option[];
  func: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Option {
  value: string;
  name: string;
}

const Select = styled.div`
  width: 200px;
  height: 40px;
  background-image: url("https://i.ibb.co/mCs54X2/dropdown-arrow.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 95%;
  background-position-y: center;
  display: flex;
  margin-right: 20px;
  // margin-left: 20px;

  select {
    font-size: 0.7em;
    font-family: "Pretendard";
    width: 100%;
    height: 100%;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #413e4780;
    color: white;
    text-align: center;
    outline: none; // 클릭 시 테두리 없애기
    border-radius: 10px;
  }
`;

export default function Dropdown(props: Props) {
  return (
    <Select>
      <select onChange={props.func}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </Select>
  );
}
