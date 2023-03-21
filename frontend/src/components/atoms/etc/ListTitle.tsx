import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em 1em 2em;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  .favorite,
  .title,
  .status {
    font-size: 1em;
    font-family: "Press Start 2P";
  }

  .title {
    width: 54%;
  }
`;

export default function ListTitle() {
  return (
    <Div>
      <div className="favorite">fav</div>
      <div className="title">title</div>
      <div className="status">status</div>
    </Div>
  );
}
