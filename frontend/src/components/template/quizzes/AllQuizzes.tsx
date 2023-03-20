import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import Status from "@/components/atoms/etc/Status";
import SmallTag from "@/components/atoms/tags/SmallTag";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const ListTitle = styled.div`
  display: flex;
`;

const ListDiv = styled.div`
  display: flex;
`;

// 전체 문제 리스트
export default function AllQuizzes() {
  return (
    <Container>
      <ListTitle></ListTitle>
      <ListDiv>
        <FavoriteButton />
        <Status />
        <SmallTag type="자료구조" category="" />
      </ListDiv>
    </Container>
  );
}
