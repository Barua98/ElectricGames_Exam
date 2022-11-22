import IGameCharacter from "./IGameCharacter"


interface IGameCharacterContext {
    games: IGameCharacter[];
    deleteCharacterById: (id: number) => void; 
}

export default IGameCharacter; 
