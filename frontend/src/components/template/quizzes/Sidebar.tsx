import SidebarForm from "@/components/organisms/SidebarForm";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0.5em 0 0 1em;
`;

export default function Sidebar() {
  return (
    <Container>
      <SidebarForm title="Category" />
      <SidebarForm title="Type" />
    </Container>
  );
}
