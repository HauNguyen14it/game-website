import {Selector} from "react-redux";
import IAppState from "../interfaces/IAppState";
import { IGame } from "../interfaces/IGame";

export const getGames: Selector<IAppState, IGame[]> = state => state.gameState.games;
