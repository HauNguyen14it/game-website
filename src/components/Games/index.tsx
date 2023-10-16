import React from "react";
import { IGame } from "../../interfaces/IGame";
import GameCard from "../GameCard";
import { GamesContainerStyled, TitleStyled } from "./index.styles";

interface IProps {
  games: IGame[];
}
export const Games: React.FC<IProps> = ({ games }) => {
  return (
    <GamesContainerStyled>
      {games.length > 0 ? (
        games.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <TitleStyled >No result!</TitleStyled>
      )}
    </GamesContainerStyled>
  );
};

export default Games;
