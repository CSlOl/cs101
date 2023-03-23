import Image from "next/image";
import { useState } from "react";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      {favorite ? (
        <Image
          src="/fav_colored.png"
          alt="star_yellow"
          width={30}
          height={30}
          onClick={handleClick}
        />
      ) : (
        <Image
          src="/fav_white.png"
          alt="star_white"
          width={30}
          height={30}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
{
  /* <Image src="/fav_black.png" alt="star_black" width={30} height={30} />  */
}
