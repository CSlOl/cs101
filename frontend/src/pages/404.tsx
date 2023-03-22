import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

const move = keyframes`
  // 360도 회전시키기
  0%, 20%, 40%, 60%, 80% {
    transform: rotate(0deg)
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(360deg)
  }

  // 배경에서 움직이기
  from {
    margin-left: -100%;
    margin-top: -50%;
  }
  10% {
    margin-left: 100%;
    margin-top: 0%;
  }
  20%{
    margin-left: 0%;
    margin-top: 44%;
  }
  30%{
    margin-left: 50%;
    margin-top: -50%;
  }
  40%{
    margin-left: -50%;
    margin-top: 44%;
  }
  50% {
    margin-left: 50%;
    margin-top: -50%;
  }
  60%{
    margin-left: -100%;
    margin-top: 0%;
  }
  70%{
    margin-left: 100%;
    margin-top: 44%;
  }
  80% {
    margin-left: -100%;
    margin-top: -50%;  
  }
  90%{
    margin-left: 100%;
    margin-top: 44%;
  }
  to {
    margin-left: -100%;
    margin-top: -50%;
  }
`;

const Container = styled.div`
  overflow: hidden;
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

  .green {
    position: absolute;
    animation: ${move} linear 50s infinite;
  }

  .purple {
    position: absolute;
    animation: ${move} linear 30s infinite;
  }
`;

export default function NotFound() {
  return (
    <>
      <Container>
        <div className="box">
          <h1>404 NOT FOUND</h1>
          <p>An error has occurred, to continue:</p>
          <a href="/">&gt; 홈으로 돌아가기</a>
        </div>
        <Image
          className="purple"
          src="/circle_purple.png"
          alt="circle_purple"
          width={100}
          height={95}
        />
        <Image
          className="green"
          src="/circle_basic.png"
          alt="circle_basic"
          width={100}
          height={95}
        />
      </Container>
    </>
  );
}
