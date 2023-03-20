import NumberTag from "@/components/atoms/tags/NumberTag";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const CategoryDiv = styled.div`
  display: flex;
`;

const TypeDiv = styled.div`
  display: flex;
`;

export default function Sidebar() {
  return (
    <Container>
      <CategoryDiv>
        <NumberTag />
      </CategoryDiv>
      <TypeDiv>
        <NumberTag />
      </TypeDiv>
    </Container>
  );
}
