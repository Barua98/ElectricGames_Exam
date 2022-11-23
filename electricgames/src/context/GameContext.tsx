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
    }

    const deleteGameById = async (id: number) => {
        await ElectricGamesService.deleteGame(id);
        const newArray = games.filter( game => game.id != id );
        setGames(newArray);
    }

    return (
        <GameContext.Provider value={{games, deleteGameById}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;