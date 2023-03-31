import Image from "next/image";
import styled from "@emotion/styled";
import SmallTag from "../atoms/tags/SmallTag";

const Container = styled.div`
  width: 30vw;
  height: 25vh;
  background-color: #ffffff80;
  border-radius: 10px;
  padding-top: 2vh;

  .title {
    margin-top: 2vh;
    margin-left: 2px;
    margin-right: 2px;
  }

  .tags {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
  }
`;

interface Props {
  question: string;
  category: string;
  type: string;
}

export default function TodaysQuizCard(props: Props) {
  const logos = ["/logo_basic.png", "/logo_purple.png", "/logo_red.png"];
  const random = Math.floor(Math.random() * 3);

  return (
    <Container>
      <Image src={logos[random]} alt="logo" width={70} height={70}></Image>
      <div className="title">{props.question}</div>
      <div className="tags">
        <SmallTag category={props.category} type="" />
        <SmallTag category="" type={props.type} />
      </div>
    </Container>
  );
}
