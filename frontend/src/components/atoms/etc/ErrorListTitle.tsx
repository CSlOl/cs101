import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em 1em 2em;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  min-width: 80vw;

  .date,
  .title,
  .user,
  .status {
    font-size: 1em;
    font-family: "Press Start 2P";
  }

  .title {
    width: 43%;
  }

  .date {
    width: 15%;
  }

  .user,
  .status {
    width: 10%;
  }
`;

export default function ErrorListTitle() {
  return (
    <Div>
      <div className="date">date</div>
      <div className="title">title</div>
      <div className="user">user</div>
      <div className="status">status</div>
    </Div>
  );
}
