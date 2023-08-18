import { atom } from "recoil";

const typeState = atom({
  key: "typeState",
  default: "객관식",
});

export default typeState;
