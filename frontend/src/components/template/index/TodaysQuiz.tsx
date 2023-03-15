import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  height: 100%;
`;

const Text = styled.div`
  margin-bottom: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function TodaysQuiz() {
  return (
    <Container>
      <Image src="/main_arrow.png" alt="main_arrow" width={70} height={30} />

      {/* <Arrow>
        <Text>오늘의 추천문제</Text>
      </Arrow> */}
    </Container>
  );
}
