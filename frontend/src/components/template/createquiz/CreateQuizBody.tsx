import { useState } from "react";
import styled from "@emotion/styled";
import CreateQuizCategory from "../../molecules/CreateQuizCategory";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import typeState from "../../../recoil/type";
import categoryState from "@/recoil/category";
import CreateMultiple from "@/components/organisms/createquiz/CreateMultiple";
import CreateShortAnswer from "@/components/organisms/createquiz/CreateShortAnswer";
import CreateEssay from "@/components/organisms/createquiz/CreateEssay";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import CreateModal from "@/components/template/common/CreateModal";

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

/**
 * 문제 작성 template: 객관식/주관식/서술형 컴포넌트 구분
 * @returns
 */
export default function CreateQuizBody() {
  const [type, setType] = useRecoilState(typeState);
  const [category, setCategory] = useRecoilState(categoryState);

  // 삭제 모달 관리
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);

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
      <div onClick={clickModal}>
        <LargeButton label="승인 요청하기" />
      </div>

      {showModal && <CreateModal clickModal={clickModal} />}
    </Div>
  );
}
