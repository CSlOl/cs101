import Image from "next/image";

export default function FavoriteButton() {
  return (
    <div>
      <Image src="/fav_black.png" alt="star_black" width={30} height={30} />
      <Image src="/fav_white.png" alt="star_white" width={30} height={30} />
      <Image src="/fav_colored.png" alt="star_yellow" width={30} height={30} />
    </div>
  );
}
