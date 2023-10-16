import { IGetGamesAction ,IGetStartGamesAction} from '../../interfaces/IGetGameActions'

type GameActions = IGetGamesAction | IGetStartGamesAction;

export default GameActions;