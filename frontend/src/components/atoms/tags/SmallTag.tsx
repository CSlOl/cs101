import styled from "@emotion/styled";

const Tag = styled.button`
  width: 100px;
  height: 30px;
  background-color: #26bba0;
  font-size: 1.1em;
  border-radius: 10px;
  border: none;
  color: white;
  margin-right: 5px;
`;

// 문제 리스트에 함께 표시되는 작은 태그
export default function SmallTag(props: any) {
  return (
    <div>
      {props.type ? <Tag>{props.type}</Tag> : <Tag>{props.category}</Tag>}
    </div>
  );
}
