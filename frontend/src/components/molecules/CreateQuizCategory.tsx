import styled from "@emotion/styled";
import Dropdown from "../atoms/etc/Dropdown";

const Container = styled.div`
  font-family: "DungGeunMo";
  font-size: 2rem;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
`;

const Text = styled.div`
  margin-right: 20px;
`;

export default function CreateQuizCategory() {
  const types = [
    { value: "객관식", name: "객관식" },
    { value: "주관식", name: "주관식" },
  ];
  const categories = [
    { value: "네트워크", name: "네트워크" },
    { value: "운영체제", name: "운영체제" },
    { value: "데이터베이스", name: "데이터베이스" },
    { value: "자료구조", name: "자료구조" },
    { value: "앱", name: "앱" },
  ];

  return (
    <Container>
      <Text>유형</Text>
      <Dropdown options={types}></Dropdown>
      <Text>객관식</Text>
      <Dropdown options={categories}></Dropdown>
    </Container>
  );
}
