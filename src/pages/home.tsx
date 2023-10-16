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

interface IProps {
  getGames: Function;
  games: IGame[];
}

const HomePage: React.FC<IProps> = ({ getGames, games }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <div>
      <Navbar categories={categories} />
      <Games games={games} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
