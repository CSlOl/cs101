import ReadEssay from "@/components/organisms/readquiz/ReadEssay";
import ReadMultiple from "@/components/organisms/readquiz/ReadMultiple";
import ReadShortAnswer from "@/components/organisms/readquiz/ReadShortAnswer";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import { useRecoilState } from "recoil";
import typeState from "../../../recoil/type";
import { useEffect } from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 95vw;
`;

export default function QuizItemBody() {
  const [type, setType] = useRecoilState(typeState);

  useEffect(() => {
    setType("short-answer");
  }, []);

  return (
    <Div>
      {type == "multiple" ? (
        <ReadMultiple />
      ) : type === "short-answer" ? (
        <ReadShortAnswer />
      ) : (
        <ReadEssay />
      )}
      <LargeButton label="제출하기" />
    </Div>
  );
}
