import { useState } from "react";
import QuestionBox from "@/components/atoms/boxes/QuestionBox";
import SelectedOption from "@/components/atoms/options/SelectedOption";
import LargeButton from "@/components/atoms/buttons/LargeButton";

interface Props {
  problem: {
    question: string;
    options: string[];
  };
}

export default function ReadMultiple(props: any) {
  const [id, setId] = useState<number>(0);
  const [selected, setSelected] = useState(0);

  function onSelect(num: number) {
    setSelected(num);
  }

  return (
    <div>
      {/* <h1>{props}</h1> */}
      <QuestionBox question={props.props.question} />
      {/* problem api 호출 완료 후(props 받으면) map 실행 */}
      {props.props.options && (
        <div>
          {props.props.options.map((option: string, index: number) => (
            <div
              key={index}
              onClick={() => {
                onSelect(index + 1);
              }}
            >
              <SelectedOption key={index} num={index + 1} text={option} selected={selected} />
            </div>
          ))}
        </div>
      )}

      <LargeButton label="제출하기" />
    </div>
  );
}
