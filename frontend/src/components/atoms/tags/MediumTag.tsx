import styled from "@emotion/styled";

interface Props {
  type: string;
  category: string;
}

const Tag = styled.button`
  width: 100px;
  height: 30px;
  background-color: #26bba0;
  font-size: 1.2em;
  border-radius: 8px;
  border: none;
  color: white;
  margin-right: 5px;
`;

// 마이페이지 내가 만든 문제에서 쓰이는 중간 크기의 태그
export default function MediumTag(props: Props) {
  return (
    <div>
      {props.type ? <Tag>{props.type}</Tag> : <Tag>{props.category}</Tag>}
    </div>
  );
}
