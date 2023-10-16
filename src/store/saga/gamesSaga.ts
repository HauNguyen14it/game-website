import { getGamesFromApi, getJackpotsFromApi } from "../../Api/api";
import AppActionTypes from "../../enums/AppActionTypes";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { getGamesDataCreator } from "../actions/GameActionsCreator";
import { IGame } from "../../interfaces/IGame";

export function* getGamesSaga(): any {
  try {
    const responseGame = yield call(getGamesFromApi);
    const responseJackpot = yield call(getJackpotsFromApi);

    const jackpots = responseJackpot.data.map(
      (item: { game: any; amount: any }) => ({
        id: item.game,
        amount: item.amount,
      })
    );
    const merged = responseGame.data
      .concat(jackpots)
      .reduce((acc: { [x: string]: any }, x: { id: string | number }) => {
        acc[x.id] = Object.assign(acc[x.id] || {}, x);
        return acc;
      }, {});
    const games = Object.keys(merged).map((k) => merged[k]);

    yield put(getGamesDataCreator(games));
  } catch (error) {}
}

export function* gamesSaga() {
  yield all([takeEvery(AppActionTypes.FETCH_GAMES, getGamesSaga)]);
}
