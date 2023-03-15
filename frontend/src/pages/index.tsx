import Image from "next/image";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import nameState from "../recoil/store";
import Header from "../components/Header";
import { useRef } from "react";
import TodaysCS from "@/components/template/index/TodaysCS";
import TodaysQuiz from "@/components/template/index/TodaysQuiz";
import Stars from "@/components/template/Stars";

const Text = styled.div`
  margin-bottom: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
`;

const Main2 = styled.div`
  height: 100vh;
  color: white;
`;

const Div = styled.div`
  height: 200%;
`;

export default function Home() {
  function useMoveScrool() {
    const element = useRef<HTMLDivElement>(null);
    const onMoveToElement = () => {
      element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { element, onMoveToElement };
  }
  const { element, onMoveToElement } = useMoveScrool();

  return (
    <Div>
      <Header />
      <Stars />
      <Main1>
        <TodaysCS></TodaysCS>
        <Arrow onClick={onMoveToElement}>
          <Text>오늘의 추천문제</Text>
          <Image
            src="/main_arrow.png"
            alt="main_arrow"
            width={70}
            height={30}
          />
        </Arrow>
      </Main1>

      <Main2 ref={element}>
        <TodaysQuiz />
      </Main2>
    </Div>
  );
}
