import styled from "@emotion/styled";

interface Props {
  type: string;
  category: string;
}

const Tag = styled.button`
  width: 70px;
  height: 18px;
  background-color: #26bba0;
  font-size: 0.6em;
  border-radius: 5px;
  border: none;
  color: white;
  margin-right: 5px;
`;

// 문제 리스트에 함께 표시되는 작은 태그
export default function SmallTag(props: Props) {
  return (
    <div>
      {props.type ? <Tag>{props.type}</Tag> : <Tag>{props.category}</Tag>}
    </div>
  );
}
