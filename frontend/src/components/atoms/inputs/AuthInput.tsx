import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  placeholder: string;
  type: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput(props: Props) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.type);

  // 눈 모양 클릭해서 show 바뀌는 경우 보여줄지 여부 결정
  function onShow() {
    setShow(!show);
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  return (
    <Div>
      <Input type={type} placeholder={props.placeholder} onChange={props.onChange} />

      {/* password인 경우 보기 설정할 눈 아이콘 표시 설정 */}
      {type === "password" && show === false && (
        <Icon className="material-icons" onClick={onShow}>
          visibility_off
        </Icon>
      )}
      {show === true && (
        <Icon className="material-icons" onClick={onShow}>
          visibility
        </Icon>
      )}
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 31rem;
`;

const Input = styled.input`
  font-family: "Press Start 2P";
  width: 31rem;
  height: 40px;
  background-color: white;
  font-size: 1em;
  border: none;
  text-align: center;
  color: #050623;
  margin: 10px 0px;
  ime-mode: inactive;
  &:hover {
    cursor: pointer;
    background-color: #eaf1f0;
  }
`;

const Icon = styled.span`
  color: grey;
  position: absolute;
  right: 3%;
  top: 30%;
  cursor: pointer;
`;
