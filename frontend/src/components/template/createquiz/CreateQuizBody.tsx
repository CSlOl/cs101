import styled from "@emotion/styled";
import CreateQuizCategory from "../../molecules/CreateQuizCategory";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import typeState from "../../../recoil/type";
import categoryState from "@/recoil/category";
import CreateMultiple from "@/components/organisms/createquiz/CreateMultiple";
import CreateShortAnswer from "@/components/organisms/createquiz/CreateShortanswer";
import CreateEssay from "@/components/organisms/createquiz/CreateEssay";

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function CreateQuizBody() {
  const [type, setType] = useRecoilState(typeState);
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <Div>
      <CreateQuizCategory />
      {type == "multiple" ? (
        <CreateMultiple />
      ) : type === "short-answer" ? (
        <CreateShortAnswer />
      ) : (
        <CreateEssay />
      )}
    </Div>
  );
}
