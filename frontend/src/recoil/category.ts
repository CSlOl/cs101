import { atom } from "recoil";

const categoryState = atom({
  key: "categoryState",
  default: "network",
});

export default categoryState;
