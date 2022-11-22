import axios from "axios";

const ElectricGamesService = (() => {

    const electricGamesEndpoints = {
        games: "https://localhost:7016",
        gameCharacters: "https://localhost:7016"
    }

    const getAllGames = async () => {
        const result = await axios.get(electricGamesEndpoints.games);
        return result.data;
    }

    const getAllGameCharacters = async () => {
        const result = await axios.get(electricGamesEndpoints.gameCharacters);
        return result.data;
    }

    return{
        getAllGames,
        getAllGameCharacters
    }

})();

export default ElectricGamesService;