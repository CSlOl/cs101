import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { useEffect, useRef } from "react";
import TodaysCS from "@/components/template/index/TodaysCS";
import TodaysQuiz from "@/components/template/index/TodaysQuiz";
import Stars from "@/components/template/Stars";
import axios from "axios";
import swal from "sweetalert";

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
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  function useMoveScrool() {
    const element = useRef<HTMLDivElement>(null);
    const onMoveToElement = () => {
      element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { element, onMoveToElement };
  }
  const { element, onMoveToElement } = useMoveScrool();

  // 오늘의 지식 및 오늘의 문제 조회
  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/api/daily`)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.statusCode === 200) {
  //       }
  //     })
  //     .catch(() => {
  //       swal("일시적인 에러가 발생했습니다.", {
  //         icon: "error",
  //       });
  //     });
  // }, []);

  return (
    <Div>
      <Header />
      <Stars />
      <Main1>
        <TodaysCS />
        <Arrow onClick={onMoveToElement}>
          <Text>오늘의 추천문제</Text>
          <Image src="/main_arrow.png" alt="main_arrow" width={70} height={30} />
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
              <Image src="/main_arrow.png" alt="main_arrow" width={70} height={30} />
            </div>
          </Link>
        </Arrow2>
      </Main2>
    </Div>
  );
}
