import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "gyumin",
});

export default nameState;
