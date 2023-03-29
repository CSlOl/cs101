import Image from "next/image";
import styled from "@emotion/styled";

const Div = styled.div`
  position: absolute;
  height: 100vh;
  left: 0;
`;

export default function Stars() {
  return (
    <Div>
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={15}
        height={12}
        style={{ position: "absolute", left: "5vw", top: "20vh" }}
      />
      <Image
        src="/bgstar_purple.png"
        alt="star"
        width={21}
        height={15}
        style={{ position: "absolute", left: "25vw", top: "40vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "14vw", top: "80vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "45vw", top: "18vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={30}
        height={20}
        style={{ position: "absolute", left: "42vw", top: "55vh" }}
      />
      <Image
        src="/bgstar_vivid.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "62vw", top: "25vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "68vw", top: "60vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "80vw", top: "18vh" }}
      />
      <Image
        src="/bgstar_white.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "90vw", top: "50vh" }}
      />
      <Image
        src="/bgstar_dim.png"
        alt="star"
        width={20}
        height={15}
        style={{ position: "absolute", left: "85vw", top: "85vh" }}
      />
    </Div>
  );
}
