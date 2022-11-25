import {ReactNode, useEffect, useState, createContext } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGames from "../interfaces/IGames";
import ElectricGamesService from "../services/ElectricGamesService";

export const GameContext = createContext<IGameContext | null>(null)

type Props = {
    children: ReactNode
}

const GameProvider = ({children} : Props) => {

    const [games, setGames] = useState<IGames[]>([])

    useEffect(() => {
        getGamesFromService();
    }, [])

    const getGamesFromService = async () => {
        const gamesFromService = await ElectricGamesService.getAllGames();
        setGames( gamesFromService );
        console.log(games)
    }

    const deleteGameById = async (id: number) => {
        await ElectricGamesService.deleteGame(id);
        const newArray = games.filter( game => game.id != id );
        setGames(newArray);
    }

    const getGameById = async (id: number) => {
        await ElectricGamesService.getGamesById(id);
        const newArray = games.filter( game => game.id == id);
        setGames(newArray);
    }

    const getGameByTitle = async (title: string) => {
        await ElectricGamesService.getGamesByTitle(title);
        const newArray = games.filter( game => game.title == title);
        setGames(newArray);
    }

    const postGame = async (game: IGames) => {
        const gamesFromService = await ElectricGamesService.postGame(game);
        setGames(gamesFromService);
    }

    return (
        <GameContext.Provider value={{games, deleteGameById, postGame, getGameById, getGameByTitle}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;