import styled from "@emotion/styled";

interface Props {
  number: number;
}

const NumTag = styled.button`
  width: 3em;
  height: 20px;
  background-color: #00000;
  font-size: 0.7em;
  border-radius: 20px;
  border: none;
  color: white;
`;

// 문제 리스트 사이드바에서 해당 카테고리에 포함된 문제 갯수를 보여주는 태그
export default function NumberTag(props: Props) {
  return (
    <div>
      <NumTag>{props.number}</NumTag>
    </div>
  );
}
