import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
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
  cursor: pointer;
`;

const Arrow2 = styled.div`
  position: absolute;
  top: 198%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
`;

const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <TodaysCS />
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
        <Header />
        <Stars />
        <TodaysQuiz />
        <Arrow2>
          <Link href="/quizzes">
            <div>
              <Text>문제목록 바로가기</Text>
              <Image
                src="/main_arrow.png"
                alt="main_arrow"
                width={70}
                height={30}
              />
            </div>
          </Link>
        </Arrow2>
      </Main2>
    </Div>
  );
}
