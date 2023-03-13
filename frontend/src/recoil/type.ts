import { atom } from "recoil";

const typeState = atom({
  key: "typeState",
  default: "multiple",
});

export default typeState;
