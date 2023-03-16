import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import LargeTag from "@/components/atoms/tags/LargeTag";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95vw;
`;

const TagDiv = styled.div`
  display: flex;
  justify-content: start;
  margin: 10px 0 10px 0;
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;

  .creator {
    margin-right: 20px;
  }
`;

export default function SubHeader() {
  const [creator, setCreator] = useState<string>("qminlee723");

  return (
    // 개별 문제 조회 서브헤더
    <Container>
      <TagDiv>
        <LargeTag label="😎 푼 문제" />
        <LargeTag label="자료구조" />
        <LargeTag label="네트워크" />
      </TagDiv>

      <RightDiv>
        <div className="creator">
          <p>문제만든사람: {creator}</p>
        </div>
        <FavoriteButton />
      </RightDiv>
    </Container>
  );
}
