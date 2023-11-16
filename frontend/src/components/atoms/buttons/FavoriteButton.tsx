import Image from "next/image";
import { useState, useEffect } from "react";
import api from "@/interceptor";
import { useRouter } from "next/router";

export default function FavoriteButton(props: any) {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [favorite, setFavorite] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;

  // 문제 초기 상태 값으로 별모양 표시
  useEffect(() => {
    setFavorite(props.fav);
  }, [props.fav]);

  /**
   * 별 누르면 즐겨찾기 추가/해제
   * 이미 즐겨찾기 추가 된 문제 다시 추가하면 조회 에러 발생 주의
   */
  function handleFavorite() {
    if (favorite) {
      api
        .delete(`${baseURL}/api/problem/favorites/${id}`)
        .then((res) => {
          setFavorite(false);
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      api
        .post(`${baseURL}/api/problem/favorites/${id}`)
        .then((res) => {
          setFavorite(true);
        })
        .catch((e) => {
          alert(e);
        });
    }
  }

  return (
    <div
      onClick={() => {
        handleFavorite();
      }}
    >
      {favorite ? (
        <Image src="/fav_colored.png" alt="star_yellow" width={30} height={30} />
      ) : (
        <Image src="/fav_white.png" alt="star_white" width={30} height={30} />
      )}
    </div>
  );
}
