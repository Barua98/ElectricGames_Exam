import {ReactNode, useEffect, useState, createContext} from "react"
import IGameCharacterContext from "../interfaces/IGameChararacterContext"
import IGameCharacter from "../interfaces/IGameCharacter"
import ElectricGamesService from "../services/ElectricGamesService"

export const GameCharacterContext = createContext<IGameCharacterContext | null>(null);

type Props = {

    children: ReactNode
}

const GameCharacterProvider = ({children} : Props) => {

    const [gameCharacters, setGameCharacters] = useState<IGameCharacter[]>([])

    useEffect(() => {
        getGameCharacterFromService(); 
    }, [])

    const getGameCharacterFromService = async () => {
        const gameCharacterFromService = await ElectricGamesService.getAllGameCharacters();
        setGameCharacters(gameCharacterFromService)
    }

    const deleteCharacterById = async (id:number) => {
        await ElectricGamesService.deleteGameCharacter(id); 
        const newArray = gameCharacters.filter(gameCharacters => gameCharacters.id != id);
        setGameCharacters(newArray);
    }

    return (
        <GameCharacterContext.Provider value={{gameCharacters, deleteCharacterById}}>
            {children}
        </GameCharacterContext.Provider>
    )
}
export default GameCharacterProvider; 
