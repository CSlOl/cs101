import ReadEssay from "@/components/organisms/readquiz/ReadEssay";
import ReadMultiple from "@/components/organisms/readquiz/ReadMultiple";
import ReadShortAnswer from "@/components/organisms/readquiz/ReadShortAnswer";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import { useRecoilState } from "recoil";
import typeState from "../../../recoil/type";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import api from "@/interceptor";

const Div = styled.div`
  width: 95vw;
`;

export default function QuizItemBody() {
  const [type, setType] = useRecoilState(typeState);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [problem, setProblem] = useState({});

  useEffect(() => {
    setType("객관식");
    api.get(`${baseURL}/api/problem/1`).then((res) => {
      setType(res.data.data.problem.type);
      console.log(res.data.data);
      setProblem(res.data.data.problem);
    });
  }, []);

  return (
    <Div>
      {type == "객관식" ? (
        <ReadMultiple problem={problem}/>
      ) : type === "주관식" ? (
        <ReadShortAnswer />
      ) : (
        <ReadEssay />
      )}
    </Div>
  );
}
