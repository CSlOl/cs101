import typeState from "@/recoil/type";
import categoryState from "@/recoil/category";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import Dropdown from "../atoms/etc/Dropdown";

const Container = styled.div`
  font-family: "DungGeunMo";
  font-size: 1.5em;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  width: 75px;
`;

const Text2 = styled.div`
  width: 120px;
`;

export default function CreateQuizCategory() {
  const types = [
    { value: "multiple", name: "객관식" },
    { value: "short-answer", name: "주관식" },
    { value: "essay", name: "서술형" },
  ];
  const categories = [
    { value: "네트워크", name: "네트워크" },
    { value: "운영체제", name: "운영체제" },
    { value: "데이터베이스", name: "데이터베이스" },
    { value: "자료구조", name: "자료구조" },
    { value: "앱", name: "앱" },
  ];

  const [type, setType] = useRecoilState(typeState);
  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const [category, setCategory] = useRecoilState(categoryState);
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <Container>
      <Text1>유형</Text1>
      <Dropdown options={types} func={handleType}></Dropdown>
      <Text2>문제 분류</Text2>
      <Dropdown options={categories} func={handleCategory}></Dropdown>
    </Container>
  );
}
