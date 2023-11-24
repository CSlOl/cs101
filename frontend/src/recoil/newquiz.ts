import { atom } from "recoil";

const newQuizState = atom({
  key: "newQuizState ",
  default: {
    title: "",
    category: "네트워크",
    type: "객관식",
    question: "",
    options: ["", "", "", ""],
    answer: "",
    description: "",
  },
});

export default newQuizState;
