import axios from "axios";

const ElectricGamesService = (() => {

    const electricGamesEndpoints = {
        games: "https://localhost:7016/game",
        gameCharacters: "https://localhost:7016/gameCharacter"
    }

    const getAllGames = async () => {
        const result = await axios.get(electricGamesEndpoints.games);
        return result.data;
    }
    const deleteGame = async (id: number) => {
        const result = await axios.delete(`${electricGamesEndpoints.games}/${id}`);
        console.log(result); 
    }

    const getAllGameCharacters = async () => {
        const result = await axios.get(electricGamesEndpoints.gameCharacters);
        return result.data 
    }
    const deleteGameCharacter = async(id:number) => {
        const result = await axios.delete(`${electricGamesEndpoints.games}/${id}`);
        console.log(result); 
    }

    return{
        getAllGames,
        deleteGame,
        getAllGameCharacters,
        deleteGameCharacter
    }

})();

export default ElectricGamesService;