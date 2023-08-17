import ReadEssay from "@/components/organisms/readquiz/ReadEssay";
import ReadMultiple from "@/components/organisms/readquiz/ReadMultiple";
import ReadShortAnswer from "@/components/organisms/readquiz/ReadShortAnswer";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import { useRecoilState } from "recoil";
import typeState from "../../../recoil/type";
import { useEffect } from "react";
import styled from "@emotion/styled";
import api from "@/interceptor";

const Div = styled.div`
  width: 95vw;
`;

export default function QuizItemBody() {
  const [type, setType] = useRecoilState(typeState);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    setType("multiple");
    api.get(`${baseURL}/api/problem/1`).then((res) => {
      console.log(res);
    });
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
