import styled from "@emotion/styled";

interface Props {
  label: string;
  type?: string;
  onClick: () => void;
}

const Div = styled.div`
  .half {
    width: 47vw;
  }

  .red {
    background-color: #ef7474;
    width: 47vw;
    &:hover {
      background-color: #cc6e6e;
    }
  }

  .full {
  }
`;

const Button = styled.button`
  margin-top: 10px;
  font-family: "DungGeunMo";
  height: 50px;
  width: 100%;
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

/**
 * [제출하기] 등 화면 하단 긴 버튼
 * @param props
 * @returns
 */
export default function LargeButton(props: Props) {
  return (
    <Div>
      <Button onClick={props.onClick} className={props.type}>
        {props.label}
      </Button>
    </Div>
  );
}
