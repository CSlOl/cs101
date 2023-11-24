import styled from "@emotion/styled";
import router from "next/router";
import { useEffect } from "react";
import api from "@/interceptor";
import newQuizState from "@/recoil/newquiz";
import { useRecoilState } from "recoil";

// 모달 창 뒷배경
export const SearchModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchModalContent = styled.div`
  // padding: 1.5rem 3rem;
  height: 350px;
  width: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #32333e;
  > div:nth-of-type(1) {
    font-size: 1.3em;
    font-family: "Press Start 2P";
    margin-left: 550px;
    :hover {
      cursor: pointer;
    }
  }
  > div:nth-of-type(2) {
    margin-top: 40px;
    font-family: "Dunggeunmo";
    font-size: 2em;
  }
  > div:nth-of-type(3) {
    margin-top: 30px;
    font-size: 1.7em;
  }
  > div:nth-of-type(4) {
    margin-top: 15px;
    font-size: 1em;
  }
  > div:nth-of-type(5) {
    margin-top: 5px;
    font-size: 1em;
  }
  > div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.25rem;
    > button {
      border: none;
      width: 180px;
      margin-top: 20px;
      padding: 0.2rem 0.6rem;
      font-size: 0.9rem;
      margin-right: 10px;
      border-radius: 5px;
      font-size: 1.5em;
      background-color: #5bb8a1;
      :hover {
        cursor: pointer;
      }
    }
    > :nth-of-type(2) {
      background-color: #c5cfcd;
    }
  }
`;

interface Props {
  clickModal: any;
}

export default function CreateModal(props: Props) {
  // 모달 뒤 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const [newQuiz, setNewQuiz] = useRecoilState(newQuizState);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  function onSubmit() {
    api
      .post(`${baseURL}/api/problem/pending`, newQuiz)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <SearchModalBox onClick={props.clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <div onClick={props.clickModal}>X</div>
        <div>알림!</div>
        <div>제출한 문제는 관리자 승인 이후 등록됩니다.</div>
        <div>문제 내용과 카테고리가 정확히 등록되었는지 다시 한 번 확인해주세요.</div>
        <div>과정 중 수정사항이 발견될 경우, 문제 내용이 변경될 수 있습니다.</div>
        <div>
          <button onClick={onSubmit}>계속하기</button>
          <button onClick={props.clickModal}>취소하기</button>
        </div>
      </SearchModalContent>
    </SearchModalBox>
  );
}
