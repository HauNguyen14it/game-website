import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getGames } from "../store/selectors";

import categories from "../config/categories";
import Navbar from "../components/Navbar";
import IAppState from "../interfaces/IAppState";
import { getGamesStartCreator } from "../store/actions/GameActionsCreator";
import { IGame } from "../interfaces/IGame";
import Games from "../components/Games";
import { useParams } from "react-router-dom";

interface IProps {
  getGames: Function;
  games: IGame[];
}

const CategoriesPage: React.FC<IProps> = ({ getGames, games }) => {
  const { id } = useParams();

  useEffect(() => {
    getGames();
  }, [getGames]);

  const filterGamesByCategory = (games: IGame[], category: string) =>
    games.filter((game: IGame) => game.categories.includes(category));

  return (
    <div>
      <Navbar categories={categories} />
      <Games games={filterGamesByCategory(games, id || "top")} />
    </div>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    games: getGames(store),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getGames: () => dispatch(getGamesStartCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
