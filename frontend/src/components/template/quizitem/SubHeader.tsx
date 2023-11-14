import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import LargeTag from "@/components/atoms/tags/LargeTag";
import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  problem: {
    question: string;
    options: string[];
  };
}

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

export default function SubHeader(props: any) {
  const [creator, setCreator] = useState<string>("qminlee723");

  return (
    // 개별 문제 조회 서브헤더
    <Container>
      <TagDiv>
        <LargeTag
          label={props.props.status === "UNSOLVED" ? "🤔 처음 푸는 문제" : "😎 이미 푼 문제"}
        />
        <LargeTag label={props.props.category} />
        <LargeTag label="객관식" />
      </TagDiv>

      <RightDiv>
        <div className="creator">
          <p>문제만든사람: {props.props.authorName}</p>
        </div>
        <FavoriteButton fav={props.props.isFavorite} />
      </RightDiv>
    </Container>
  );
}
