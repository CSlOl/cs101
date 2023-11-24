import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import Dropdown from "../atoms/etc/Dropdown";
import newQuizState from "@/recoil/newquiz";

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

/**
 * 유형 / 분류 선택하는 드롭다운 포함
 */
export default function CreateQuizCategory() {
  const types = [
    { value: "객관식", name: "객관식" },
    { value: "주관식", name: "주관식" },
    { value: "서술형", name: "서술형" },
  ];
  const categories = [
    { value: "네트워크", name: "네트워크" },
    { value: "운영체제", name: "운영체제" },
    { value: "데이터베이스", name: "데이터베이스" },
    { value: "자료구조", name: "자료구조" },
    { value: "앱", name: "앱" },
  ];

  const [newQuiz, setNewQuiz] = useRecoilState(newQuizState);

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewQuiz((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewQuiz((prev) => ({ ...prev, category: e.target.value }));
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
