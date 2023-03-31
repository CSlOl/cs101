import styled from "@emotion/styled";
import { useState } from "react";
import NumberTag from "@/components/atoms/tags/NumberTag";

interface Props {
  title: string;
}

const Div = styled.div`
  margin: 15px 0 15px 0;

  .title {
    font-size: 1.5em;
    font-family: "Press Start 2P";
    color: #26bba0;
  }

  .menu {
    margin: 1em 0 1.5em 0;
  }
`;

const List = styled.li`
  display: flex;
  margin-top: 0.8em;

  .listTitle {
    font-size: 1.1em;
    margin-right: 10px;
  }
`;

export default function SidebarForm(props: Props) {
  const [id, setId] = useState<number>(0);
  const types: string[] = ["객관식", "주관식", "서술형"];

  const categories: string[] = [
    "네트워크",
    "운영체제",
    "데이터베이스",
    "자료구조",
    "웹",
  ];

  const categoryList: JSX.Element[] = categories.map((category) => (
    <ul key={id} className="list">
      <List>
        <div className="listTitle">{category}</div>
        <div className="numberTag">
          <NumberTag number={12} />
        </div>
      </List>
    </ul>
  ));

  const typeList: JSX.Element[] = types.map((category) => (
    <ul key={id} className="list">
      <List>
        <div className="listTitle">{category}</div>
        <div className="numberTag">
          <NumberTag number={12} />
        </div>
      </List>
    </ul>
  ));

  return (
    <>
      <Div>
        <div className="title">{props.title}</div>

        {props.title === "Category" ? (
          <div className="menu">{categoryList}</div>
        ) : (
          <div className="menu">{typeList}</div>
        )}
      </Div>
    </>
  );
}
