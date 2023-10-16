import React from "react";
import { IGame } from "../../interfaces/IGame";
import {
  BackdropStyled,
  ButtonStyled,
  CardContainerStyled,
  ContentWrapperStyled,
  ImageStyled,
  JackpotsNumbStyled,
  JackpotsStyled,
  NewBadgeStyled,
  TitleStyled,
  TopBadgeStyled,
} from "./index.styles";

import { TopIcon, NewIcon } from "../../assets/icon";

interface IProps {
  game: IGame;
}

export const GameCard: React.FC<IProps> = ({ game }) => {
  const currencyFormat = (number: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      useGrouping: false,
    }).format(number);

  const checkCategory = (categories: string[], category: string) =>
    categories.includes(category);

  return (
    <CardContainerStyled>
      <ImageStyled src={`http:${game.image}`} alt={game.name} />
      {game.amount && (
        <>
          <JackpotsStyled />
          <JackpotsNumbStyled>{currencyFormat(game.amount)}</JackpotsNumbStyled>
        </>
      )}
      {checkCategory(game.categories, "top") && (
        <TopBadgeStyled src={TopIcon} alt="top" />
      )}
      {checkCategory(game.categories, "new") && (
        <NewBadgeStyled src={NewIcon} alt="new" />
      )}
      <BackdropStyled></BackdropStyled>
      <ContentWrapperStyled>
        <TitleStyled>{game.name}</TitleStyled>
        <ButtonStyled>Play</ButtonStyled>
      </ContentWrapperStyled>
    </CardContainerStyled>
  );
};

export default GameCard;
