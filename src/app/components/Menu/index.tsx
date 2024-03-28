import Link from "next/link";
import * as Styled from "./styles";

import { Dropdowns } from "../shared/Dropdowns";
import { Button } from "@nextui-org/react";
import { useMenu } from "@/hooks/useMenu";

interface MenuProps {
  show: boolean;
  selectedMenu: "games" | "varios" | "shoes" | null;
}

export function Menu({ show, selectedMenu }: MenuProps) {
  const { games, shoes, varios } = useMenu();

  return (
    <>
      <Styled.Container show={show} selected={selectedMenu || "null"}>
        <Styled.GamesContainer selected={selectedMenu || "games" || "shoes"}>
          {selectedMenu === "games" && (
            <>
              {games?.map((game: any) => {
                if (game.subcategories.length === 0) {
                  return (
                    <Link href={`inka`} className="flex flex-col">
                      {game.image}
                      <Button variant="bordered">{game.name}</Button>
                    </Link>
                  );
                }
                return <Dropdowns game={game} />;
              })}
            </>
          )}
          {selectedMenu === "shoes" && (
            <>
              {shoes?.map((game: any) => {
                return (
                  <Link href={`shoes/${game.href}`} className="flex flex-col">
                    {game.image}
                    <Button variant="bordered">{game.name}</Button>
                  </Link>
                );
              })}
            </>
          )}
          {selectedMenu === "varios" && (
            <>
              {varios?.map((game) => (
                <span key={game.name}>
                  <Link href={`${game.href}`}>
                    <Styled.Game>
                      {game.image}
                      <p className="text-sm">{game.name}</p>
                    </Styled.Game>
                  </Link>
                </span>
              ))}
            </>
          )}
        </Styled.GamesContainer>
      </Styled.Container>
    </>
  );
}
