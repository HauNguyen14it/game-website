import { IGame } from '../../interfaces/IGame';
import AppActionTypes from '../../enums/AppActionTypes';
import  {IGetGamesAction ,IGetStartGamesAction} from '../../interfaces/IGetGameActions'

export const getGamesDataCreator = (games : IGame[]) : IGetGamesAction  => {
    return { 
        type : AppActionTypes.GET_GAMES,
        games,
    }
}

export const getGamesStartCreator = () : IGetStartGamesAction  => {
    return { 
        type : AppActionTypes.FETCH_GAMES
    }
}
