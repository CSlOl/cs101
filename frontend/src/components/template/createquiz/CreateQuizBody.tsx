import LargeButton from "@/components/atoms/buttons/LargeButton";
import SmallInput from "@/components/atoms/inputs/SmallInput";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  margin-left: 5%;
  margin-left: 5%;
  display: flex;
  align-items: center;
`;
export default function CreateQuizBody() {
  return (
    <Div>
      <Row>
        <div>제목</div>
        <SmallInput />
      </Row>

      <LargeButton label="승인 요청하기" />
    </Div>
  );
}
