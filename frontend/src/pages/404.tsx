import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00007e;
  width: 100vw;
  height: 100vh;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #4ca7a9;
    width: 70vw;
    height: 70vh;
    padding: 2em;
    filter: drop-shadow(10px 10px 0px #000000);
  }

  h1 {
    font-size: 2em;
    font-family: "Press Start 2P";
    color: black;
  }

  p {
    font-size: 1.5em;
    font-family: "Press Start 2P";
    margin: 1.5em 0 2em 0;
  }

  a {
    font-size: 2em;
    font-family: "Dunggeunmo";
    text-decoration: underline;

    &: hover {
      color: #000000;
    }
  }
`;

export default function NotFound() {
  return (
    <Container>
      <div className="box">
        <h1>404 NOT FOUND</h1>
        <p>An error has occurred, to continue:</p>
        <a href="/">&gt; 홈으로 돌아가기</a>
      </div>
    </Container>
  );
}
