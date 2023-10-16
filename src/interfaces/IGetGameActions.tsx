import AppActionTypes from '../enums/AppActionTypes';
import { IGame } from './IGame';

export interface IGetStartGamesAction{
    type :  AppActionTypes.FETCH_GAMES
}

export interface IGetGamesAction{
    type :  AppActionTypes.GET_GAMES,
    games :  IGame[]
}

