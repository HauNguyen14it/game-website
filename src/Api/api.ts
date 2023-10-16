import axios from 'axios';

export const getGamesFromApi = () : Promise<any> => {
    return axios.get('http://stage.whgstage.com/front-end-test/games.php');
}

export const getJackpotsFromApi = () : Promise<any> => {
    return axios.get('http://stage.whgstage.com/front-end-test/jackpots.php');
}
