import axios from "axios";

const ElectricGamesService = (() => {

    // endpoint from
    const electricGamesEndpoints = {
        games: "https://localhost:7016/game",
        gameCharacters: "https://localhost:7016/gameCharacter"
    }



    // Game services
    const getAllGames = async () => {
        const result = await axios.get(electricGamesEndpoints.games);
        return result.data;
    }
    const getGamesById = async (id:number) => {
        const result = await axios.get(`${electricGamesEndpoints.gameCharacters}/${id}`)
        return result.data;
    }
    const getGamesByTitle =async (title:string) => {
        const result = await axios.get(`${electricGamesEndpoints.gameCharacters}/${title}`)
        return result.data;
    }
    const deleteGame = async (id: number) => {
        const result = await axios.delete(`${electricGamesEndpoints.games}/${id}`);
        console.log(result); 
    }



    // Game characters services
    const getAllGameCharacters = async () => {
        const result = await axios.get(electricGamesEndpoints.gameCharacters);
        return result.data;
    }
    const getCharacterById = async (id:number) => {
        const result = await axios.get(`${electricGamesEndpoints.gameCharacters}/${id}`)
        return result.data
    }
    const deleteGameCharacter = async(id:number) => {
        const result = await axios.delete(`${electricGamesEndpoints.games}/${id}`);
        console.log(result); 
    }
    const getCharacterByName = async (name: string) => {
        const result = await axios.get(`${electricGamesEndpoints.gameCharacters}/${name}`);
        return result.data;
    }


    return{
        getAllGames,
        getGamesById,
        getGamesByTitle,
        deleteGame,
        getAllGameCharacters,
        getCharacterById,
        deleteGameCharacter,
        getCharacterByName
    }

})();

export default ElectricGamesService;