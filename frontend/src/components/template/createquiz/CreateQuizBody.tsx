import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CreateQuizCategory from "../../molecules/CreateQuizCategory";
import { useRecoilState } from "recoil";
import newQuizState from "@/recoil/newquiz";
import CreateMultiple from "@/components/organisms/createquiz/CreateMultiple";
import CreateShortAnswer from "@/components/organisms/createquiz/CreateShortAnswer";
import CreateEssay from "@/components/organisms/createquiz/CreateEssay";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import CreateModal from "@/components/template/common/CreateModal";
import api from "@/interceptor";
import { useRouter } from "next/router";
import swal from "sweetalert";

interface Props {
  stat?: String;
}

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  .row {
    display: flex;
    justify-content: space-between;
  }
`;

/**
 * 문제 작성 template: 객관식/주관식/서술형 컴포넌트 구분
 * @returns
 */
export default function CreateQuizBody(props: Props) {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { id } = router.query;
  const [newQuiz, setNewQuiz] = useRecoilState(newQuizState);
  const [authorId, setAuthorId] = useState(0);

  useEffect(() => {
    if (props.stat === "update" && id) {
      api
        .get(`${baseURL}/api/problem/pending/${id}`)
        .then((res) => {
          const problem = res.data.data.problem;
          setAuthorId(res.data.data.problem.authorId);
          setNewQuiz((prev) => ({ ...prev, title: problem.title }));
          setNewQuiz((prev) => ({ ...prev, category: problem.category }));
          setNewQuiz((prev) => ({ ...prev, answer: problem.answer }));
          setNewQuiz((prev) => ({ ...prev, description: problem.description }));
          setNewQuiz((prev) => ({ ...prev, type: problem.type }));
          setNewQuiz((prev) => ({ ...prev, question: problem.question }));
          setNewQuiz((prev) => ({ ...prev, options: problem.options }));
        })
        .catch(() => {
          // 없는 문제의 경우 404
          router.push("/error");
        });
    }
  }, [props.stat, id]);

  // 모달 관리
  const [showModal, setShowModal] = useState(false);
  function clickModal() {
    // 유효성 검사
    if (newQuiz.title === "") {
      alert("제목을 입력하세요.");
    } else if (newQuiz.question === "") {
      alert("문제를 입력하세요.");
    } else if (newQuiz.answer === "") {
      alert("정답을 입력하세요.");
    } else if (newQuiz.description === "") {
      alert("해설을 입력하세요.");
    } else {
      setShowModal(!showModal);
    }
  }

  // 답안 제출
  function onSubmit() {}

  function onAccept() {
    api
      .post(`${baseURL}/api/problem/pending/authorization`, {
        pendingProblemId: id,
        title: newQuiz.title,
        category: newQuiz.category,
        type: newQuiz.type,
        question: newQuiz.question,
        options: newQuiz.options,
        answer: newQuiz.answer,
        description: newQuiz.description,
        authorId: authorId,
      })
      .then(() => {
        router.push("/admin");
      })
      .catch(() => {
        swal("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", {
          icon: "error",
        });
      });
  }

  // 문제 반려
  function onReject() {
    api
      .put(`${baseURL}/api/problem/pending/authorization/${id}`)
      .then((res) => {
        router.push("/admin");
      })
      .catch((e) => {
        swal("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", {
          icon: "error",
        });
      });
  }

  return (
    <Div>
      <CreateQuizCategory />
      {newQuiz.type == "객관식" ? (
        <CreateMultiple />
      ) : newQuiz.type === "주관식" ? (
        <CreateShortAnswer />
      ) : (
        <CreateEssay />
      )}

      {props.stat === "update" ? (
        <div className="row">
          <LargeButton onClick={onAccept} type="half" label="등록하기" />
          <LargeButton onClick={onReject} type="red" label="반려하기" />
        </div>
      ) : (
        <div onClick={clickModal}>
          <LargeButton onClick={onSubmit} label="승인 요청하기" />
        </div>
      )}

      {showModal && <CreateModal clickModal={clickModal} />}
    </Div>
  );
}
