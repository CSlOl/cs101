import ReadEssay from "@/components/organisms/readquiz/ReadEssay";
import SubHeader from "./SubHeader";
import ReadMultiple from "@/components/organisms/readquiz/ReadMultiple";
import ReadShortAnswer from "@/components/organisms/readquiz/ReadShortAnswer";
import { useRecoilState } from "recoil";
import typeState from "../../../recoil/type";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import api from "@/interceptor";
import { useRouter } from "next/router";

const Div = styled.div`
  width: 95vw;
`;

export default function QuizItemBody() {
  const router = useRouter();
  const { id } = router.query;

  const [type, setType] = useRecoilState(typeState);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [problem, setProblem]: any = useState({});

  useEffect(() => {
    setType("객관식");
    if (id) {
      // url에서 값 가져온 경우 api 호출
      api
        .get(`${baseURL}/api/problem/${id}`)
        .then((res) => {
          setType(res.data.data.problem.type);
          // console.log(res.data.data.problem);
          setProblem(res.data.data.problem);
        })
        .catch(() => {
          // 없는 문제의 경우 404
          router.push("/error");
        });
    }
  }, [id]);

  return (
    <Div>
      <SubHeader props={problem} />
      {type == "객관식" ? (
        <ReadMultiple props={problem} />
      ) : type === "주관식" ? (
        <ReadShortAnswer />
      ) : (
        <ReadEssay />
      )}
    </Div>
  );
}
