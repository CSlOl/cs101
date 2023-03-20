import { useState } from "react";
import Image from "next/image";

export default function Status() {
  const [status, setStatus] = useState<string>("lock");

  return status === "right" ? (
    <Image src="/status_right.png" alt="green check" width={35} height={48} />
  ) : status === "wrong" ? (
    <Image src="/status_wrong.png" alt="red x" width={30} height={30} />
  ) : (
    <Image src="/status_locked.png" alt="lock" width={35} height={45} />
  );
}
