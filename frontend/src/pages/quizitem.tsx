import ExtraSmallButton from "@/components/atoms/buttons/ExtraSmallButton";
import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import SmallButton from "@/components/atoms/buttons/SmallButton";
import Header from "../components/Header";

export default function QuizItem() {
  return (
    <div>
      <Header />
      <div>개별 문제 조회</div>
      <LargeButton />
      <SmallButton />
      <ExtraSmallButton />
      <FavoriteButton />
    </div>
  );
}
