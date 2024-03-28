import { ReactElement, useMemo } from "react";

interface Interface {
  image: ReactElement;
  href: string;
  name: string;
  category?: number;
  subcategories?: any[];
}

interface ILinks {
  label: string;
  href?: string;
  alt?: string;
  isDropdown: boolean;
  id?: string;
}
export const useMenu = () => {
  const games = useMemo<Interface[]>(
    () => [
      {
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://lh3.googleusercontent.com/proxy/nXqnFaMM8tcJOzyZjz3ayG5pq5PSl58KCGfh6z8fFoYyh6wq0hZale9uxq5nt4uXgfS3PQEN49K47ogHRb2RBfzJwnCJAQe33_8v6dIgNSShYOxiSOT_1q5g7Hk`}
            alt="categoria anime image"
          />
        ),
        href: "gamer",
        name: "Polos gamer",
        category: 1,
        subcategories: [
          {
            id: 1,
            title: "dota 2",
            subtitle: "Dota 2 Heroes",
          },
          {
            id: 2,
            title: "nintendo",
            subtitle: "Recuerdos de infancia Nintendo",
          },
          {
            id: 3,
            title: "starcraft",
            subtitle: "Juego de estrategia",
          },
          {
            id: 4,
            title: "warcraft",
            subtitle: "Juego de estrategia",
          },
          {
            id: 5,
            title: "diablo",
            subtitle: "Juego de Blizzard",
          },
          {
            id: 6,
            title: "sega",
            subtitle: "Recuerdo de Sega",
          },
          {
            id: 7,
            title: "otros",
            subtitle: "Mucho mas",
          },
        ],
      },
      {
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://static.vecteezy.com/system/resources/previews/021/623/400/original/shirohige-pirate-one-piece-logo-anime-free-png.png`}
            alt="categoria anime image"
          />
        ),
        href: "anime",
        name: "Polos anime",
        category: 2,
        subcategories: [
          {
            id: 1,
            title: "one piece",
            subtitle: "en busca del one piece",
          },
          {
            id: 2,
            title: "naruto",
            subtitle: "Naruto shipudden",
          },
          {
            id: 3,
            title: "dragon ball",
            subtitle: "Goku y mundo Z",
          },
          {
            id: 4,
            title: "Bleach",
            subtitle: "El shinigami favorito",
          },
          {
            id: 7,
            title: "otros",
            subtitle: "Mucho mas",
          },
        ],
      },
      {
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab52da00-71c2-4ae2-bc2a-3b28214b02c9/df5ivtx-eadd298a-d7bd-474b-8a5c-ac25ae236089.png/v1/fill/w_1280,h_1280/music_band_logo_design__song_logo_design_png__by_rahatislam11_df5ivtx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2FiNTJkYTAwLTcxYzItNGFlMi1iYzJhLTNiMjgyMTRiMDJjOVwvZGY1aXZ0eC1lYWRkMjk4YS1kN2JkLTQ3NGItOGE1Yy1hYzI1YWUyMzYwODkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.stwNmQZaDjjAVXsG4piJptiaoHLXKAsIMa3SAWCoV_c`}
            alt="categoria music image"
          />
        ),
        href: "musica",
        name: "Polos Music",
        category: 3,
        subcategories: [
          {
            id: 1,
            title: "punk",
          },
          {
            id: 2,
            title: "metalero",
          },
          {
            id: 3,
            title: "hippie",
          },
          {
            id: 4,
            title: "gotico",
          },
          {
            id: 5,
            title: "ravers",
          },
          {
            id: 7,
            title: "otros",
          },
        ],
      },
      {
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://images.vexels.com/media/users/3/220882/isolated/preview/fadcd536f480e0d2b29f05a003188f7e-ilustracion-de-idolo-inca-de-peru.png`}
            alt="categoria diseño inka"
          />
        ),
        href: "inka",
        name: "Polos diseño inka",
        category: 4,
        subcategories: [],
      },
    ],
    []
  );

  const shoes = useMemo<Interface[]>(
    () => [
      {
        name: "Varon",
        href: "hombre",
        image: (
          <img className="w-[100px] md:w-[175px]" src={`shoes/3.png`} alt="" />
        ),
      },
      {
        name: "Mujer",
        href: "mujer",
        image: (
          <img className="w-[100px] md:w-[175px]" src={`shoes/4.png`} alt="" />
        ),
      },
    ],
    []
  );

  const varios = useMemo<Interface[]>(
    () => [
      {
        name: "Mugs",
        href: "/tazas",
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://www.nespresso.com/static/us/solutions/product/pdp/porcelainmugs/nesp-festive-le-mug-set-2000x2000.png`}
            alt=""
          />
        ),
      },
      {
        name: "Escultura",
        href: "/escultura",
        image: (
          <img
            className="w-[100px] md:w-[150px]"
            src={`https://www.figurasmranime.cl/wp-content/uploads/2022/05/Fashion-anime-japanese-Naruto-action-figure.png_350x350-copia.png`}
            alt=""
          />
        ),
      },
    ],
    []
  );

  const Links: ILinks[] = useMemo(
    () => [
      {
        label: "Polos",
        isDropdown: true,
        id: "games",
      },
      {
        label: "Zapatillas",
        isDropdown: true,
        id: "shoes",
      },
      {
        label: "Varios",
        isDropdown: true,
        id: "varios",
      },
    ],
    []
  );
  return {
    games,
    shoes,
    varios,
    Links,
  };
};
