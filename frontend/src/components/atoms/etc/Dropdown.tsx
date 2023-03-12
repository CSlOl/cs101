import styled from "@emotion/styled";

interface Props {
  options: Option[];
}

interface Option {
  value: string;
  name: string;
}

const Select = styled.select`
  // appearance: none;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  // background: black;
`;

export default function Dropdown(props: Props) {
  return (
    <Select>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
}
