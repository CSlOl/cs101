import { useState } from "react";
import QuestionBox from "@/components/atoms/boxes/QuestionBox";
import SelectedOption from "@/components/atoms/options/SelectedOption";

export default function ReadMultiple() {
  const [id, setId] = useState<number>(0);
  const [question, setQuestion] = useState(
    "다음 중 스택(stack)에 관한 설명 중 옳지 않은 것은?"
  );
  const options = [
    "First-In, Last-Out의 구조를 가지고 있다.",
    "큐(Queue)와 동일한 구조를 가지고 있다.",
    "삽입과 삭제가 일어나는 곳이 같다.",
    "가장 먼저 저장되는 데이터는 스택의 아래 쪽부터 쌓인다.",
  ];

  return (
    <div>
      <QuestionBox question={question} />
      {options.map((option, index) => (
        <SelectedOption key={id} num={index} text={option}></SelectedOption>
      ))}
    </div>
  );
}
