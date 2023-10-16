import { Reducer } from "redux";
import IGameState from "../../interfaces/IGameState";

import GameActions from "../actions/GameActions.type";
import AppActionTypes from "../../enums/AppActionTypes";

const initialGameState: IGameState = {
  games: [],
};

const gamesReducer: Reducer<IGameState, GameActions> = (
  state = initialGameState,
  action
) => {
  switch (action.type) {
    case AppActionTypes.FETCH_GAMES: {
      return {
        ...state,
      };
    }
    case AppActionTypes.GET_GAMES: {
      return {
        ...state,
        games: action.games,
      };
    }
    default:
      return state;
  }
};

export default gamesReducer;
