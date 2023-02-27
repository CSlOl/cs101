import ExtraSmallButton from "@/components/atoms/buttons/ExtraSmallButton";
import FavoriteButton from "@/components/atoms/buttons/FavoriteButton";
import LargeButton from "@/components/atoms/buttons/LargeButton";
import MediumButton from "@/components/atoms/buttons/MediumButton";
import SmallButton from "@/components/atoms/buttons/SmallButton";

export default function QuizItem() {
  return (
    <div>
      <div>개별 문제 조회</div>
      <LargeButton />
      <SmallButton />
      <ExtraSmallButton />
      <FavoriteButton />
      <MediumButton />
    </div>
  );
}
