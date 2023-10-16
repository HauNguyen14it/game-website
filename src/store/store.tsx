import { Store, createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import IAppState from "../interfaces/IAppState";
import GameReducer from "./reducers/gamesReducers";
import { gamesSaga } from "./saga/gamesSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<IAppState>({
  gameState: GameReducer,
});

export default function createGlobalStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(gamesSaga);
  return store;
}
